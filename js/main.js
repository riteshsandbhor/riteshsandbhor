// Dynamically add WhatsApp button to the DOM
window.addEventListener('load', function() {
  const whatsappButton = document.createElement('a');
  whatsappButton.href = 'https://wa.me/5716041043'; // Correct phone number
  whatsappButton.target = '_blank';
  whatsappButton.className = 'whatsapp-button d-flex align-items-center justify-content-center';
  whatsappButton.innerHTML = '<i class="bi bi-whatsapp"></i>';

  // Append the button to the body
  document.body.appendChild(whatsappButton);

  // Ensure it is above the Scroll to Top button
  whatsappButton.style.position = 'fixed';
  whatsappButton.style.bottom = '100px'; // Above Scroll to Top
  whatsappButton.style.right = '20px';
  whatsappButton.style.width = '50px';
  whatsappButton.style.height = '50px';
  whatsappButton.style.backgroundColor = '#25D366';
  whatsappButton.style.color = 'white';
  whatsappButton.style.borderRadius = '50%';
  whatsappButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  whatsappButton.style.zIndex = '1100'; // Ensure it is above other elements
  whatsappButton.style.display = 'flex';
  whatsappButton.style.alignItems = 'center';
  whatsappButton.style.justifyContent = 'center';
  whatsappButton.style.transition = 'transform 0.3s ease';

  // Add hover effect
  whatsappButton.addEventListener('mouseover', () => {
    whatsappButton.style.transform = 'scale(1.1)';
  });
  whatsappButton.addEventListener('mouseout', () => {
    whatsappButton.style.transform = 'scale(1)';
  });
});