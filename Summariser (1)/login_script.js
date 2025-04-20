document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  
  if (name && username && password) {
      // Store user data in sessionStorage
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('userName', name);
      sessionStorage.setItem('username', username);
      
      window.location.href = 'Summary02.html';
  } else {
      alert('Please fill in all fields');
  }
});