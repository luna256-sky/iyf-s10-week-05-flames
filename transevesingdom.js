const header = document.querySelector('header');
const nav = document.querySelector('nav');
console.log("Nav element:", nav);

const firstNavLink = nav.querySelector('.nav-link');
const parentLi = firstNavLink.parentElement;
console.log("Parent <li> of first nav link:", parentLi);

const articles = document.querySelectorAll('article');
const nextSibling = articles[0].nextElementSibling;
console.log("Next sibling of first article:", nextSibling);

const ul = document.querySelector('ul');
const listItems = ul.querySelectorAll('li');
console.log("All list items in the unordered list:", listItems);

const footer = document.querySelector('footer');  
console.log("Parent element of footer (should be body):", footer.parentElement);

// ------------------------
// Manipulate content safely
// ------------------------
header.querySelector('h1').textContent = "Main Header";

firstNavLink.textContent = "Home";
// Optional: clear parentLi text if you want to avoid duplicate
// parentLi.textContent = ""; 

articles[0].textContent = "Article content";
nextSibling.textContent = "Second Article";

// Update list items
listItems.forEach((li, index) => {
    li.textContent = `List Item ${index + 1}`;
});
listItems[0].textContent = "First Item";
listItems[1].textContent = "Second Item";
listItems[2].textContent = "Third Item";  

footer.innerHTML = "&copy; 2026";