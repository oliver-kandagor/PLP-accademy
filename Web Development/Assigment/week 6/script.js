// ----------------------
// Part 1: Event Handling
// ----------------------
const button = document.getElementById("btn");
const txt = document.getElementById("txt");

button.addEventListener("click", () => {
  txt.textContent = "You clicked the button!";
});

// ----------------------
// Part 2: Interactive Elements
// ----------------------

// Light/Dark Mode
const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");

incBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  countDisplay.textContent = count;
});

// ----------------------
// Part 3: Form Validation
// ----------------------
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form from submitting

  let valid = true;

  // Name validation: must not be empty
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation: regex pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation: at least 6 chars
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final feedback
  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
