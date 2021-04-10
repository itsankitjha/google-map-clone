const email = document.querySelector(".email-input");
const pass = document.querySelector("#exampleInputPassword1");
const chkbox = document.querySelector(".check-input");
const error = document.querySelector(".error");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (pass.value.length <= 6) {
    messages.push("Password must be 6 characters");
  }
  if (pass.value.length >= 20) {
    messages.push("Password must be under 20 characters");
  }
  if (
    pass.value === "password" ||
    pass.value === "Password" ||
    pass.value === "123456789"
  ) {
    messages.push(`Password cannot be "${pass.value}"`);
  }
  if (messages.length > 0) {
    error.style.color = "red";
    e.preventDefault();
    error.innerHTML = messages.join(",");
  }
});
