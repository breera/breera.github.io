const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const bars = btn.querySelectorAll('span');
const links = menu.querySelectorAll('a'); // all menu links

function openMenu() {
  menu.classList.remove('max-h-0', 'opacity-0');
  menu.classList.add('max-h-96', 'opacity-100');
  btn.setAttribute('aria-expanded', 'true');

  // Animate to X
  bars[0].classList.add('rotate-45', 'translate-y-2');
  bars[1].classList.add('opacity-0');
  bars[2].classList.add('-rotate-45', '-translate-y-2');
}

function closeMenu() {
  menu.classList.remove('max-h-96', 'opacity-100');
  menu.classList.add('max-h-0', 'opacity-0');
  btn.setAttribute('aria-expanded', 'false');

  // Animate back to hamburger
  bars[0].classList.remove('rotate-45', 'translate-y-2');
  bars[1].classList.remove('opacity-0');
  bars[2].classList.remove('-rotate-45', '-translate-y-2');
}

btn.addEventListener('click', () => {
  const isOpen = menu.classList.contains('max-h-96');
  isOpen ? closeMenu() : openMenu();
});

// Close menu when clicking a link
links.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.getElementById("email-link").addEventListener("click", function (e) {
  // Open mailto
  setTimeout(() => {
    // After 1s, if no client opened, show alert
    alert("It looks like no email app is set up on your device. You can email me at: breerahanif62@gmail.com");
  }, 1000);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop normal form submit

  // Collect values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Build mailto link
  const subject = encodeURIComponent("New message from " + name);
  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

  // Open default email app (Gmail, Outlook, etc.)
  window.location.href = `mailto:breerahanif62@gmail.com?subject=${subject}&body=${body}`;
  // Fallback error message after delay
  setTimeout(() => {
    alert("It looks like no email app is installed or configured on your device. You can email me directly at: breerahanif62@gmail.com");
  }, 2000);
});
