import Image from "next/image";
import estilos from "./page.module.css"
import Calendario from "../../.././public/calendario.png"
import Casa from "../../.././public/casa.png"
import Link from "next/link";
import Confirma from "../../.././public/confirma.png"

export default function PaginaRedes(){
    return(
        <div className={estilos.container}>
           <Image className={estilos.calendario} src={Calendario} alt="Ícone de Calendário" />
            <p className={estilos.titulo}>Sua Reserva foi confirmada!</p>
            <p className={estilos.titulo}>Obrigada pela preferência!</p>
            <Image className={estilos.confirma} src={Confirma} alt="Ícone de Calendário" />
            <div className={estilos.linha}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
        </div>
    );
}