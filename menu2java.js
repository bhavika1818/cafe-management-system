// JavaScript to handle the modal and order functionality

let modal = document.getElementById('orderModal');
let orderDetails = document.getElementById('orderDetails');
let orderPrice = document.getElementById('orderPrice');
let itemName = '';
let itemPrice = 0;

// Function to open the order modal with item details
function openOrderModal(name, price) {
    itemName = name;
    itemPrice = price;
    orderDetails.innerHTML = `You are ordering: <strong>${name}</strong>`;
    orderPrice.innerHTML = `Price: Rs. <strong>${price}</strong>`;
    modal.style.display = 'flex';
}

// Function to close the modal
function closeOrderModal() {
    modal.style.display = 'none';
}

// Function to confirm the order
function confirmOrder() {
    alert(`Thank you for your order! You ordered ${itemName} for Rs.${itemPrice}.`);
    closeOrderModal(); // Close the modal after confirming
}

// Close modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target === modal) {
        closeOrderModal();
    }
};