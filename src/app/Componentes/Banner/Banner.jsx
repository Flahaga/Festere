import Image from "next/image";
import estilos from "./Banner.module.css"
import Festere from "../../../../public/festere.png"

export default function Banner(){
    return(

        <div>
        <div className={estilos.banner}>
            <p className={estilos.texto}>É um prazer te ter aqui!</p>
            <Image className={estilos.festere} src={Festere} alt="Logo"/>
            <p className={estilos.linha}></p>

        </div>
    
        </div>
    );    
}