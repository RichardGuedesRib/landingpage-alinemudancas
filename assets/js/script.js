document.addEventListener("DOMContentLoaded", function () {
  const btnEntreEmContatoMenu = document.getElementById(
    "btnEntreEmContatoMenu"
  );
  const modal = document.getElementById("modal");
  const fechar = document.getElementById("fechar");
  const enviar = document.getElementById("enviar");
  const origemInput = document.getElementById("origem");
  const destinoInput = document.getElementById("destino");
  const mensagemTextarea = document.getElementById("mensagem");
  const linkWhatsAppFooter = document.getElementById("linkWhatsAppFooter");
  const iconWhatsApp = document.getElementById("iconWhatsApp");

  btnEntreEmContatoMenu.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // iconWhatsApp.addEventListener("click", function () {
  //   modal.style.display = "block";
  // });

  linkWhatsAppFooter.addEventListener("click", function () {
    modal.style.display = "block";
  });

  fechar.addEventListener("click", function () {
    modal.style.display = "none";
  });

  enviar.addEventListener("click", function () {
    const origem = origemInput.value;
    const destino = destinoInput.value;
    const mensagem = mensagemTextarea.value;
    const numeroTelefone = "+5511996908693";
    const mensagemWhatsApp = `Olá! Vim Através do Site!%0AGostaria de um orçamento!%0AOrigem: ${origem}%0ADestino: ${destino}%0ADescrição dos Móveis: ${mensagem}`;

    window.open(`https://wa.me/${numeroTelefone}?text=${mensagemWhatsApp}`);
    modal.style.display = "none";
  });
});
