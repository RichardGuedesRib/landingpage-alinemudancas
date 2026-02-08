export default function Footer() {
  return (
    <footer className="flexw-full bg-[var(--color-tertiary)] text-[var(--color-neutral)] md:h-[265px] py-[39px] px-[20px] md:px-[104px]  mt-[100px] md:mt-0 items-center justify-between">
      <div className="flex flex-col md:flex-row justify-center w-full h-full items-center gap-[40px]">
        <div>
          <img src="/logo2.png" alt="Aline Mudanças" className="h-[150px]" />
        </div>

        <div className="flex-1 h-full flex flex-col justify-center items-center text-center">
          <p className="text-[20px]">
            <strong>Desde 2006.</strong> Sua mudança para qualquer lugar do
            Brasil com
            <br className="hidden md:block" />
            segurança e montagem profissional.
          </p>

          <div className="mt-12 md:mt-4">
            <span className="flex items-center justify-center gap-[8px]">
              <img src="/whatsappv1.png" alt="whatsapp" />
              <p className="text-[20px]">Fale com o Reginaldo:</p>
            </span>

            <p className="text-[20px]">(11) 95303-8151</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
