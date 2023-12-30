function redirectToLoginPage() {
  // Redirect to the login page (replace the URL with your actual login page)
  window.location.href = "../signup/signup.html";
}

// After 0.5 seconds, remove the loading element
setTimeout(() => {
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
}, 500);
document.addEventListener("DOMContentLoaded", function () {
  // Simulating text typing effect for 15 articles
  for (let i = 1; i <= 15; i++) {
    const articleId = `article-${i}`;
    const textElementId = `text-typing-${i}`;

    typeText(textElementId, getNewsText(i));
  }
});

function typeText(elementId, text) {
  const targetElement = document.getElementById(elementId);

  if (!targetElement) {
    console.error(`Element with ID ${elementId} not found.`);
    return;
  }

  let index = 0;

  function type() {
    if (index < text.length) {
      targetElement.innerHTML += text.charAt(index);

      // Add the blinking cursor
      targetElement.innerHTML += `<span class="text-cursor"></span>`;

      index++;
      setTimeout(type, 50); // Adjust typing speed (milliseconds)
    }
  }

  type();
}

function getNewsText(articleNumber) {
  return `This is the text for News Article ${articleNumber}. It can contain important information, updates, and details.`;
}
