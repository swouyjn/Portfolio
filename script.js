// Scroll fade-up animation
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Hero fades in immediately
document.querySelector('.hero')?.classList.add('visible');

// Now playing
async function loadNowPlaying() {
  const widget = document.getElementById('now-playing');
  if (!widget) return;
  try {
    const res = await fetch('/api/now-playing');
    const data = await res.json();
    if (!data.isPlaying) {
      document.getElementById('np-hint').textContent = 'not playing right now';
      return;
    }
    widget.innerHTML = `
      <a class="np-card" href="${data.songUrl}" target="_blank" rel="noopener">
        <img class="np-art" src="${data.albumArt}" alt="${data.album}">
        <div class="np-info">
          <div class="eq-bars">
            <span class="bar b1"></span><span class="bar b2"></span>
            <span class="bar b3"></span><span class="bar b4"></span>
            <span class="bar b5"></span>
          </div>
          <p class="np-title">${data.title}</p>
          <p class="np-artist">${data.artist}</p>
        </div>
      </a>`;
  } catch {
    document.getElementById('np-hint').textContent = 'not playing right now';
  }
}
loadNowPlaying();

// Expandable project cards (only buttons, not anchor links)
document.querySelectorAll('button.card-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const detail = btn.nextElementSibling;

    btn.setAttribute('aria-expanded', String(!expanded));

    if (expanded) {
      detail.hidden = true;
    } else {
      detail.hidden = false;
    }
  });
});
