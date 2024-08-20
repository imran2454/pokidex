import Search from "../Search/Search";
import PokimonList from "../PokimonList/PokimonList";
// import css
import './pokedesk.css'
function Pokidesk(){
    return (
        <div className="pokedesk-wraper">
        {/* <h1 id="pokedesk-heading">pokedesk</h1> */}
        <Search/>
        <PokimonList/>
        </div>
    )

}
export default Pokidesk;