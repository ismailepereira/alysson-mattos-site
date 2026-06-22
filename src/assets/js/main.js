/* =================================================================
   Alysson Mattos · Fisioterapeuta — JS base
   Menu mobile · revelação ao rolar · ano do rodapé · WhatsApp
   ================================================================= */
(function () {
  "use strict";

  /* --- Menu mobile --- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // fecha ao clicar num link
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- Revelação ao rolar --- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- Ano dinâmico no rodapé --- */
  const year = document.querySelector("[data-year]");
  if (year) { year.textContent = new Date().getFullYear(); }

  /* --- Formulário de contato -> WhatsApp (quando existir) --- */
  // Número internacional do Alysson (DDI 55 + DDD 65).
  const WHATSAPP = "5565999677158";
  const form = document.querySelector(".capture-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const data = new FormData(form);
      const nome = (data.get("nome") || "").toString().trim();
      const motivo = (data.get("motivo") || "").toString().trim();
      const msg =
        "Olá, Alysson! Meu nome é " + nome + "." +
        (motivo ? " Gostaria de falar sobre: " + motivo + "." : "") +
        " Vim pelo site.";
      const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
      window.open(url, "_blank", "noopener");
    });
  }
})();
