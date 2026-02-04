document.querySelectorAll('.footnote-ref').forEach(ref => {
  // Find the <sup> element
  const sup = ref.querySelector('sup');
  if (!sup) return;

  // Parse the current number
  const currentNum = parseInt(sup.textContent, 10);
  if (isNaN(currentNum) || currentNum <= 0) return;

  const newNum = currentNum - 1;

  // Update the <sup> text
  sup.textContent = newNum;

  // Update the href (replace trailing number)
  ref.href = ref.href.replace(/(\d+)(?!.*\d)/, newNum);

  // Optional: update id and data-original-href if you want consistency
  if (ref.id) {
    ref.id = ref.id.replace(/(\d+)(?!.*\d)/, newNum);
  }

  if (ref.dataset.originalHref) {
    ref.dataset.originalHref =
      ref.dataset.originalHref.replace(/(\d+)(?!.*\d)/, newNum);
  }
});
