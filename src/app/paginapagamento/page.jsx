import Image from "next/image";
import estilos from "./page.module.css"
import Pagamento from "../../.././public/dinheiro.png"
import Link from "next/link";
import Casa from "../../.././public/casa.png"
import Cartão from "../../.././public/cartao.png"
import Dinheiro from "../../.././public/grana.png"
import Pix from "../../.././public/pix.png"

export default function PaginaPagamento(){
    return(
        <div className={estilos.container}>
            <Image className={estilos.pagamento} src={Pagamento} alt="Ícone de Dinheiro" />
            <p className={estilos.titulo}>Formas de Pagamento</p>
            <p className={estilos.texto}>Selecione uma das opções para efetuar seu pagamento:</p>
            <div className={estilos.linha}>
            <div className={estilos.card}>
            <Image className={estilos.cartao} src={Cartão} alt="Ícone de Cartão" />
            <p className={estilos.texto1}>Cartão de Crédito ou Débito</p>
            <p className={estilos.texto}>Aceitamos todas as principais bandeiras de cartão</p>
            <Link href="/confirmacaopagamento" className={estilos.icon_label}>Pagar</Link>
           </div>
           <div className={estilos.card}>
           <Image className={estilos.dinheiro} src={Dinheiro} alt="Ícone de Dinheiro" />
            <p className={estilos.texto1}>Dinheiro</p>
            <p className={estilos.texto}>Também aceitamos pagamento em espécie</p>
            <Link href="/confirmacaopagamento" className={estilos.icon_label}>Pagar</Link>
           </div>
           <div className={estilos.card}>
           <Image className={estilos.pix} src={Pix} alt="Ícone de Pix" />
            <p className={estilos.texto1}>Pix</p>
            <p className={estilos.texto}>Também aceitamos pagamento via PIX</p>
            <Link href="/confirmacaopagamento" className={estilos.icon_label}>Pagar</Link>
           </div>
           </div>
            <div className={estilos.linha5}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label2}>Voltar para Home</Link>
            </div>
            </div>

    );
}