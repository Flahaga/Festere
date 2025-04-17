import PaginaLogin from "@/app/paginalogin/page";
import Image from "next/image";
import estilos from "./Banner.module.css"
import Link from "next/link";
import Login from "../../../.././public/login.png";

export default function Banner(){
    return(

        <div>
        <div className={estilos.banner}>
            <p className={estilos.texto}>Festere</p>
            <div className={estilos.logar}>
            <Image className={estilos.login} src={Login} alt="Ícone de Login"/> 
            <Link href="/paginalogin" className={estilos.icon_label}>Sair</Link>
            </div>
           

        </div>
    
        </div>
    );    
}