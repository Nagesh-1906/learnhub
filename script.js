// Helper functions
function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function val(id) {
  return document.getElementById(id).value.trim();
}

// Register form validation
function validateForm() {
  let isValid = true;

  // Hide all previous errors
  hide("nameError");
  hide("emailError");
  hide("phoneError");
  hide("passwordError");
  hide("confirmError");
  hide("successMsg");
  hide("errorMsg");

  // --- Name check ---
  let name = val("name");
  if (name === "") {
    show("nameError");
    isValid = false;
  }

  // --- Email check ---
  let email = val("email");
  if (email === "" || !email.includes("@") || !email.includes(".")) {
    show("emailError");
    isValid = false;
  }

  // --- Phone check (10 digits) ---
  let phone = val("phone");
  if (phone === "" || phone.length !== 10 || isNaN(phone)) {
    show("phoneError");
    isValid = false;
  }

  // --- Password check (min 6 chars) ---
  let password = val("password");
  if (password.length < 6) {
    show("passwordError");
    isValid = false;
  }

  // --- Confirm password check ---
  let confirm = val("confirm");
  if (confirm !== password) {
    show("confirmError");
    isValid = false;
  }

  // --- Show result ---
  if (isValid) {
    alert("Registration Successful! Welcome to LearnHub.");
    window.location.href = "login.html";
  } else {
    show("errorMsg");
  }

  // Prevent page from refreshing
  return false;
}

// Contact form logic
function sendContactForm() {
  let name = val("cname");
  let email = val("cemail");
  let subject = val("csubject");
  let message = val("cmessage");

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all required fields (Name, Email, Message).");
    return;
  }

  // Show success message
  show("contactSuccess");

  // Clear form
  document.getElementById("cname").value = "";
  document.getElementById("cemail").value = "";
  document.getElementById("csubject").value = "";
  document.getElementById("cmessage").value = "";
}

// Login form validation
function validateLogin() {
  let isValid = true;

  // Hide all previous errors
  hide("loginEmailError");
  hide("loginPasswordError");
  hide("loginSuccess");
  hide("loginError");

  // --- Email check ---
  let email = val("loginEmail");
  if (email === "") {
    show("loginEmailError");
    isValid = false;
  }

  // --- Password check ---
  let password = val("loginPassword");
  if (password === "") {
    show("loginPasswordError");
    isValid = false;
  }

  if (isValid) {
    alert("Login Successful!");
    window.location.href = "courses.html";
  }
}
