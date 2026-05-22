import { generarDatosModelos } from "../utils/graficas";

export default function CardsResumen({historial}){

const datosModelos=
generarDatosModelos(historial);

return(

<div className="row g-4 mb-4">

<div className="col-sm-6 col-xl-4">

<div className="bg-white rounded shadow p-4">

<h6>Total Predicciones</h6>

<h2 className="text-dark border border-dark p-3">

{historial.length}

</h2>

</div>

</div>


<div className="col-sm-6 col-xl-4">

<div className="bg-white rounded shadow p-4">

<h6>Modelo Más Usado</h6>

<h5 className="text-dark border border-dark p-3">

{
historial.length>0
?

datosModelos.reduce(
(a,b)=>

a.cantidad>b.cantidad
?a:b
).modelo

:

"Sin datos"
}

</h5>

</div>

</div>


<div className="col-sm-6 col-xl-4">

<div className="bg-white rounded shadow p-4">

<h6>Llamadas Críticas</h6>

<h2 className="text-dark border border-dark p-3">

{
historial.filter(
h=>h.clase===2
).length
}

</h2>

</div>

</div>

</div>

)

}