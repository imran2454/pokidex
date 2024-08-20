import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokimonDetails.css'

function PokimonDetails(){
    const {id}=useParams();
    const[pokimon,setpokimon]=useState({});
    async function downloadPokimon() {
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // console.log(response.data);
        setpokimon({
            
            image:response.data.sprites.other.dream_world.front_default,
            name:response.data.name,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
        })
    }
    
    useEffect(()=>{
        downloadPokimon();

    },[]);
    
    return(
        <div className="pokimon-details-wrapper">
            
            <div className="pokimon-details-image"><img src={pokimon.image}/></div>
            <div className="pokimon-details-name">name:<span>{pokimon.name}</span></div>
            <div className="pokimon-details-name">height:<span>{pokimon.height}</span></div>
            <div className="pokimon-details-name">weight:<span>{pokimon.weight}</span></div>
            <div className="pokimon-type">
                { pokimon.types && pokimon.types.map((t)=> <div key={t}>{t}</div>)}

            </div>

            
        </div>

    );
}
export default PokimonDetails;