import Image from "next/image";
import estilos from "./page.module.css"
import Depoimentos from "../../.././public/depoimento.png";

export default function PaginaDepoimentos(){
    return(
        <div className={estilos.container}>
        <Image className={estilos.depoimento} src={Depoimentos} alt="Ícone de Depoimento" />
        <p className={estilos.titulo}> Depoimentos</p>
        <p className={estilos.texto}>Venha dar o seu depoimento também!</p>
        <p className={estilos.card}>
           <p className={estilos.textinho}> Excelente Serviço </p>
            "A equipe do Festerê foi muito atenciosa e me ajudou a realizar o evento dos meu sonhos."
          <p className={estilos.nome}> Ana Luíza </p>
        </p>
         <p className={estilos.card}>
         <p className={estilos.textinho}> Decoração Impecável </p>
            "Fiquei maravilhado com a beleza do espaço e a qualidade da decoração. 
            Superou minhas expectativas."
            <p className={estilos.nome}> Lucas</p>
         </p>
         <p className={estilos. card}>
         <p className={estilos.textinho}> Organização Perfeita </p>
            "Tudo ocorreu de forma fluida e sem nenhum imprevisto. Eles cuidaram de todos os detalhes."
            <p className={estilos.nome}> Maria </p>
         </p>
        </div>
    );
}