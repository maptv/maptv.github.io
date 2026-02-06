document.querySelectorAll('a.quarto-xref').forEach(ref => {
  const href = ref.getAttribute('href') || '';

  // Skip section cross references (e.g. #sec-*)
  if (/#sec-/.test(href)) return;

  const text = ref.textContent;

  // Find the last number in the text
  const match = text.match(/(\d+)(?!.*\d)/);
  if (!match) return;

  const currentNum = parseInt(match[1], 10);
  if (currentNum <= 0) return;

  const newNum = currentNum - 1;

  // Replace only the final number
  ref.textContent = text.replace(/(\d+)(?!.*\d)/, newNum);
});
