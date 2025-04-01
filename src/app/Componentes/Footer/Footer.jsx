import estilos from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={estilos.footer}>
            <p className={estilos.texto}>© Copyright - 2010 - 2025 Festerê Eventos - Todos os direitos reservados.</p>
        </div>

    );
}