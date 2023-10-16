let icon1 = document.getElementById("icon1"),
  icon2 = document.getElementById("icon2"),
  icon3 = document.getElementById("icon3"),
  icon4 = document.getElementById("icon4"),
  icon5 = document.getElementById("icon5");

icon1.addEventListener("click", () => {
  copyCode("c1");
});
icon2.addEventListener("click", () => {
  copyCode("c2");
});
icon3.addEventListener("click", () => {
  copyCode("c3");
});
icon4.addEventListener("click", () => {
  copyCode("c4");
});
icon5.addEventListener("click", () => {
  copyCode("c5");
});

// id => is for each code
function copyCode(id) {
  let targetText = document.getElementById(id).textContent;
  navigator.clipboard
    .writeText(targetText)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "The Code Copied To Clipboard",
      });
      //alert("Text copied to clipboard: \n" + targetText);
    })
    .catch((err) => {
      console.error("Unable to copy text: ", err);
    });
}
