document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    /*const age = parseInt(document.getElementById("age").value, 10);*/
    const endpoint = "dummy";
    /*const email = document.getElementById("email").value;*/
    const form = event.target;
    const formData = new FormData(form);
    const age = parseInt(formData.get("age"), 10);
    const email = formData.get("email");
    const mailRGX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (age < 19) {
        alert("You must be older than 19 years old.");
        return;
    }
    if (!mailRGX.test(email)) {
        alert("Please enter the valid email ID.");
        return;
    }
    fetch(endpoint, {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        alert("Appointment Booked... Thank you for contacting. I will get back to you as soon as possible...") + result;
        form.reset();
    })
    .catch(error => {
        alert("Form is still under development, try connecting to me on my LinkedIn, X or Upwork profiles...") + error;
    });
    alert("This functionality is still under development, try connecting to me on my LinkedIn, X or Upwork profiles...");
});