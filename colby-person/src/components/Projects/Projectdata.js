// projectsData.js
const Projectsdata = [
    {
        id: 1,
        title: "9 COMMERCE",
        description: "This is an ecommerce website developed for a software engineering project course. We used MongoDB as our backend database, firebase for deployment and authorization, and React as our framework. Our team built a fully function page where a user can create an account, browse, and purchase items. We also have a admin dashboard that only the admin of the page may view",
        class: "Software Engineering Project 4398",
        members: 3,
        images: [
            '/images/9commerce/9commercehome.png',
            '/images/9commerce/9commerceshop.png',
            '/images/9commerce/9commercelogin.png'

        ],
        codeLink: "https://github.com/LetsGetRemixed/9-Commerce",
        websiteurl: "https://commerce-app-tan.vercel.app"
    },
    {
        id: 2,
        title: "Poke-Scan",
        description: "This project uses a vision trainer model to accurately detect pokemon cards so a user can add or remove them from their collection.",
        class: "Intro To Computer Vision 4337 ",
        members: 2,
        images: [
            '/images/pokescan/pokescan1.jpg',
            '/images/pokescan/pokescan2.png',
            '/images/pokescan/pokescan3.jpg',
            '/images/pokescan/pokescan4.png',
            '/images/pokescan/pokescan5.png',
        ],
        codeLink: "https://github.com/LetsGetRemixed/Poke-Scan"
    },
    {
        id: 3,
        title: "Jumble Pack",
        description: "A Local multiplayer application that features multiples games. Includes a unique pong game with powerups, a block-runner game, and classic tic-tac-toe",
        class: "Software Engineering 3398",
        members: 4,
        images: [
            '/images/jumblepack/jumbleMenu.png',
            '/images/jumblepack/jumblePong.png',
            '/images/jumblepack/jumbleDash.png',
            '/images/jumblepack/jumbleToe.png',
        ],
        codeLink: "https://bitbucket.org/cs3398f22vulcans/jumblepack/src/master/"
    }
];

export default Projectsdata;
