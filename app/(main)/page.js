// app/page.js
import ClienteWrapper from "@/_EXTRAS/LadoCliente/ClienteWraper";
import HomeGeneral from "@/_PAGES/main/Contenido/home";
export default function page() {
  return (
    <div>
      <ClienteWrapper>
        <HomeGeneral></HomeGeneral>
      </ClienteWrapper>
    </div>
  );
}
