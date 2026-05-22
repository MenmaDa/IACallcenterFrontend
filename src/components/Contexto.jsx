export default function Contexto({}){

return(

<div className="bg-white rounded shadow p-4">

<h4 className="mb-4">

Informacion Contextual aplicativo de las predicciones

</h4>

<p>
    El aplicativo usa 7 tipos diferentes de datos para realizar predicciones.
    Estos datos incluyen: enojo, confusión, duracion de la llamada, tono de voz, sentimiento, numero de interrupciones y tiempo en segundos.
    Cada uno de estos datos se utiliza para alimentar modelos de aprendizaje automático que analizan las llamadas y generan predicciones sobre el estado emocional del cliente.
    Estas predicciones pueden ser utilizadas para mejorar la experiencia del cliente, identificar áreas de mejora en el servicio y proporcionar información valiosa para la toma de decisiones en el ámbito de atención al cliente.
    Tiene 2 fuciones, o se digitalizan los numeros manualmente y se realiza la llamada con uno de los 3 modelos de prediccion, o se graba un audio y se almacena en el historial de llamadas y se obtiene un analisis completo de las mismas.
</p>

</div>

)

}