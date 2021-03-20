const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function handleFailure(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const errorMessage = formControl.querySelector("small");
  errorMessage.innerText = message;
}

function handleSuccess(input) {
  const formControl = input.parentElement;
  console.log(formControl);
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    handleFailure(username, "Username is required");
  } else {
    handleSuccess(username);
  }

  if (email.value === "") {
    handleFailure(email, "A valid email is required");
  } else if (!isValidEmail(email.value)) {
    handleFailure(email, "Email is not Valid");
  } else {
    handleSuccess(email);
  }
  if (password.value === "") {
    handleFailure(password, "A valid password is required");
  } else {
    handleSuccess(password);
  }
  if (password2.value === "") {
    handleFailure(password2, "Password does not match");
  } else {
    handleSuccess(password2);
  }
});
