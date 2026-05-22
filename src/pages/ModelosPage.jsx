import Navbar from "../components/Navbar";

export default function ModelosPage(){

return(

<div className="content w-100">

<Navbar/>

<div className="container-fluid pt-4 px-4">

<div className="bg-white rounded shadow p-4">

<h2 className="mb-4 text-dark">

Modelos de Inteligencia Artificial

</h2>


<div className="card p-3 mb-3">

<h4>

Logistic Regression

</h4>

<p>

Modelo estadístico que calcula probabilidades
para clasificar llamadas en normal,
riesgo o crítica.

</p>

<p>

Ventajas:

</p>

<ul>

<li>Muy rápido</li>
<li>Fácil de interpretar</li>
<li>Buen rendimiento con pocos datos</li>

</ul>

</div>


<div className="card p-3 mb-3">

<h4>

Random Forest

</h4>

<p>

Combina múltiples árboles de decisión para
obtener resultados más precisos.

</p>

<p>

Ventajas:

</p>

<ul>

<li>Reduce errores</li>
<li>Mayor precisión</li>
<li>Maneja relaciones complejas</li>

</ul>

</div>


<div className="card p-3">

<h4>

Gradient Boosting

</h4>

<p>

Construye árboles secuencialmente corrigiendo
errores anteriores.

</p>

<p>

Ventajas:

</p>

<ul>

<li>Alta precisión</li>
<li>Aprende patrones complejos</li>
<li>Excelente para predicciones</li>

</ul>

</div>

</div>

</div>

</div>

)

}