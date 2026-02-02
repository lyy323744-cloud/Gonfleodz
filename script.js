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

// Carousel بالسحب يمين/يسار
const track = document.querySelector('.carousel-track');
let isDown = false, startX, scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => isDown = false);
track.addEventListener('mouseup', () => isDown = false);
track.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1;
  track.scrollLeft = scrollLeft - walk;
});

// للسحب باللمس (للتابلت والهاتف)
track.addEventListener('touchstart', e => {
  isDown = true;
  startX = e.touches[0].pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener('touchend', () => isDown = false);
track.addEventListener('touchmove', e => {
  if(!isDown) return;
  const x = e.touches[0].pageX - track.offsetLeft;
  const walk = (x - startX) * 1;
  track.scrollLeft = scrollLeft - walk;
});
