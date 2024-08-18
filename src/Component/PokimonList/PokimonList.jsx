import { useEffect, useState} from "react";
import axios from "axios";
import './PokimonList.css'
import Pokimon from "../Pokimon/Pokimon";


function PokimonList(){
    const[pokimonList,setpokimonlist]=useState([])
    const[isloading,setloading]=useState(true)
    const [pokidecUrl,setPokidexUrl]=useState('https://pokeapi.co/api/v2/pokemon')
    const [nextUrl,setnextUrl]=useState('')
    const [prevUrl,setPrevUrl]=useState('')

    async function downloadPokimon() {
        setloading(true)
        const response=await axios.get(pokidecUrl)
        const pokimonResult=response.data.results;
        console.log(response.data);
        setnextUrl(response.data.next);
        setPrevUrl(response.data.previous)
        
        const pokimonResultPromish=pokimonResult.map((pokimon)=>axios.get(pokimon.url));
        const pokimonData=await axios.all(pokimonResultPromish);
        console.log(pokimonData);
        // setpokimonlist(pokimonData.map((pokeData)=>{
        //     const pokemon=pokeData.data;
            const res=pokimonData.map((pokiData)=>{
                const pokimon=pokiData.data;
            
            return{
                id:pokimon.id,
                name:pokimon.name,
                image:(pokimon.sprites.other)? pokimon.sprites.other.dream_world.front_default:pokimon.sprites.front_shiny,
                type:pokimon.types

            }
        });
        console.log(res);
        setpokimonlist(res)
        
        
        
        
        setloading(false)
        
    }
    

    useEffect(()=>{
        // const response=await axios.get('https://pokeapi.co/api/v2/pokemon')
        // console.log(response);
      downloadPokimon()  
        
        
    },[pokidecUrl])

    return(
        <div className="pokimonList-wraper">
            {/* <div>Pokimon list</div> */}
            <div className="pokimon-wrapper">
                {(isloading) ? "Loading...":
                pokimonList.map((p)=><Pokimon name={p.name} image={p.image} key={p.id}/>)
                }

            </div>
            <div className="controlls">
                <button disabled={prevUrl==null} onClick={()=>setPokidexUrl(prevUrl)}>Pre</button>
                <button disabled={nextUrl==null} onClick={()=>setPokidexUrl(nextUrl)}>Next</button>
            </div>
            

        </div>
    )

}
export default PokimonList;