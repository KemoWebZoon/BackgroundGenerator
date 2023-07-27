let change = () => {
  let color1 = document.getElementById("colorOne");
  let color2 = document.getElementById("colorTwo");
  let container = document.querySelector(".container");
  let finalvalue = document.querySelector("#FinalValue");
  color1.addEventListener("input", () => {
    container.style.backgroundImage =
      "linear-gradient(to right , " + color1.value + "," + color2.value + ")";
    finalvalue.value =
      "background-image : linear-gradient(to right , " +
      color1.value +
      "," +
      color2.value +
      ")";
  });
  color2.addEventListener("input", () => {
    container.style.backgroundImage =
      "linear-gradient(to right , " + color1.value + "," + color2.value + ")";
    "linear-gradient(to right , " + color1.value + "," + color2.value + ")";
  });
};
change();
// 44 158 36 ######## 0 204 255
