// Fade in on scroll
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fades.forEach(f => observer.observe(f));

// السعر
const basePrice = 3000;
const qty = document.getElementById("qty");
const total = document.getElementById("total");
const price = document.getElementById("price");

qty.addEventListener("input", () => {
  let q = qty.value;
  let newPrice = basePrice * q;
  total.textContent = newPrice;
});

// إرسال الطلب عبر واتساب
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  let msg =
`طلب جديد 🛒
الاسم: ${fname.value}
اللقب: ${lname.value}
الهاتف: ${phone.value}
الولاية: ${state.value}
الكمية: ${qty.value}
السعر: ${total.textContent} دج`;

  window.open(
    `https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
});
