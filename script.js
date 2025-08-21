<script>
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    if (menu.classList.contains('max-h-0')) {
      // Open menu
      menu.classList.remove('max-h-0', 'opacity-0');
      menu.classList.add('max-h-96', 'opacity-100');
    } else {
      // Close menu
      menu.classList.remove('max-h-96', 'opacity-100');
      menu.classList.add('max-h-0', 'opacity-0');
    }
  });
</script>
