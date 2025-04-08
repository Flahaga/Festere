import Image from "next/image";
import estilos from "./page.module.css"
import Redes from "../../.././public/redes.png"
import Arroba from "../../.././public/arroba.png"
import Casa from "../../.././public/casa.png"
import Link from "next/link";
import Insta from "../../.././public/insta.png"
import Face from "../../.././public/face.png"
import Twitter from "../../.././public/twitter.png"

export default function PaginaRedes(){
    return(
        <div className={estilos.container}>
           <Image className={estilos.redes} src={Redes} alt="Ícone de Redes" />
            <p className={estilos.titulo}>Redes Sociais</p>
            <div className={estilos.card}>
            <Image className={estilos.insta} src={Insta} alt="Ícone de Instagram" />
            <p className={estilos.texto}>Instagram : @festereeventos</p>
            </div>
            <div className={estilos.card}>
            <Image className={estilos.face} src={Face} alt="Ícone de Facebook" />
            <p className={estilos.texto}>Facebook: Festere Eventos</p>
            </div>
            <div className={estilos.card}>
            <Image className={estilos.twitter} src={Twitter} alt="Ícone de Twitter" />
            <p className={estilos.texto}>Twitter : @festereeventos</p>
            </div>
             <Image className={estilos.arroba} src={Arroba} alt="Ícone de Arroba" />
            <p className={estilos.texto2}>Segue a gente lá!</p>
            <div className={estilos.linha}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
        </div>
    );
}