document.getElementById('currentYear').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', () => {
    const tipButtons = document.querySelectorAll('[data-tip]');
    
    tipButtons.forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg:last-child');
        const isContentVisible = !content.classList.contains('hidden');
  
        // Toggle content visibility
        content.classList.toggle('hidden');
        
        // Update icon based on visibility
        const path = icon.querySelector('polyline');
        path.setAttribute('points', isContentVisible 
          ? "6 9 12 15 18 9" 
          : "18 15 12 9 6 15");
  
        // Close other open tips
        tipButtons.forEach(otherButton => {
          if (otherButton !== button) {
            const otherContent = otherButton.nextElementSibling;
            const otherIcon = otherButton.querySelector('svg:last-child');
            
            otherContent.classList.add('hidden');
            const otherPath = otherIcon.querySelector('polyline');
            otherPath.setAttribute('points', "6 9 12 15 18 9");
          }
        });
      });
    });
  });