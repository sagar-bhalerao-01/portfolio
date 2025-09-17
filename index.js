document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const mailRGX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (age < 19) {
        Swal.fire("You must be older than 19 years old.");
        return;
    }
    if (!mailRGX.test(email)) {
        Swal.fire("Please enter the valid email ID.");
        return;
    }
    Swal.fire("Form submitted...");
})