import Image from "next/image";
import estilos from "./page.module.css"
import Depoimentos from "../../.././public/depoimento.png";
import Casa from "../../.././public/casa.png"
import Link from "next/link";

export default function PaginaDepoimentos(){
    return(
        <div className={estilos.container}>
        <Image className={estilos.depoimento} src={Depoimentos} alt="Ícone de Depoimento" />
        <p className={estilos.titulo}> Depoimentos</p>
        <p className={estilos.texto}>Venha dar o seu depoimento também!</p>
        <div className={estilos.linha}>
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
            <p className={estilos.nome}> Maria Clara </p>
         </p>
         <p className={estilos. card}>
         <p className={estilos.textinho}> Experiência Inesquecível com Profissionalismo Impecável </p>
         "Contratar essa empresa foi a melhor decisão que já tomei para o meu evento. Eles cuidaram de cada detalhe com tanto carinho e profissionalismo que me permitiu aproveitar cada momento da festa sem preocupações."
            <p className={estilos.nome}> Henrique</p>
         </p>
         <p className={estilos. card}>
         <p className={estilos.textinho}> Transformando Sonhos em Realidade com Cada Detalhe</p>
         "Incrível! Do buffet à decoração, tudo foi impecável. A equipe foi atenciosa e transformou minha celebração em um verdadeiro sonho realizado. Recomendo sem pensar duas vezes!"
            <p className={estilos.nome}> Joana</p>
         </p>
         <p className={estilos. card}>
         <p className={estilos.textinho}> Criatividade e Organização: Um Evento Perfeito</p>
         "Minha festa foi um sucesso graças a essa empresa. Eles foram criativos, organizados e extremamente dedicados. Meus convidados ficaram encantados, e eu, mais ainda!"
            <p className={estilos.nome}> Alison </p>
         </p>
         </div>
         <div className={estilos.linha5}>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
        </div>
    );
}