import Image from "next/image";
import estilos from "./page.module.css"
import Grana from "../../.././public/grana.png"
import Casa from "../../.././public/casa.png"
import Link from "next/link";
import Carteira from "../../.././public/carteira.png"

export default function ConfirmaçãoAgendamento(){
    return(
        <div className={estilos.container}>
           <Image className={estilos.grana} src={Grana} alt="Ícone de Dinheiro" />
            <p className={estilos.titulo}>Pagamento efetuado com sucesso!</p>
            <Image className={estilos.carteira} src={Carteira} alt="Ícone de Carteira" />
            <div className={estilos.linha}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
        </div>
    );
}