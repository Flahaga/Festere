
import Principal from "./Componentes/Principal/principal";
import estilos from "./page.module.css"

export default function Home() {
  return (
<main className={estilos.home}>
<div>
<Principal/>
</div>
</main>
  );
}