import estilos from "./principal.module.css"
import Image from "next/image";
import Agenda from "../../../../public/calendario.png";
import Serviços from "../../../.././public/serviços.png";
import Portfólio from "../../../.././public/camera.png";
import Depoimentos from "../../../.././public/depoimento.png";
import Orçamentos from "../../../.././public/lupa.png";
import Pagamentos from "../../../.././public/dinheiro.png";
import Contatos from "../../../.././public/contatos.png";
import Redes from "../../../.././public/redes.png";
import Link from "next/link";



export default function Principal(){
    return(

        <div>
        <div className={estilos.container}>
            <p className={estilos.titulo}>Bem-vindo(a) ao Festerê!</p>
            <p className={estilos.subtitulo}>Onde as suas festas ganham vida!</p>
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
            <Link href="/paginadepoimentos" className={estilos.icon_label}>Depoimentos</Link>
            </div>
            </div>
            <div className={estilos.linha3}>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_5} src={Orçamentos} alt="Ícone de Orçamentos"/>
            <Link href="/paginaorcamento" className={estilos.icon_label}>Orçamentos</Link>
            </div>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_6} src={Pagamentos} alt="Ícone de Pagamento"/>
            <Link href="/paginapagamento" className={estilos.icon_label}>Formas de Pagamento</Link>
            </div>
            </div>
            <div className={estilos.linha4}>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_7} src={Contatos} alt="Ícone de Contatos"/>
            <Link href="/paginacontatos" className={estilos.icon_label}>Contatos</Link>
            </div>
            <div class={estilos.icone_box}>
            <Image className={estilos.img_8} src={Redes} alt="Ícone de Redes Sociais"/>
            <Link href="/paginaredes" className={estilos.icon_label}>Redes Sociais</Link>
            </div>
            </div>
        </div>
            </div>
        </div>
    
        
    );    
}