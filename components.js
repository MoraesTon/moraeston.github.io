const header = document.createElement("header");
const footer = document.createElement("footer");
const headerContent = `
<h1>Ton Moraes</h1>
<nav>
    <a href="index.html">Home</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
`;

const footerContent = `
<div class="slideItem">
<div class="slideItem__image"><img src="images/js.svg" alt="Javascript Logo"></div>
<div class="slideItem__text">Pure Vanilla</div>
</div>

<div class="slideItem">
<div class="slideItem__image"><img src="images/css3-alt.svg" alt="Javascript Logo"></div>
<div class="slideItem__text">With Pre-processors</div>
</div>

<div class="slideItem">
<div class="slideItem__image"><img src="images/html5.svg" alt="Javascript Logo"></div>
<div class="slideItem__text">So Semantic</div>
</div>

<div id="register">
&reg; All rights reserved.
</div>
`;
header.innerHTML = headerContent;
footer.innerHTML = footerContent;
document.querySelector("body").prepend(header);
document.querySelector("body").appendChild(footer);
