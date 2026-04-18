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

// ✅ FIX: only select content paragraphs (not ALL <p>)
const lastParagraph = contentElements[contentElements.length - 1];
console.log("Last content paragraph:", lastParagraph);


// MANIPULATING ELEMENTS
h1.textContent = "Welcome to the DOM Manipulation Example!";

// ✅ FIX: now updates the correct paragraph
lastParagraph.textContent = "Lightning is actually much hotter than the sun.";


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