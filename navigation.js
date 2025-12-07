(function buildNavigation() {
  const THEME_KEY = 'vbuw-theme';
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem(THEME_KEY);
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  const applyTheme = (mode) => {
    const root = document.documentElement;
    root.classList.toggle('theme-dark', mode === 'dark');
    root.dataset.theme = mode;
  };

  applyTheme(initialTheme);

  const placeholder = document.querySelector('[data-nav-placeholder]');
  if (!placeholder) return;

  const current = (document.body && document.body.dataset.documentType) || '';
  const links = [
    { id: 's627', href: 's627.html', label: 'S627' },
    { id: 's460', href: 's460.html', label: 'S460' },
    { id: 's505', href: 's505.html', label: 'S505' },
    { id: 'drive', href: 'https://drive.google.com/drive/folders/1wfK-iDhOTg_Xtzm-rLQYlmB-5gyzOYTZ?usp=drive_link', label: 'Google Drive', external: true },
  ];

  const nav = document.createElement('nav');
  nav.className = 'topnav';

  const navInner = document.createElement('div');
  navInner.className = 'nav-inner';

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

  const navActions = document.createElement('div');
  navActions.className = 'nav-actions';

  const toggleLabel = document.createElement('label');
  toggleLabel.className = 'theme-toggle';
  const toggleInput = document.createElement('input');
  toggleInput.type = 'checkbox';
  toggleInput.ariaLabel = 'Schakel dark mode';
  toggleInput.checked = initialTheme === 'dark';
  const toggleVisual = document.createElement('span');
  toggleVisual.className = 'toggle';
  const toggleText = document.createElement('span');
  toggleText.className = 'theme-toggle__text';
  toggleText.textContent = 'Dark mode';
  toggleLabel.append(toggleInput, toggleVisual, toggleText);

  toggleInput.addEventListener('change', () => {
    const mode = toggleInput.checked ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, mode);
    applyTheme(mode);
  });

  navActions.append(navLinks, toggleLabel);
  navInner.append(brand, navActions);
  nav.append(navInner);
  placeholder.replaceWith(nav);
})();
