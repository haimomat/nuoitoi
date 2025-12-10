// File: js/main.js

// Animate bar chart fills on load
document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.bar-fill');
  fills.forEach(fill => {
    const pct = fill.style.getPropertyValue('--p');
    // Trigger in next frame to allow transition
    requestAnimationFrame(() => {
      fill.style.width = `${pct}%`;
    });
  });
});
