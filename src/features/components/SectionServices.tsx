import CardService from "./cards/CardService";

export default function SectionServices() {
  return (
    <section className="flex flex-col md:mx-[100px] md:h-[218px] justify-center items-center text-[var(--color-text-primary)] gap-[40px] mt-[40px]" >
      <p className="w-full md:text-[40px] font-semibold text-center">
        Por que confiar a sua mudança à Aline Mudanças?
      </p>
      <section className="flex flex-col md:flex-row gap-[30px] md:gap-[0px]">
        <CardService
          img="/medal.png"
          title="20 Anos de Experiência"
          text={
            <>
              Duas décadas de estrada
              <br  />
              garantindo que nada saia errado
              <br  />
              na sua mudança.
            </>
          }
        />
        <CardService
          img="/mapa.png"
          title="Cobertura Nacional"
          text={
            <>
              Mudanças locais ou para
              <br  />
              qualquer estado do Brasil com
              <br  />
              logística especializada.
            </>
          }
        />

        <CardService
          img="/package.png"
          title="Serviço de Embalagem"
          text={
            <>
              Não se preocupe com caixas ou
              <br  /> 
              proteção. Cuidamos do seu bem
              <br  /> 
              do início ao fim.
            </>
          }
        />

        <CardService
          img="/wrench.png"
          title="Montagem e Desmontagem"
          text={
            <>
              Nosso foco principal. Equipe
              <br  />
              treinada para deixar tudo
              <br  />
              pronto no destino.
            </>
          }
        />
      </section>
    </section>
  );
}
