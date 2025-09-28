// --- Title Animation ---
window.addEventListener('load', function () {
  const headline = document.querySelector('#title-block-header h1.title');
  if (!headline || headline.querySelector('.word')) { return; }
  const text = headline.textContent;
  headline.innerHTML = ''; 
  let charIndex = 0;
  text.split(' ').forEach(word => {
    const wordWrapper = document.createElement('span');
    wordWrapper.className = 'word';
    word.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${charIndex * 50}ms`;
      wordWrapper.appendChild(span);
      charIndex++;
    });
    headline.appendChild(wordWrapper);
    headline.appendChild(document.createTextNode(' '));
    charIndex++;
  });
});

// --- Fade-In on Scroll Animation ---
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('main section.level2');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  sections.forEach(section => {
    observer.observe(section);
  });
});