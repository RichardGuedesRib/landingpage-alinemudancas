export default function Start() {
  return (
    <section className="flex flex-col md:flex-row md:mx-[100px] md:h-[500px] justify-center items-center">
      <div className="w-full md:w-[483px]">
        <img
          src="./alinem1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between p-6 md:w-[75%] md:h-[400px] items-center text-center gap-[35px]">
        <p className="font-semibold text-2xl md:text-[40px] text-[var(--color-text-primary)]">
          Carregando histórias, montando  <br className="hidden md:block" />
          novos começos
        </p>

        <p className="text-lg md:text-[28px] text-[var(--color-text-primary)]">
          Mudar de casa é muito mais do que<br className="hidden md:block" />
          transportar móveis. É levar uma vida inteira<br className="hidden md:block" />
          para um novo capítulo.
        </p>

        <span className="flex bg-[var(--color-tertiary)] text-[var(--color-neutral)] h-[56px] md:h-[64px] w-full md:w-[279px] items-center justify-center gap-[8px] rounded-[20px] p-[16px]">
          <img src="./whatsappv1.png" alt="" className="w-[28px] h-[28px]" />
          <span>SOLICITAR ORÇAMENTO</span>
        </span>
      </div>
    </section>
  );
}
