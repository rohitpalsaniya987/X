function redirectToLoginPage() {
  // Redirect to the login page (replace the URL with your actual login page)
  window.location.href = "../login/login.html";
}

// After 0.5 seconds, remove the loading element
setTimeout(() => {
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
}, 500);
