const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const checkEmail = document.getElementById("checkEmail");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  let valid = true;

  // Reset borders
  checkEmail.textContent = "";
  nameInput.classList.remove("border-red-700");
  emailInput.classList.remove("border-red-700");
  messageInput.classList.remove("border-red-700");

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    e.preventDefault();
    checkEmail.textContent = "Please enter a valid email.";
    emailInput.classList.add("border-red-700");
    valid = false;
  }

  if (nameInput.value.trim() === "") {
    e.preventDefault();
    nameInput.classList.add("border-red-700");
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    e.preventDefault();
    messageInput.classList.add("border-red-700");
    valid = false;
  }

  // If valid, let form submit to Formspree
});

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    successMessage.classList.remove("hidden");
    form.reset();
    setTimeout(() => successMessage.classList.add("hidden"), 4000);
  } else {
    alert("Oops! There was a problem sending your message.");
  }
});
