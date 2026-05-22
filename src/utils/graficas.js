export const generarDatosModelos=(historial)=>[

{
modelo:"Logistic",
cantidad:historial.filter(
h=>h.modelo==="LogisticRegression"
).length
},

{
modelo:"RandomForest",
cantidad:historial.filter(
h=>h.modelo==="RandomForest"
).length
},

{
modelo:"Gradient",
cantidad:historial.filter(
h=>h.modelo==="GradientBoosting"
).length
}

]