import Image from "next/image";
import estilos from "./page.module.css"
import Contato from "../../.././public/contatos.png"
import Balão from "../../.././public/balloon.png"
import Casa from "../../.././public/casa.png"
import Link from "next/link";
import Telefone from "../../.././public/telefone.png"
import Email from "../../.././public/email.png"
import Local from "../../.././public/pino.png"

export default function PaginaContatos(){
    return(
        <div className={estilos.container}>
           <Image className={estilos.contato} src={Contato} alt="Ícone de Contato" />
            <p className={estilos.titulo}>Contatos</p>
            <div className={estilos.card}>
            <Image className={estilos.telefone} src={Telefone} alt="Ícone de Telefone" />
            <p className={estilos.texto}>Telefone : 12345-6789</p>
            </div>
            <div className={estilos.card}>
            <Image className={estilos.email} src={Email} alt="Ícone de Email" />
            <p className={estilos.texto}>Email : festereeventos@gmail.com</p>
            </div>
            <div className={estilos.card}>
            <Image className={estilos.local} src={Local} alt="Ícone de Local" />
            <p className={estilos.texto}>Endereço : Rua da Florata, 157, Parque Jardim Luzia</p>
            </div>
             <Image className={estilos.balao} src={Balão} alt="Ícone de Balão" />
            <p className={estilos.texto2}>Aguardaremos o seu contato e a sua visita!</p>
            <div className={estilos.linha}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
        </div>
    );
}