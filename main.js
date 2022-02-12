function DeleteMe() {
  document.getElementById("my-result").value = "";
}

function calculator(newValue) {
  document.getElementById("my-result").value += newValue;
}

function answer() {
  let a = document.getElementById("my-result").value;
  let b = eval(a);
  document.getElementById("my-result").value = b;
}
