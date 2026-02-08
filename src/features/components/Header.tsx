import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full lg:px-16">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className="ml-auto lg:ml-0">
          <img src="/logo.png" alt="Aline Mudanças" className="h-auto w-[110px]" />
        </div>

        {/* menu desktop */}
        <nav className="hidden lg:flex gap-[67px]">
          <a href="#" className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]">INÍCIO</a>
          <a href="#" className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]">SERVIÇOS</a>
          <a href="#" className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]">QUEM SOMOS</a>
          <a href="#" className="text-[var(--color-text-primary)] font-bold tracking-[0.05em]">CONTATO</a>
        </nav>
      </div>

      {/* menu mobile */}
      {open && (
        <nav className="lg:hidden flex flex-col gap-4 px-4 pb-4 border-t">
          <a href="#">INÍCIO</a>
          <a href="#">SERVIÇOS</a>
          <a href="#">QUEM SOMOS</a>
          <a href="#">CONTATO</a>
        </nav>
      )}
    </header>
  );
}
