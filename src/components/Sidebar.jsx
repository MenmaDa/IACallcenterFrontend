import { Link } from "react-router-dom";

export default function Sidebar() {

return (

<div
className="bg-dark text-white p-4"
style={{
width:"260px",
minHeight:"100vh"
}}
>

<h2 className="mb-4 text-info">

AI Call Center

</h2>

<div className="nav flex-column">

<Link
to="/"
className="btn btn-outline-light mb-3"
>

Dashboard

</Link>

<Link
to="/modelos"
className="btn btn-outline-light mb-3"
>

Modelos IA

</Link>

<Link
to="/historial"
className="btn btn-outline-light"
>

Historial

</Link>

</div>

</div>

)

}