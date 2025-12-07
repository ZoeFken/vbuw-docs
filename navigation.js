(function buildNavigation() {
  const placeholder = document.querySelector('[data-nav-placeholder]');
  if (!placeholder) return;

  const current = (document.body && document.body.dataset.documentType) || '';
  const links = [
    { id: 's627', href: 's627.html', label: 'S627' },
    { id: 's460', href: 's460.html', label: 'S460' },
    { id: 'drive', href: 'https://drive.google.com/drive/folders/1wfK-iDhOTg_Xtzm-rLQYlmB-5gyzOYTZ?usp=drive_link', label: 'Google Drive', external: true },
  ];

  const nav = document.createElement('nav');
  nav.className = 'topnav';

  const brand = document.createElement('a');
  brand.className = 'brand';
  brand.href = 'index.html';
  brand.textContent = 'VBUW docs';

  const navLinks = document.createElement('div');
  navLinks.className = 'nav-links';

  links.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    if (item.external) {
      link.target = '_blank';
      link.rel = 'noreferrer noopener';
    }
    if (item.id && item.id === current) link.classList.add('active');
    navLinks.appendChild(link);
  });

  nav.append(brand, navLinks);
  placeholder.replaceWith(nav);
})();
