import {useState} from "react";
import {analizarLlamada} from "../services/ApiService";

export default function useFormulario(
cargarHistorial
){

const [form,setForm]=useState({

enojo:"",
confusion:"",
tiempo:"",
tono:"",
sentimiento:"",
interrupciones:"",
tiempo_respuesta:"",
modelo:"LogisticRegression"

});

const handleChange=(e)=>{

setForm({

...form,
[e.target.name]:e.target.value

})

};

const analizar=async()=>{

await analizarLlamada(form);

await cargarHistorial();

setForm({

enojo:"",
confusion:"",
tiempo:"",
tono:"",
sentimiento:"",
interrupciones:"",
tiempo_respuesta:"",
modelo:form.modelo

})

};

return{

form,
handleChange,
analizar

}

}