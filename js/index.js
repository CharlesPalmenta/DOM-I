const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const links = document.getElementsByTagName('a');
// console.log(links)

const linksArray = Array.from(links);
// console.log(linksArray)
linksArray[0].textContent = 'Services';
linksArray[1].textContent = 'Product';
linksArray[2].textContent = 'Vision';
linksArray[3].textContent = 'Features';
linksArray[4].textContent = 'About';
linksArray[5].textContent = 'Contact';
linksArray.forEach(element => {
  element.style.color = 'green';
})
const newLink = document.createElement('a');
newLink.textContent = "Twitter";
const linkElement = document.querySelector('nav');
linkElement.prepend(newLink);
newLink.style.color = 'green';

const secondNewLink = document.createElement('a');
secondNewLink.textContent = 'Github';
linkElement.appendChild(secondNewLink);
secondNewLink.style.color = 'green';


const headerDOM = document.querySelector('h1');
// console.log(headerDOM)
headerDOM.textContent = "DOM Is Awesome";
const button = document.querySelector('button');
button.textContent = "Get Started";

const topSection = document.querySelectorAll('.top-content');
console.log(topSection);


const h4topSection = document.getElementsByTagName('h4');
// console.log(h4topSection);
const h4Array = Array.from(h4topSection);
 console.log(h4Array);
h4Array[0].textContent = 'Features';
h4Array[1].textContent = 'About';
h4Array[2].textContent = 'Services';
h4Array[3].textContent = 'Product';
h4Array[4].textContent = 'Vision';
h4Array[5].textContent = siteContent['contact']['contact-h4'];
const paragraph = document.getElementsByTagName('p');
// console.log(paragraph)
const eachParagraph = Array.from(paragraph);
// console.log(eachParagraph)
eachParagraph[0].textContent = siteContent['main-content']['features-content'];
eachParagraph[1].textContent = siteContent['main-content']['about-content'];
eachParagraph[2].textContent = siteContent['main-content']['services-content'];
eachParagraph[3].textContent = siteContent['main-content']['product-content'];
eachParagraph[4].textContent = siteContent['main-content']['vision-content'];
eachParagraph[5].textContent = siteContent['contact']['address'];
eachParagraph[6].textContent = siteContent['contact']['phone'];
eachParagraph[7].textContent = siteContent['contact']['email'];
eachParagraph[8].textContent = siteContent['footer']['copyright'];






const footer = document.querySelectorAll('.contact');
// console.log(footer)

