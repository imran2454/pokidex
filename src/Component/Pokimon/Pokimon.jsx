import './pokimon.css'
function Pokimon({name,image}){
    return(
        <div>
            <div className="pokimon">
                <div>{name}</div>
                <div><img  className="pokimon-image"src={image}/></div>
            </div>

        </div>
    );

}
export default Pokimon;