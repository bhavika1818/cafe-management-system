// JavaScript for form validation and submission alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting immediately

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation to check if all fields are filled out
    if (!name || !email || !message) {
        alert("Please fill out all the fields.");
    } else {
        // Here, you would typically send the data to the server, but for now, we'll show an alert
        alert("Thank you for your message, " + name + "! We will get back to you soon.");
        
        // Clear the form after submission
        document.getElementById("contactForm").reset();
    }
});