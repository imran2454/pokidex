import { Link } from 'react-router-dom';
import './pokimon.css'
function Pokimon({name,image,id}){
    return(
        <div>
            <div className="pokimon">
               <Link to={`/Pokimon/${id}`}>
               <div>{name}</div>
               <div><img  className="pokimon-image"src={image}/></div>
               </Link>
            </div>

        </div>
    );

}
export default Pokimon;