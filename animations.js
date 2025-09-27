document.addEventListener('DOMContentLoaded', function () {
  // Use querySelector to find the Quarto title
  const headline = document.querySelector('#title-block-header h1.title');

  // This check prevents the script from running if the title isn't found
  // or if it has already been animated.
  if (!headline || headline.querySelector('.word')) {
    return;
  }
  
  const text = headline.textContent;
  headline.innerHTML = ''; // Clear the original text
  let charIndex = 0; // A counter for all letters

  // Split the text into words
  text.split(' ').forEach(word => {
    // Create a wrapper for each word
    const wordWrapper = document.createElement('span');
    wordWrapper.className = 'word';

    // Split the word into letters
    word.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      // Apply a staggered delay based on the overall letter index
      span.style.animationDelay = `${charIndex * 50}ms`;
      wordWrapper.appendChild(span);
      charIndex++;
    });

    // Add the completed word (with its letter spans) to the headline
    headline.appendChild(wordWrapper);

    // Add a space after each word
    headline.appendChild(document.createTextNode(' '));
    charIndex++; // Increment for the space
  });
});