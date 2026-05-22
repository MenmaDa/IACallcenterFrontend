import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CardsResumen from "../components/CardsResumen";
import FormularioAnalisis from "../components/FormularioAnalisis";
import Graficas from "../components/Graficas";
import TablaHistorial from "../components/TablaHistorial";
import Contexto from "../components/Contexto";

import useHistorial from "../hooks/useHistorial";
import useFormulario from "../hooks/useFormulario";

import AudioRecorder from "../components/Llamadas/AudioRecorder";

export default function DashboardIA() {

const {

historial,
cargarHistorial

}=useHistorial();


const {

form,
handleChange,
analizar

}=useFormulario(
cargarHistorial
);


return(

<div className="container-fluid bg-light d-flex p-0">

    <div className="content w-100">

        <div className="container-fluid pt-4 px-4">

            <div className="mb-4">
                <Contexto/>
            </div>

            <CardsResumen historial={historial}/>

            <FormularioAnalisis
            form={form}
            handleChange={handleChange}
            analizar={analizar}
            />

            <div className="mb-4">
                <AudioRecorder
                modelo={form.modelo}
                cargarHistorial={cargarHistorial}
                />
            </div>

            <Graficas historial={historial}/>

        </div>

    </div>

</div>

)

}