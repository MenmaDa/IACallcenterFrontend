import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer,
PieChart,
Pie,
Cell,
Legend

} from "recharts";

import { nombres } from "../utils/nombres";
import { generarDatosModelos } from "../utils/graficas";

export default function Graficas({

historial

}){

const colores=[
"#22c55e",
"#facc15",
"#ef4444"
];

const datosModelos=
generarDatosModelos(historial);

const datosClases=[0,1,2].map(clase=>({

name:nombres[clase],

value:historial.filter(
h=>h.clase===clase
).length

}));


return(

<div className="row g-4 mb-4">

<div className="col-xl-6">

<div className="bg-white rounded shadow p-4">

<h5>

Predicciones por modelo

</h5>

<ResponsiveContainer
width="100%"
height={300}
>

<BarChart
data={datosModelos}
>

<CartesianGrid
strokeDasharray="3 3"
/>

<XAxis dataKey="modelo"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="cantidad"
fill="#0d6efd"
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>


<div className="col-xl-6">

<div className="bg-white rounded shadow p-4">

<h5>

Distribución llamadas

</h5>

<ResponsiveContainer
width="100%"
height={300}
>

<PieChart>

<Pie
data={datosClases}
dataKey="value"
nameKey="name"
outerRadius={100}
label
>

{
datosClases.map(
(entry,index)=>(

<Cell
key={index}
fill={colores[index]}
/>

))
}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

</div>

)

}