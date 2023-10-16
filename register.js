document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    // Array to store registration data (sets)
    const registrations = [];
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get form input values
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const passwordRepeat = document.getElementById('passwordrepeat').value;
  
      // Array to store validation errors
      const errors = [];
  
      // Validate username
      if (!/^[a-zA-Z0-9]{6,20}$/.test(username)) {
        errors.push('Username must be 6-20 characters and contain only letters and numbers.');
      }
  
      // Validate email
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        errors.push('Email address is not valid.');
      }
  
      // Validate password length
      if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.');
      }
  
      // Validate password match
      if (password !== passwordRepeat) {
        errors.push('Passwords do not match.');
      }
  
      // Display errors or proceed with submission
      if (errors.length > 0) {
        // Display the first error found
        alert(errors[0]);
      } else {
        // No errors, you can proceed with form submission
  
        // Create a new set for the registration data
        const registrationData = new Set();
        registrationData.add(username);
        registrationData.add(email);
        registrationData.add(password);
  
        // Add the registration data set to the array
        registrations.push(registrationData);
  
        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('passwordrepeat').value = '';
  
        alert('Registration successful!');
        console.log('Registrations:', registrations);
  
        // Here, you can choose to do something with the registrations array, such as saving it to localStorage or sending it to a server.
      }
    });
  
    // Add a keydown event listener for Control + 8
    window.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.key === '8') {
        console.log('Registrations:', registrations);
      }
    });
  });
  