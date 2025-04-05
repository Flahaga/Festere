import Image from "next/image";
import estilos from "./page.module.css"
import Pagamento from "../../.././public/dinheiro.png"
import Link from "next/link";
import Casa from "../../.././public/casa.png"

export default function PaginaPagamento(){
    return(
        <div className={estilos.container}>
            <Image className={estilos.pagamento} src={Pagamento} alt="Ícone de Dinheiro" />
            <p className={estilos.titulo}>Formas de Pagamento</p>
            <p className={estilos.texto}>Selecione uma das opções para efetuar seu pagamento.</p>
            <p className={estilos.texto}>Cartão de Crédito ou Débito</p>
            <p className={estilos.texto}>Aceitamos todas as principais bandeiras de cartão</p>
            <Link href="/" className={estilos.icon_label}>Pagar</Link>

            
            <div className={estilos.linha5}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label2}>Voltar para Home</Link>
            </div>
            </div>

    );
}