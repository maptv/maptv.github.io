document.querySelectorAll('a.quarto-xref').forEach(ref => {
  const text = ref.textContent;

  // Match the last number in the text (e.g., "Figure 12")
  const match = text.match(/(\d+)(?!.*\d)/);
  if (!match) return;

  const currentNum = parseInt(match[1], 10);
  if (currentNum <= 0) return;

  const newNum = currentNum - 1;

  // Replace only that number
  ref.textContent = text.replace(/(\d+)(?!.*\d)/, newNum);
});
