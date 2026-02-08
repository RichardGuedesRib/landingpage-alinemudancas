import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full lg:px-16 fixed top-0 bg-[var(--color-neutral)] z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          <img src="/menu_hamb.png" alt="Menu" />
        </button>

        <div className="ml-auto lg:ml-0">
          <img
            src="/logo.png"
            alt="Aline Mudanças"
            className="h-auto w-[110px]"
          />
        </div>

        {/* menu desktop */}
        <nav className="hidden lg:flex gap-[67px]">
          <a
            href="#section_start"
            className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]"
          >
            INÍCIO
          </a>
          <a
            href="#section_servicos"
            className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]"
          >
            SERVIÇOS
          </a>
          <a
            href="#section_about"
            className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]"
          >
            QUEM SOMOS
          </a>
          <a
            href="#section_contato"
            className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]"
          >
            CONTATO
          </a>
        </nav>
      </div>

      {/* menu mobile */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen w-1/2 bg-[var(--color-neutral)] shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex flex-col gap-14 px-4 py-4">
          <a href="#section_start" onClick={() => setOpen(false)}>
            <img src="/close.png" alt="" />
          </a>
          <a
            href="#section_start"
            className="font-bold text-[var(--color-text-primary)] text-[20px]"
            onClick={() => setOpen(false)}
          >
            INÍCIO
          </a>
          <a
            href="#section_servicos"
            className="font-bold text-[var(--color-text-primary)] text-[20px]"
            onClick={() => setOpen(false)}
          >
            SERVIÇOS
          </a>
          <a
            href="#section_about"
            className="font-bold text-[var(--color-text-primary)] text-[20px]"
            onClick={() => setOpen(false)}
          >
            QUEM SOMOS
          </a>
          <a
            href="#section_contato"
            className="font-bold text-[var(--color-text-primary)] text-[20px]"
            onClick={() => setOpen(false)}
          >
            CONTATO
          </a>
        </nav>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full p-2">
          <img
            src="/logomenu.png"
            alt="Logo Mobile"
            className="w-full h-auto"
          />
        </div>
      </div>
    </header>
  );
}
