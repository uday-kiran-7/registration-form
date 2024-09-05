document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const message = document.getElementById('form-message');
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value.trim();

        if (firstName && lastName && email && phone && dob) {
            message.textContent = 'Registration successful!';
            message.style.color = 'green';
            form.reset();
        } else {
            message.textContent = 'Please fill out all fields.';
            message.style.color = 'red';
        }
    });
});
