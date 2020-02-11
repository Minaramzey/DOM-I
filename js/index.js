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


//Nav
const nav = document.querySelectorAll("nav a");

nav.forEach(element => element.style.color = "green");

nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];


//New Elements for Nav
const newNav = document.querySelector("nav");
const newElement1 = document.createElement('a');
newElement1.textContent = "Home";
newElement1.style.color = "green";

const newElement2 = document.createElement('a');
newElement2.textContent = "Team";
newElement2.style.color = "green";

// Prepend and Append 
newNav.prepend(newElement1);
newNav.appendChild(newElement2);



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//header content
let mainTitle = document.querySelector(".cta .cta-text h1");
mainTitle.innerHTML="DOM <br> IS <br> AWESOME"; 
document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];

let headerLogo = document.getElementById("cta-img");
headerLogo.setAttribute('src', siteContent["cta"]["img-src"])

//top content

const sectionHeaders = document.querySelectorAll(".main-content h4");
sectionHeaders[0].textContent = siteContent["main-content"]["features-h4"]
sectionHeaders[1].textContent = siteContent["main-content"]["about-h4"]
sectionHeaders[2].textContent = siteContent["main-content"]["services-h4"]
sectionHeaders[3].textContent = siteContent["main-content"]["product-h4"]
sectionHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

const sectionContent = document.querySelectorAll(".main-content p");
sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];

//middle img for main-content
let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Contact 
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = siteContent.contact["address"];
contactContent[1].textContent = siteContent.contact["phone"];
contactContent[2].textContent = siteContent.contact["email"];

//footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer["copyright"]; 





