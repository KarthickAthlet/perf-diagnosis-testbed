// start-up work
(function(){ const t = performance.now(); while (performance.now() - t < 20) {} })();
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-to-cart').addEventListener('click', () => {
    const t = performance.now(); while (performance.now() - t < 20) {}
    document.getElementById('add-to-cart').textContent = 'Added ✓';
  });
  // the promo slot has reserved space, so this does not shift the page
  setTimeout(() => { const d = document.createElement('div'); d.id = 'promo'; d.textContent = 'Autumn sale: 20% off all chairs'; document.getElementById('promo-slot').appendChild(d); }, 1500);
});
