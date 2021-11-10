const formElement = document.querySelector("#form_signin");

const usernameValue = document.querySelector("#username");

// add class for invalid input parent
const invalidInput = (node) => {
  node.parentNode.classList.remove("form_signin-success");
  node.parentNode.classList.add("form_signin-error");
};

// add class for invalid input parent
const validInput = (node) => {
  node.parentNode.classList.remove("form_signin-error");

  node.parentNode.classList.add("form_signin-success");
};

formElement.addEventListener(
  "focus",
  (e) => {
    e.target.parentNode.classList.remove("form_signin-error");
    e.target.parentNode.classList.remove("form_signin-success");
  },
  true
);

formElement.addEventListener(
  "blur",
  (e) => {
    if (!e.target.value) {
      invalidInput(e.target);
    } else {
      validInput(e.target);
    }
  },
  true
);
