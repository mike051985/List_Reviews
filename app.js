// Local reviews Data
const reviews = [{
        id: 1,
        name: "Melissa Robert",
        job: "Web Developer",
        img: "https://i.postimg.cc/7ZZjpVLs/pic4.jpg",
        text: " Responsible for the coding, design and layout of websites according to the company's specifications. As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary. ",
    },
    {
        id: 2,
        name: "Kelly Jones",
        job: "Web Designer",
        img: "https://i.postimg.cc/Gmfg6nVt/pic5.jpg",
        text: "Using creativity and software engineering/programming skills to design, build and improve websites. Understanding user experience and to be able to build websites that are easy to understand, navigate and use, and adhere to design standards and specifications.",
    },
    {
        id: 3,
        name: "Richardson Smith",
        job: "Sales Manager",
        img: "https://i.postimg.cc/jqhgt7mG/pic3.jpg",
        text: "Designing and implementing a strategic sales plan that expands company's customer base and ensure it's strong presence. Managing recruiting, objectives setting, coaching and performance monitoring of sales representatives. ",
    },
    {
        id: 4,
        name: "Paul Adams",
        job: "Chief Oficer",
        img: "https://i.postimg.cc/KcnXLjVN/pic2.jpg",
        text: "Making major corporate decisions, managing the overall operations and resources of the company, acting as the main point of communication between the board of directors (the board) and corporate operations and being the public face of the company.",
    },
];

// Select items

const img = document.getElementById("pic-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//Set starting item
let currentItem = 0;

//Load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

// Show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// Show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// Show random person
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});