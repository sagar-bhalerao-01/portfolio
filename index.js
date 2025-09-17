document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    /*const age = parseInt(document.getElementById("age").value, 10);*/
    const endpoint = "https://script.google.com/macros/s/AKfycbyelu4plfqBBhcLHkn2UdkfyospyDk3txEd3ysz1c5UZYHGlmcNLOGGPGLprIsFtrk5wQ/exec";
    /*const email = document.getElementById("email").value;*/
    const form = event.target;
    const formData = new FormData(form);
    const mailRGX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (formData.age < 19) {
        alert("You must be older than 19 years old.");
        return;
    }
    if (!mailRGX.test(formData.mail)) {
        alert("Please enter the valid email ID.");
        return;
    }
    fetch(endpoint, {
        method: POST,
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        alert("Appointment Booked... Thank you for reaching out. I will get back to you as soon as possible...");
        form.reset();
    })
    .catch(error => {
        alert("Failed to book appointment due to technical failure, try reaching out to me on my LinkedIn, X or Upwork profiles...");
    });
});