// Use addEventListener to safely run alongside Quarto's scripts
window.addEventListener('load', function () {
  
  const headline = document.querySelector('#title-block-header h1.title');
  
  if (!headline || headline.querySelector('.word')) {
    return;
  }
  
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