const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
  
 // Alert Button
document.getElementById('alertMe').addEventListener('click', function() {
    alert('Hello! Welcome to Netflix');
});

// Hover Button
document.getElementById('hoverButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#28a745';
});

document.getElementById('hoverButton').addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#007bff';
});

// Incrementing Button
let count = 0;
document.getElementById('buttonCounter').addEventListener('click', function() {
    count++;
    document.getElementById('counter').innerHTML = 'Counter: ' + count;
});

// If-Else
document.getElementById('buttonCounter').addEventListener('click', function() {
    if (count % 2 === 0) {
        this.style.color = 'red'; // Change text color to red if count is even
    } else {
        this.style.color = 'blue'; // Change text color to blue if count is odd
    }
});
for (let i = 0; i < 5; i++) {
    console.log("hii!");
}
