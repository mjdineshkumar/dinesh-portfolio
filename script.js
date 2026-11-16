// Animated Profession Text

const roles = [
    "Biomedical Engineer",
    "Web Developer",
    "Healthcare Innovator",
    "Quality Inspector"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

const profession = document.querySelector(".intro h2");

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    profession.textContent = currentRole.substring(0, characterIndex) + "|";

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentRole.length) {
        speed = 1500;
        isDeleting = true;
    } 
    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// Initialize EmailJS
emailjs.init({
    publicKey: "o4DZqBrvrexdTfeO3"
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.innerText = "Sending...";

    emailjs.sendForm(
        "service_vd4o55f",
        "template_n00gly6",
        contactForm
    )
    .then(function() {

        alert("Message sent successfully!");

        contactForm.reset();

        button.innerText = "Send Message";

    })
    .catch(function(error) {

        alert("Message sending failed. Please try again.");

        console.log(error);

        button.innerText = "Send Message";

    });

});