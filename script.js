document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("person-form");
  const tableBody = document.getElementById("table-body");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      addPerson();
      clearForm();
    }
  });

  function validateForm() {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const dobInput = document.getElementById("dob");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const cityInput = document.getElementById("city");
    const pincodeInput = document.getElementById("pincode");

    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const dobError = document.getElementById("dob-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const cityError = document.getElementById("city-error");
    const pincodeError = document.getElementById("pincode-error");

    firstNameError.textContent = "";
    lastNameError.textContent = "";
    dobError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    cityError.textContent = "";
    pincodeError.textContent = "";

    let isValid = true;

    if (!firstNameInput.value) {
      firstNameError.textContent = "Please enter the first name.";
      isValid = false;
    }

    if (!lastNameInput.value) {
      lastNameError.textContent = "Please enter the last name.";
      isValid = false;
    }

    const today = new Date();
    const dob = new Date(dobInput.value);
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const isAbove18 = age > 18 || (age === 18 && monthDiff >= 0);

    if (!dobInput.value || !isAbove18) {
      dobError.textContent = "Please enter a valid date of birth (above 18 years old).";
      isValid = false;
    }

    if (!emailInput.value || !validateEmail(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!phoneInput.value || !validatePhone(phoneInput.value)) {
      phoneError.textContent = "Please enter a valid phone number (10 digits or with country code).";
      isValid = false;
    }

    if (!cityInput.value) {
      cityError.textContent = "Please enter the city.";
      isValid = false;
    }

    if (!pincodeInput.value || !validateZipcode(pincodeInput.value)) {
      pincodeError.textContent = "Please enter a valid pincode/zipcode.";
      isValid = false;
    }

    return isValid;
  }

  function validateEmail(email) {
    // Use a regular expression or other validation method to check the email format
    // Example regular expression: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    // Use a regular expression or other validation method to check the phone number format
    // Example regular expression: /^\d{10}$/
    return /^\d{10}$/.test(phone);
  }

  function validateZipcode(pincode) {
    // Use a regular expression or other validation method to check the zipcode format
    // Example regular expression: /^\d{5}$/
    return /^\d{6}$/.test(pincode);
  }

  function addPerson() {
    const firstNameInput = document.getElementById("first-name").value;
    const lastNameInput = document.getElementById("last-name").value;
    const dobInput = document.getElementById("dob").value;
    const emailInput = document.getElementById("email").value;
    const phoneInput = document.getElementById("phone").value;
    const cityInput = document.getElementById("city").value;
    const pincodeInput = document.getElementById("pincode").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${dobInput}</td>
      <td>${emailInput}</td>
      <td>${phoneInput}</td>
      <td>${cityInput}</td>
      <td>${pincodeInput}</td>
    `;

    tableBody.appendChild(newRow);
  }

  function clearForm() {
    form.reset();
  }
});
