// start-up work
(function(){ const t = performance.now(); while (performance.now() - t < 20) {} })();
window.addEventListener('DOMContentLoaded', () => {
  // new: "personalisation" that runs right after the first paint
  setTimeout(() => { const t = performance.now(); while (performance.now() - t < 450) {} }, 0);
  document.getElementById('add-to-cart').addEventListener('click', () => {
    const t = performance.now(); while (performance.now() - t < 280) {}
    for (let i = 0; i < 40; i++) { document.body.style.paddingTop = (i % 2) + 'px'; void document.body.offsetHeight; }
    document.getElementById('add-to-cart').textContent = 'Added ✓';
  });
  setTimeout(() => { const d = document.createElement('div'); d.id = 'promo'; d.textContent = 'Autumn sale: 20% off all chairs'; document.getElementById('promo-slot').appendChild(d); }, 1500);
});
