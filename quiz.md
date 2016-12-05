# Quiz

1. What does DOM stand for?
Document Object Model

2. What is the name of the object we can use to get information about the browser enviroment?
window ?

3. What is the name of the object that we can use to get access to the DOM representation of the page?
document

4. What type of files might we see in the Network tab for in Chrome devTools?
image files, stylesheets, js files

5. What version of HTML is document.querySelector from?
HTML5

6. Which event do we hook into when we want to know the DOM has loaded, window.onload or document.onload?
window.onload

7. We use window.createElement to make new DOM elements, true or false?
false - use document.createElement

8. List two ways to get all the elements by class 'cat'
var allCatElements = document.getElementsByClassName('cat');
var allCatElements = document.querySelectorAll('.cat');

9. List two ways to retrieve the element with id "goat"
var goatElement = document.getElementById('goat');
var goatElement = document.querySelector('#goat');

10. List two ways to get all the li elements
var liTags = document.getElementsByTagName('li');
var liTagsAlt = document.querySelector('li');

11. List two ways to get the first li element
liTags[0];
liTagsAlt[0];

12. How can we set the a given element to be hidden?
var pretendElement = document.getElementById('pretend-element');
pretendElement.style.display = 'none';






