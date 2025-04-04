import Image from "next/image";
import estilos from "./page.module.css";
import Camera from "../../.././public/camera.png";
import Bebe1 from "../../.././public/bebe.jpg"
import Bebe2 from "../../.././public/bebe2.png"
import Bebe3 from "../../.././public/bebe3.png"
import Bebe4 from "../../.././public/bebe4.jpg"
import Casa1 from "../../.././public/casa1.jpg"
import Casa2 from "../../.././public/casa2.jpg"
import Casa3 from "../../.././public/casa3.jpg"
import Casa4 from "../../.././public/casa4.jpg"
import Festa1 from "../../.././public/151.jpg"
import Festa2 from "../../.././public/152.png"
import Festa3 from "../../.././public/153.png"
import Festa4 from "../../.././public/154.jpg"
import Niver1 from "../../.././public/niver1.jpg"
import Niver2 from "../../.././public/niver2.jpg"
import Niver3 from "../../.././public/niver3.jpg"
import Niver4 from "../../.././public/niver4.jpg"
import Forma1 from "../../.././public/forma1.png"
import Forma2 from "../../.././public/forma2.png"
import Forma3 from "../../.././public/forma3.jpg"
import Forma4 from "../../.././public/forma4.png"
import Casa from "../../.././public/casa.png"
import Link from "next/link";

export default function PaginaEventos(){
    return(
        <div className={estilos.container}>
          <Image className={estilos.camera} src={Camera} alt="Ícone de Camêra" />
            <p className={estilos.titulo}>Portfólio de Eventos</p>
         <div className={estilos.banner}>
            <p className={estilos.texto}>Chá de bêbe</p>
            <Image className={estilos.bebe1} src={Bebe1} alt="Chá de bêbe"/>
            <Image className={estilos.bebe2} src={Bebe2} alt="Chá de bêbe"/>
            <Image className={estilos.bebe3} src={Bebe3} alt="Chá de bêbe"/>
            <Image className={estilos.bebe4} src={Bebe4} alt="Chá de bêbe"/>
            <p className={estilos.texto}>Casamento</p>
            <Image className={estilos.casa1} src={Casa1} alt="Casamento"/>
            <Image className={estilos.casa2} src={Casa2} alt="Casamento"/>
            <Image className={estilos.casa3} src={Casa3} alt="Casamento"/>
            <Image className={estilos.casa4} src={Casa4} alt="Casamento"/>
            <p className={estilos.texto}>Festa de 15 Anos</p>
            <Image className={estilos.festa1} src={Festa1} alt="15 anos"/>
            <Image className={estilos.festa2} src={Festa2} alt="15 anos"/>
            <Image className={estilos.festa3} src={Festa3} alt="15 anos"/>
            <Image className={estilos.festa4} src={Festa4} alt="15 anos"/>
            <p className={estilos.texto}>Aniversários</p>
            <Image className={estilos.niver1} src={Niver1} alt="Aniversário"/>
            <Image className={estilos.niver2} src={Niver2} alt="Aniversário"/>
            <Image className={estilos.niver3} src={Niver3} alt="Aniversário"/>
            <Image className={estilos.niver4} src={Niver4} alt="Aniversário"/>
            <p className={estilos.texto}>Formatura</p>
            <Image className={estilos.forma1} src={Forma1} alt="Formatura"/>
            <Image className={estilos.forma2} src={Forma2} alt="Formatura"/>
            <Image className={estilos.forma3} src={Forma3} alt="Formatura"/>
            <Image className={estilos.forma4} src={Forma4} alt="Formatura"/>
            <div className={estilos.linha5}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
            
         </div>
        </div>
    );
}