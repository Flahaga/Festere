import Image from "next/image";
import estilos from "./page.module.css";
import Camera from "../../.././public/camera.png";
import Bebe1 from "../../.././public/bebe.jpg"
import Bebe2 from "../../.././public/bebe2.png"
import Bebe3 from "../../.././public/bebe3.png"
import Bebe4 from "../../.././public/bebe4.jpg"


export default function PaginaEventos(){
    return(
        <div className={estilos.container}>
          <Image className={estilos.camera} src={Camera} alt="Ícone de Camêra" />
            <p className={estilos.titulo}>Portfólio de Eventos</p>
         <div className={estilos.banner}>
            <p>Bem vindo a magia do Festerê!</p>
            <p>Conheça nossos eventos:</p>
            <p>Chá de bêbe</p>
            <Image className={estilos.bebe1} src={Bebe1} alt="Chá de bêbe"/>
            <Image className={estilos.bebe2} src={Bebe2} alt="Chá de bêbe"/>
            <Image className={estilos.bebe3} src={Bebe3} alt="Chá de bêbe"/>
            <Image className={estilos.bebe4} src={Bebe4} alt="Chá de bêbe"/>
         </div>
        </div>
    );
}