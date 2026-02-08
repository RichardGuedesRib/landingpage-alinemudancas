export default function FormContact() {
  return (
    <section id="section_contato" className="flex flex-col md:mx-[100px] md:h-[636px] px-[20px] md:px-[0px] mt-[70px] gap-[15px] text-[var(--color-text-primary)]">
      <p className="font-bold text-2xl md:text-[40px] text-[var(--color-text-primary)] m-[40px] md:m-[0px] text-center">
        Entre em contato para <br className="md:hidden" /> obter mais
        informações
      </p>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-col md:w-1/2 ">
          <p className="md:text-[20px] font-bold">Origem:</p>
          <input
            type="text"
            placeholder="Onde Começa"
            className="border-[2px] rounded-[20px] w-full h-[60px] py-[14px] px-[20px] focus:outline-none focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex-col md:w-1/2 ">
          <p className="md:text-[20px] font-bold">Destino:</p>
          <input
            type="text"
            placeholder="Onde Termina"
            className="border-[2px] rounded-[20px] w-full h-[60px] py-[14px] px-[20px] focus:outline-none focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-col md:w-1/2 ">
          <p className="md:text-[20px] font-bold">Telefone para contato:</p>
          <input
            type="text"
            placeholder="Ex: (00) 00000-0000"
            className="border-[2px] rounded-[20px] w-full h-[60px] py-[14px] px-[20px] focus:outline-none focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="flex-col md:w-1/2 ">
          <p className="md:text-[20px] font-bold">Data:</p>
          <input
            type="date"
            placeholder="dd/mm/aaaa"
            className="border-[2px] rounded-[20px] w-full h-[60px] py-[14px] px-[20px] focus:outline-none focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-col w-full ">
          <p className="md:text-[20px] font-bold">
            Quais móveis precisam de montagem?
          </p>
          <textarea
            placeholder="Ex: Guarda roupa 6 portas, painel de TV"
            className="border-[2px] rounded-[20px] w-full h-[230px] py-[14px] px-[20px] resize-none 
              focus:outline-none focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] transition-all duration-500 ease-in-out
             "
          />
        </div>
      </div>
      <span className="flex bg-[var(--color-tertiary)] text-[var(--color-neutral)] h-[52px] w-[239px] items-center justify-center gap-[8px] rounded-[20px] p-[16px] hover:bg-[var(--color-primary)] hover:cursor-pointer transition-all duration-500 ease-in-out active:bg-[var(--color-primary)]">
        <span>SOLICITAR ORÇAMENTO</span>
      </span>
    </section>
  );
}
