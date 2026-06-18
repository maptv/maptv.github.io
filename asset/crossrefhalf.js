document.querySelectorAll('a.quarto-xref:not([href*="#sec-"])')
  .forEach(
    function decrementThenDivideTableBy2(a) {
      if (a.textContent.startsWith("Table")) {
        a.textContent = a.textContent.replace(/(\d+)(?!.*\d)/, n => Math.floor(n / 2))
      }
    }
  );
