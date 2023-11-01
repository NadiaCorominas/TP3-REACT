import Inicio from "./Inicio";
import Historial from "./Historial";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
return <>


<BrowserRouter>
<Routes>
  <Route path= "/" Component={Inicio}/>
  <Route path= "/historial" Component={Historial}/>
  
</Routes>


</BrowserRouter>

</>


}

export default App;