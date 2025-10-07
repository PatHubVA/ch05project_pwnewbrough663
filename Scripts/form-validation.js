document.getElementById('submitBtn').addEventListener('click', function() {
  const missingCount = checkMissing();
  const emailValid = validateEmail();

  if (missingCount > 0 || !emailValid) {
    alert("Please complete all required fields correctly before submitting.");
  } else {
    alert("Form submitted successfully!");
  }
});
