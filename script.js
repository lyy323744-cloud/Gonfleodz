// Fade-in عند التحميل
window.addEventListener('load', () => {
  document.querySelectorAll('.fade').forEach(el => el.style.opacity = 1);
});

// تحديث السعر حسب الكمية
const qty = document.getElementById('qty');
const total = document.getElementById('total');
const pricePerItem = 3000;

qty.addEventListener('input', () => {
  let q = parseInt(qty.value) || 1;
  total.textContent = pricePerItem * q;
});

// زر الطلب
const form = document.getElementById('orderForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('تم إرسال طلبك بنجاح!');
});
