import Inicio from "./Inicio";
import Calcular from "./Calcular";
import Cotizar from "./Cotizar";
import Historial from "./Historial";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
return <>

{/* <Calcular/>
<Cotizar/> */}
<BrowserRouter>
<Routes>
  <Route path= "/" Component={Inicio}/>
  <Route path= "/historial" Component={Historial}/>
  
</Routes>


</BrowserRouter>

</>


}

export default App;