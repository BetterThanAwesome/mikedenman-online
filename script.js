(() => {
  const cfg = window.SITE_CONFIG || { links: {} };
  document.querySelectorAll('[data-link]').forEach(el => {
    const key = el.dataset.link;
    if (cfg.links && cfg.links[key]) el.href = cfg.links[key];
  });

  const button = document.querySelector('.menu-button');
  const panel = document.querySelector('.nav-panel');
  if (button && panel) {
    const close = () => {
      panel.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    };
    button.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('click', event => {
      if (!panel.contains(event.target) && !button.contains(event.target)) close();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') close();
    });
  }
})();
