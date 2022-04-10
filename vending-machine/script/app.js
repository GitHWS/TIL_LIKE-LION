const vendingBtn = document.querySelectorAll(".btn");

console.log(vendingBtn);

for (let btn of vendingBtn) {
  btn.addEventListener("click", () => {
    console.log(btn);
  });
}
