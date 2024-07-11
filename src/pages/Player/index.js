import styles from "./Player.module.css";
import Banner from "components/Banner";
import { useParams } from "react-router-dom";
import Titulo from "components/Titulo"
import videos from "data/db.json";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";


function Player(){
const[video,setVideos] = useState([])

const parametros = useParams()
useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/ByaleXx21/alura-cinema-api/videos?id=${parametros.id}`)
    .then((response)=>response.json())
    .then((data)=>
        setVideos(...data))
    
},[])



//const video = videos.find(video => video.id === Number(parametros.id))
console.log(video);
if(!video) return <NotFound/>

    return(
        <>
        <Banner img="player" color="#58b9ae"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe width="100%" height="100%" 
        src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        </>
    )
}

export default Player