// SELECTING ELEMENTS
const h1 = document.querySelector('h1');
console.log("h1 element:", h1);

const contentElements = document.querySelectorAll('.content');
console.log("All .content elements:", contentElements);

const form = document.getElementById('contact-form');
console.log("Form element:", form);

const emailInput = document.querySelector('#email');
console.log("Email input:", emailInput);

const navLinks = document.querySelectorAll('.nav-link');
console.log("Nav links:", navLinks);

const paragraphs = document.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
console.log("Last paragraph:", lastParagraph);


// MANIPULATING ELEMENTS
h1.textContent = "Welcome to the DOM Manipulation Example!";

contentElements.forEach((el) => {
    el.textContent = "This is the updated content.";
});

lastParagraph.textContent = "This is the second paragraph.";


// EVENTS
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted!');
});

emailInput.addEventListener('input', (event) => {
    console.log('Email input value:', event.target.value);
});

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Nav link clicked:', event.target.textContent);
    });
});