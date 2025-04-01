import estilos from "./page.module.css";
import Login from "../../.././public/login.png";
import Image from "next/image";
import Estrela from "../../.././public/estrela.png";
import Link from "next/link";

export default function PaginaLogin() {
  return (
    <div className={estilos.container}>
      <div className={estilos.caixa}>
       <p className={estilos.texto}>Se conecte </p>
       <p className={estilos.texto}>para aproveitar a magia do Festerê!</p>
      <Image className={estilos.estrela} src={Estrela} alt="Ícone de Estrela"/> 
      </div>
      <div className={estilos.imagem}>
      <p className={estilos.titulo}>Login</p>
      <input
        type="text"
        placeholder="Usuário :"
        className={estilos.input}
      />
      <input
        type="password"
        placeholder="Senha :"
        className={estilos.input}
      />
     <Link href="/" className={estilos.icon_label}><Image className={estilos.login} src={Login} alt="Ícone de Login"/> </Link>
      <p className={estilos.conta}>
        Não tenho uma conta <span className={estilos.linkText}>clique aqui</span> para criar
      </p>
      </div>
      </div>
     
  );
}
