console.log('Script loaded successfully');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("form").addEventListener('submit', function(event) {
        const password = document.getElementById('user_password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword){
            alert('Passwords Do Not Match');
            event.preventDefault(); // Prevent form submission
        }
    });
});
