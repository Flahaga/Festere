import Image from "next/image";
import estilos from "./page.module.css"
import Orçamento from "../../.././public/lupa.png"
import Link from "next/link";
import Casa from "../../.././public/casa.png"

export default function PaginaOrçamento(){
    return(
        <div className={estilos.container}>
            <Image className={estilos.orçamento} src={Orçamento} alt="Ícone de Orçamento" />
            <p className={estilos.titulo}>Orçamentos</p>
            <p className={estilos.texto}>Nossos pacotes são feitos sob medida para atender suas necessidades.</p>
            <p className={estilos.texto}>Faça o orçamento da sua festa dos sonhos!</p>
            <div className={estilos.caixa}>
            <p className={estilos.texto1}>Nos diga o que você quer:</p>
            <input
        type="text"
        placeholder="Email :"
        className={estilos.input}
      />
      <input
        type="text"
        placeholder="Festa:"
        className={estilos.input}
      />
            <Link href="/" className={estilos.icon_label}>Enviar</Link>
            </div>
            <p className={estilos.texto}>Enviaremos nosso orçamento para o seu email.</p>
            <div className={estilos.linha5}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label2}>Voltar para Home</Link>
            </div>
        </div>
    );
}