// Function to update the selected option and total price
function updateSelection() {
  // Remove 'selected' class from all options
  document.querySelectorAll('.option').forEach(option => {
    option.classList.remove('selected');
  });

  // Add 'selected' class to the chosen option
  const selectedRadio = document.querySelector('input[name="units"]:checked');
  selectedRadio.closest('.option').classList.add('selected');

  // Update total price
  const prices = {
    unit1: '$10.00 USD',
    unit2: '$18.00 USD',
    unit3: '$24.00 USD'
  };
  document.getElementById('total-price').textContent = prices[selectedRadio.id];
}

// Add event listeners to radio buttons
document.querySelectorAll('input[name="units"]').forEach(input => {
  input.addEventListener('change', updateSelection);
});

// Initial setup
updateSelection();
