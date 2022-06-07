const inputBtn = document.getElementById("generateBtn");
const showPass1 = document.getElementById("showEl1");
const showPass2 = document.getElementById("showEl2");
const showPass4 = document.getElementById("showEl4");

function genPass() {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 0; i <= 12; i++) {
    let char = Math.floor(Math.random() * str.length);

    pass += str.substring(char, char + 1);
  }
  return pass;
}
function showMe() {
  showPass1.innerHTML = genPass();
  showPass2.innerHTML = genPass();
  showPass4.innerHTML = genPass();
}

// inputBtn.addEventListener("click", showMe());
