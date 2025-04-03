import estilos from "./principal.module.css"
import Image from "next/image";
import Agenda from "../../../../public/calendario.png";
import Serviços from "../../../.././public/serviços.png";
import Portfólio from "../../../.././public/camera.png";
import Depoimentos from "../../../.././public/document_5186030.png";
import Orçamentos from "../../../.././public/search_5186226.png";
import Pagamentos from "../../../.././public/money_5186312.png";
import Contatos from "../../../.././public/contatos.png";
import Redes from "../../../.././public/redes.png";
import Login from "../../../.././public/login.png";
import Link from "next/link";



export default function Principal(){
    return(

        <div>
        <div className={estilos.container}>
            <p className={estilos.titulo}>Bem-vindo(a) ao Festerê!</p>
            <p className={estilos.subtitulo}>Onde as suas festas ganham vida. Experimente a magia do Festerê!</p>
            <div className={estilos.icones}>
                <div className={estilos.linha1}>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_1} src={Agenda} alt="Ícone de Agenda"/>
            <Link href="/paginaagendamento" className={estilos.icon_label}>Agende sua Festa</Link>
            </div>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_2} src={Serviços} alt="Ícone de Serviços"/>
            <Link href="/paginaservicos" className={estilos.icon_label}>Serviços Oferecidos</Link>
            </div>
            </div>
            <div className={estilos.linha2}>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_3} src={Portfólio} alt="Ícone de Portfólio"/>
            <Link href="/paginaeventos" className={estilos.icon_label}>Portfólio de Eventos</Link>
            </div>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_4} src={Depoimentos} alt="Ícone de Depoimentos"/>
                <div class={estilos.icon_label}>Depoimentos</div>
            </div>
            </div>
            <div className={estilos.linha3}>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_5} src={Orçamentos} alt="Ícone de Orçamentos"/>
                <div class={estilos.icon_label}>Orçamentos</div>
            </div>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_6} src={Pagamentos} alt="Ícone de Pagamento"/>
                <div class={estilos.icon_label}>Formas de Pagamento</div>
            </div>
            </div>
            <div className={estilos.linha4}>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_7} src={Contatos} alt="Ícone de Contatos"/>
                <div class={estilos.icon_label}>Contatos</div>
            </div>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_8} src={Redes} alt="Ícone de Redes Sociais"/>
                <div class={estilos.icon_label}>Redes Sociais</div>
            </div>
            </div>
            <div className={estilos.logar}>
            <Image className={estilos.login} src={Login} alt="Ícone de Login"/> 
            <Link href="/paginalogin" className={estilos.icon_label}>Sair</Link>
            </div>
        </div>
            </div>
        </div>
    
        
    );    
}