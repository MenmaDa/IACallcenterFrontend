const URL = import.meta.env.VITE_API_URL;

export async function obtenerHistorial(){

    const res=await fetch(
        `${URL}/historial`
    );

    if(!res.ok){

        throw new Error(
            "Error cargando historial"
        );

    }

    return await res.json();
}

export async function analizarLlamada(form){

    const res=await fetch(

        `${URL}/predecir/${form.modelo}`,

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                enojo:Number(form.enojo),
                confusion:Number(form.confusion),
                tiempo:Number(form.tiempo),
                tono:Number(form.tono),
                sentimiento:Number(form.sentimiento),
                interrupciones:Number(form.interrupciones),
                tiempo_respuesta:Number(form.tiempo_respuesta)

            })

        }

    );

    if(!res.ok){

        throw new Error(
            "Error API"
        );

    }

    return await res.json();

}