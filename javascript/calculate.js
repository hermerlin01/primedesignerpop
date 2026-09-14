const ceilingOptions = document.querySelectorAll('input[name="ceilingType"]');
const roomArea = document.getElementById("roomArea");
const areaValue = document.getElementById("areaValue");
const budget = document.getElementById("budget");

function calculateBudget() {
  const selectedOption = document.querySelector('input[name="ceilingType"]:checked').value;
  const [minRate, maxRate] = selectedOption.split("-").map(Number);
  const area = parseInt(roomArea.value);
  areaValue.textContent = area;

  const minTotal = minRate * area;
  const maxTotal = maxRate * area;

  budget.textContent = `₹${minTotal.toLocaleString()} – ₹${maxTotal.toLocaleString()}`;
}

ceilingOptions.forEach(option => option.addEventListener("change", calculateBudget));
roomArea.addEventListener("input", calculateBudget);

// Initial calculation
calculateBudget();


const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {

  // Get selected ceiling type
  const selectedCeiling = document.querySelector(
    'input[name="ceilingType"]:checked'
  );

  // Get ceiling name
  const ceilingType = selectedCeiling.parentElement.textContent.trim();

  // Get selected area
  const area = roomArea.value;

  // Get calculated budget
  const totalBudget = budget.textContent;

  // Your WhatsApp number
  const phoneNumber = "919756126440";

  // Message
  const message = `Hello, I would like to book a site visit.

Ceiling Type:
${ceilingType}

Room Area:
${area} sq ft

Estimated Budget:
${totalBudget}

Please contact me regarding the site visit.`;

  // Open WhatsApp
  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});