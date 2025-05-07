// Function to show confirmation modal
function showConfirmation() {
    const modal = document.getElementById("confirmationModal");
    const preferencesSummary = document.getElementById("preferencesSummary");
    
    // Capture form data
    const customPreferences = document.getElementById("preferences").value;
    const vegan = document.getElementById("vegan").checked ? "Vegan" : "";
    const glutenFree = document.getElementById("glutenFree").checked ? "Gluten-Free" : "";
    const dairyFree = document.getElementById("dairyFree").checked ? "Dairy-Free" : "";
    const email = document.getElementById("email").value;

    let dietarySummary = [vegan, glutenFree, dairyFree].filter(Boolean).join(", ");
    let preferencesText = customPreferences ? `Custom Preferences: ${customPreferences}` : "No custom preferences.";
    
    // Combine all preferences into one message
    preferencesSummary.innerHTML = `
        ${preferencesText}<br><br>
        Dietary Preferences: ${dietarySummary || "None"}<br>
        Email: ${email || "Not provided"}
    `;

    // Display the modal
    modal.style.display = "flex";
}

// Function to close confirmation modal
function closeModal() {
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

// Attach the event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", showConfirmation);