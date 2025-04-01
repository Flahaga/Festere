import estilos from "./page.module.css"
import Serviços from "../../../public/serviços.png";
import Local from "../../../public/local.png";
import Menu from "../../../public/menu.png";
import Decoração from "../../../public/decoração.png";
import Entretenimento from "../../../public/bandeira.png";
import Casa from "../../../public/casa.png";

export default function PaginaServiços(){
    return(
        
            <div className={estilos.container}>
            {/* Ícone e Título */} 
            <Image className={estilos.serviços} src={Serviços} alt="Ícone de Serviço" />
            <p className={estilos.titulo}>Serviços Oferecidos</p>
            <Image className={estilos.local} src={Local} alt="Ícone de Local" />
           <p>Locais para Festas:</p>
           <p>Escolha o local perfeito</p>
           <Image className={estilos.menu} src={Menu} alt="Ícone de Menu" />
           <p>Catering:</p>
           <p>Deliciosas opções de menu</p>
           <Image className={estilos.decoração} src={Decoração} alt="Ícone de Decoração" />
           <p>Decoração:</p>
           <p>Temas e decorações personalizadas</p>
           <Image className={estilos.entretenimento} src={Entretenimento} alt="Ícone de Entetenimento" />
           <p>Entretenimento:</p>
           <p>DJs, Bandas, Mágicos e muito mais</p>
           <div>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
        </div>
    );
}