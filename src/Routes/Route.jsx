import { Route, Routes } from "react-router-dom"
import Pokidesk from "../Component/Pokidesk/Pokidesk"
import PokimonDetails from "../Component/PokimonDetails/PokimonDetails"
function CustomeRouter(){
    return(
        <Routes>
            <Route path="/" element={<Pokidesk/>}/>
            <Route path="pokimon/:id" element={<PokimonDetails/>}/>
          
        
        </Routes>
    )
}
export default CustomeRouter;