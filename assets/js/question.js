const btn = document.querySelectorAll(".btn-js");
console.log(btn);
btn.forEach((i) => {
  i.addEventListener("click", function () {
    btnNumber = i.children[0].textContent;
    btnNumber++;
    i.children[0].textContent = btnNumber;
    console.log(btnNumber);
  });
});
