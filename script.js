// alert("Blah blah")
const navigation =`
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact Us</li>
</ul>`
const nav = document.createElement("nav");
nav.innerHTML = navigation;
document.querySelector("header").appens(nav);

