import { etiquetas } from "../utils/etiquetas";

export default function FormularioAnalisis({

form,
handleChange,
analizar

}){

const enviar=(e)=>{

e.preventDefault();

const vacio=Object.keys(form)
.some(key=>form[key]==="");

if(vacio){

alert("Complete todos los campos");
return;

}

analizar();

}

return(

<form
onSubmit={enviar}
className="bg-white rounded shadow p-4 mb-4"
>

<h4 className="mb-4">

Analizar llamada

</h4>

<div className="row g-3">

{
Object.keys(form)
.filter(k=>k!=="modelo")
.map((key)=>(

<div
className="col-md-3"
key={key}
>

<label className="form-label fw-bold">

{etiquetas[key]}

</label>

<input
type="number"
name={key}
value={form[key]}
onChange={handleChange}
className="form-control"
required
/>

</div>

))
}

<div className="col-md-4">

<label className="form-label">

Modelo

</label>

<select
name="modelo"
value={form.modelo}
onChange={handleChange}
className="form-select"
required
>

<option value="LogisticRegression">
Logistic Regression
</option>

<option value="RandomForest">
Random Forest
</option>

<option value="GradientBoosting">
Gradient Boosting
</option>

</select>

</div>

</div>

<button
type="submit"
className="btn btn-primary mt-4"
>

Analizar llamada

</button>

</form>

)

}