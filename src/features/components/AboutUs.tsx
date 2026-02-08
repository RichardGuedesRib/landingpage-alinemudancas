export default function AboutUs() {
  return (
    <section id="section_about" className="flex flex-col md:flex-row md:mx-[100px] md:h-[525px] justify-center items-center px-[30px] md:px-[0px] mt-[40px]">
      <div className="flex flex-col justify-between md:w-[75%] md:h-[460px] items-center gap-[10px]">
        <p className="font-bold text-[26px] md:text-[40px] text-[var(--color-text-primary)] m-[40px] md:m-[0px]">
          Sobre nós
        </p>

        <p className="text-lg md:text-[16px] text-[var(--color-text-primary)] w-full">
          Na Aline Mudanças, entendemos que cada caixa guarda um pedaço da sua
          história. <br className="hidden md:block" />
          A poltrona onde você descansa, a mesa onde a família se reúne e a cama
          onde seus filhos <br className="hidden md:block" />
          sonham. Há <strong>20 anos</strong>, o nosso trabalho é garantir que
          essa transição seja feita com o carinho e{" "}
          <br className="hidden md:block" />o respeito que o seu lar merece.
        </p>

        <p className="w-full font-bold text-[var(--color-text-tertiary)]">
          O cuidado que faz a diferenca:
        </p>

        <div className="flex flex-col md:text-[16px] w-full text-[var(--color-text-primary)]">
          <p className="w-full font-bold">Sua história em boas mãos:</p>
          <p>
            Sua história em boas mãos: São duas décadas de experiência
            aprendendo que o item mais valioso que transportamos é a sua
            confiança.
          </p>
        </div>

        <div className="flex flex-col md:text-[16px] w-full text-[var(--color-text-primary)]">
          <p className="w-full font-bold">
            Você não precisa se preocupar com nada:
          </p>
          <p>
            Nós desmontamos cada móvel com cuidado e montamos no seu novo
            destino. Queremos que você chegue e já se sinta em casa, com tudo no
            seu devido lugar.
          </p>
        </div>
        <div className="flex flex-col md:text-[16px] w-full text-[var(--color-text-primary)]">
          <p className="w-full font-bold">De braços abertos para o Brasil:</p>
          <p>
            Não importa a distância. Levamos o seu porto seguro para qualquer
            lugar do país, garantindo que a sua essência chegue intacta ao novo
            endereço.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[483px] md:ml-[10px] mt-[30px] md:mt-[0px]">
        <img
          src="./alinem2.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
