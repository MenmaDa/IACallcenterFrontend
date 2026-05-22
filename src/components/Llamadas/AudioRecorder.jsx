import { useState, useRef } from "react";

export default function AudioRecorder({

modelo="LogisticRegression",
cargarHistorial

}){

const [grabando,setGrabando]=useState(false);
const [audioURL,setAudioURL]=useState(null);

const mediaRecorderRef=useRef(null);
const chunksRef=useRef([]);

const iniciarGrabacion=async()=>{

try{

const stream=await navigator.mediaDevices.getUserMedia({
audio:true
});

const mediaRecorder=
new MediaRecorder(stream);

mediaRecorderRef.current=
mediaRecorder;

chunksRef.current=[];

mediaRecorder.ondataavailable=(e)=>{

if(e.data.size>0){

chunksRef.current.push(
e.data
);

}

};

mediaRecorder.onstop=async()=>{

const blob=new Blob(
chunksRef.current,
{
type:"audio/wav"
}
);

const url=
URL.createObjectURL(blob);

setAudioURL(url);

await enviarAudio(blob);

};

mediaRecorder.start();

setGrabando(true);

}catch(error){

console.log(error);

alert(
"No se pudo acceder al micrófono"
);

}

};

const detenerGrabacion=()=>{

mediaRecorderRef.current.stop();

setGrabando(false);

};

const enviarAudio=async(blob)=>{

try{

const formData=
new FormData();

formData.append(
"archivo",
new File(
[blob],
"llamada.wav"
)
);

const URL = import.meta.env.VITE_API_URL;

const res=
await fetch(

`${URL}/analizar_audio/${modelo}`,

{
method:"POST",
body:formData
}

);

const data=
await res.json();

console.log(data);

alert(
data.prediccion.resultado
);

if(cargarHistorial){

await cargarHistorial();
}

}catch(error){

console.log(error);

alert(
"Error enviando audio"
);

}

};

return(

<div className="bg-white rounded shadow p-4 mb-4">

<h4>
Analizar llamada por voz
</h4>

{
!grabando
?
<button
className="btn btn-success"
onClick={iniciarGrabacion}
>
🎙 Iniciar llamada
</button>

:

<button
className="btn btn-danger"
onClick={detenerGrabacion}
>
⏹ Detener llamada
</button>

}

{
audioURL && (

<div className="mt-3">

<audio
controls
src={audioURL}
/>

</div>

)

}

</div>

)

}