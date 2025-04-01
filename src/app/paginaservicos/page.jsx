import estilos from "./page.module.css"
import Serviços from "../../.././public/serviços.png";
import Local from "../../.././public/local.png";
import Menu from "../../.././public/menu.png";
import Decoração from "../../.././public/decoração.png";
import Entretenimento from "../../.././public/bandeira.png";
import Casa from "../../.././public/casa.png";
import Image from "next/image";
import Link from "next/link";

export default function PaginaServiços(){
    return(
            <div className={estilos.container}>
            <Image className={estilos.serviços} src={Serviços} alt="Ícone de Serviço" />
            <p className={estilos.titulo}>Serviços Oferecidos</p>
            <div className={estilos.linha}>
            <Image className={estilos.local} src={Local} alt="Ícone de Local" />
           <p className={estilos.texto}>Locais para Festas:</p>
           <p className={estilos.texto}>Escolha o local perfeito</p>
           </div>
           <div className={estilos.linha2}>
           <Image className={estilos.menu} src={Menu} alt="Ícone de Menu" />
           <p className={estilos.texto}>Catering:</p>
           <p className={estilos.texto}>Deliciosas opções de menu</p>
           </div>
           <div className={estilos.linha3}>
           <Image className={estilos.decoração} src={Decoração} alt="Ícone de Decoração" />
           <p className={estilos.texto}>Decoração:</p>
           <p className={estilos.texto}>Temas e decorações personalizadas</p>
           </div>
           <div className={estilos.linha4}>
           <Image className={estilos.entretenimento} src={Entretenimento} alt="Ícone de Entetenimento" />
           <p className={estilos.texto}>Entretenimento:</p>
           <p className={estilos.texto}>DJs, Bandas, Mágicos e muito mais</p>
           <div>
            </div>
            <div className={estilos.linha5}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
            </div>
        </div>
    );
}