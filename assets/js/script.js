function printCv() {
  window.focus();

  setTimeout(() => {
    window.print();
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.getElementById("printButton");

  if (printButton) {
    printButton.addEventListener("click", printCv);
  }

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if ((event.ctrlKey || event.metaKey) && key === "p") {
      event.preventDefault();
      printCv();
    }
  });
});