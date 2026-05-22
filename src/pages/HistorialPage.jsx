import Navbar from "../components/Navbar";
import TablaHistorial from "../components/TablaHistorial";
import useHistorial from "../hooks/useHistorial";

export default function HistorialPage(){

const {
historial
}=useHistorial();

return(

<div className="content w-100">

<Navbar/>

<div className="container-fluid pt-4 px-4">

<div className="bg-white rounded p-4 shadow">

<TablaHistorial historial={historial}/>

</div>

</div>

</div>

)

}