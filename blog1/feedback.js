function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    const responseMessage = document.getElementById('responseMessage');
  
    if (name === "" || email === "" || feedback === "") {
      responseMessage.textContent = "Please fill out all fields before submitting.";
      responseMessage.style.color = 'red';
      return false;
    } else {
      responseMessage.textContent = "Thank you for your feedback!";
      responseMessage.style.color = 'green';
      document.getElementById('feedbackForm').reset(); // Reset form after submission
      return false; // Prevent actual form submission for demo purposes
    }
  }