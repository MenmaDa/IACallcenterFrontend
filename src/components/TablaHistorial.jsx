import { nombres } from "../utils/nombres";

export default function TablaHistorial({

historial

}){

return(

<div className="bg-white rounded shadow p-4">

<h4 className="mb-4">

Historial Predicciones

</h4>

<div className="table-responsive">

<table className="table table-bordered">

<thead>

<tr>

<th>Modelo</th>
<th>Clase</th>
<th>Resultado</th>
<th>Sugerencias IA</th>

</tr>

</thead>

<tbody>

{
historial.map((item,index)=>(

<tr key={index}>

<td>

{item.modelo}

</td>

<td>

{nombres[item.clase]}

</td>

<td>

<span
className={

item.clase===0
?"badge bg-success"
:item.clase===1
?"badge bg-warning"
:"badge bg-danger"

}
>

{item.resultado}

</span>

</td>

<td>

{
item.recomendaciones?.length>0
?

<ul className="mb-0">

{
item.recomendaciones.map(
(r,i)=>(

<li key={i}>
{r}
</li>

))
}

</ul>

:

"Sin sugerencias"

}

</td>

</tr>

))
}

</tbody>

</table>

</div>

</div>

)

}