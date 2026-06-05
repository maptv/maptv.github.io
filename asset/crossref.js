document.querySelectorAll('a.quarto-xref:not([href*="#sec-"])')
.forEach(a => a.textContent =
  a.textContent.replace(/(\d+)(?!.*\d)/,
    n => Math.max(0, n - 1))
);
