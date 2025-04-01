import Image from "next/image";
import estilos from "./page.module.css";
import Agenda from "../../../public/calendario.png";
import Link from "next/link";
import Casa from "./../../../public/casa.png"



export default function PaginaAgendamento() {
    return (
        <div className={estilos.container}>
            {/* Ícone e Título */}
            <Image className={estilos.agenda} src={Agenda} alt="Ícone de Agenda" />
            <p className={estilos.titulo}>Faça o seu Agendamento:</p>

            {/* Campo de Data */}
            <div className={estilos.section}>
                <h2 className={estilos.texto}>Escolha a data da sua festa:</h2>
                <input type="date" className={estilos.dateInput} name="date" />
            </div>

               {/* Seleção de Horário */}
            <div className={estilos.section}>
                <h2 className={estilos.texto}>Escolha o horário do evento:</h2>
                <input type="time" className={estilos.timeInput} name="time" />
            </div>

            {/* Seleção de Tipo de Festa */}
            <div className={estilos.section}>
                <h2 className={estilos.texto}>Selecione o tipo de festa:</h2>
                <div className={estilos.checkboxGroup}>
                    <label className={estilos.checkboxLabel}>
                        <input type="checkbox" name="partyType" value="Aniversário" /> Aniversário
                    </label>
                    <label className={estilos.checkboxLabel}>
                        <input type="checkbox" name="partyType" value="Casamento" /> Casamento
                    </label>
                    <label className={estilos.checkboxLabel}>
                        <input type="checkbox" name="partyType" value="Formatura" /> Formatura
                    </label>
                    <label className={estilos.checkboxLabel}>
                        <input type="checkbox" name="partyType" value="Corporativo" /> Corporativo
                    </label>
                    <label className={estilos.checkboxLabel}>
                        <input type="checkbox" name="partyType" value="Chá de Bebê" /> Chá de Bebê
                    </label>
                </div>
            </div>

            {/* Seleção de Local */}
            <div className={estilos.section}>
                <h2 className={estilos.texto}>Selecione o local:</h2>
                <select className={estilos.dropdown} name="location">
                    <option value="Salão de Festas">Salão de Festas</option>
                    <option value="Chácara">Chácara</option>
                    <option value="Espaço Corporativo">Espaço Corporativo</option>
                    <option value="Residência">Residência</option>
                </select>
            </div>
            <div className={estilos.link}>
            <Link href="/" className={estilos.icon_label}>Clique Aqui</Link>
            <p> para escolher os serviços adicionais</p>
            </div>
          
            {/* Botão de envio */}
            <button className={estilos.submitBtn}>Agendar</button>
            <div>
            <Image className={estilos.casa} src={Casa} alt="Ícone de Casa"/> 
            <Link href="/" className={estilos.icon_label}>Voltar para Home</Link>
            </div>
        </div>
    );
}

            

 