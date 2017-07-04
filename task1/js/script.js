var dropDown = document.getElementsByClassName('wrapper-dropdown')[0];
var dropElements = dropDown.getElementsByTagName('a');

function toggleDropDown(event) {
    dropDown.classList.toggle('active');
    event.stopPropagation();
}

dropDown.onclick = toggleDropDown;

for (let i = 0; i < dropElements.length; i++) {
    dropElements[i].onclick = toggleDropDown;
}
