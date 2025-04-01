
import Banner from "./Componentes/Banner/Banner";
import Principal from "./Componentes/Principal/principal";
import estilos from "./page.module.css"

export default function Home() {
  return (
<main className={estilos.home}>
<div>
<Banner/>
<Principal/>
</div>
</main>
  );
}