import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import DashboardModelosIA from "./pages/DashboardModelosIA";
import HistorialPage from "./pages/HistorialPage";
import ModelosPage from "./pages/ModelosPage";

function App() {

  return (

    <BrowserRouter>

      <div className="container-fluid bg-light d-flex p-0">

        <Sidebar />

        <Routes>

          <Route
            path="/"
            element={<DashboardModelosIA />}
          />

          <Route
            path="/historial"
            element={<HistorialPage />}
          />

          <Route
            path="/modelos"
            element={<ModelosPage />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;