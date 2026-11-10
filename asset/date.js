// https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2date(unix) {
  const doe = unix / 86400 + 719468;
  const qoe = Math.floor(doe >= 0 ? doe : doe - 146096) / 146097 | 0;
  const doq = doe - qoe * 146097;
  const yoq = Math.floor(
    (doq
      - Math.floor(doq / 1460)
      + Math.floor(doq / 36524)
      - Math.floor(doq / 146096)
    ) / 365
  );
  const year = Math.floor(yoq + qoe * 400);
  const doy = Math.floor(
    doq - (yoq * 365 + Math.floor(yoq / 4) - Math.floor(yoq / 100))
  );
  return [year, doy];
}

document.addEventListener("DOMContentLoaded", () => {

  // --- Reformat dates ---
  document.querySelectorAll("div.listing-file-modified").forEach(div => {
    if (!div.textContent.includes("+")) {
      const sec = parseInt(div.textContent.trim(), 10);
      if (!isNaN(sec)) {
        const [y, d] = unix2date(sec);
        div.textContent =
          String(y).padStart(4, "0") + "+" +
          String(d).padStart(3, "0");
      }
    }
  });

  // --- Reformat reading time ---
  document.querySelectorAll("div.listing-reading-time").forEach(div => {
    if (div.textContent.includes("min")) {
      const minutes = parseInt(div.textContent.trim(), 10);
      if (!isNaN(minutes)) {
        const millidays = Math.floor(minutes / 1.44);
        div.textContent = `${millidays} milliday`;
      }
    }
  });

});
