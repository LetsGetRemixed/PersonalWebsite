// projectsData.js
const Projectsdata = [
    {
        id: "1",
        title: "9 COMMERCE",
        description: "An ecommerce website designed for users to create an account, shop through items, securely checkout, and includes an admin dashboard for inventory and order management.",
        type: "Class Project",
        class: "Software Engineering Project 4398",
        members: 3,
        showcaseImage1: '/images/9commerce/9commercehome.png',
        showcaseImage2: '/images/9commerce/9commerceshop.png',
        images: [
            '/images/9commerce/9commercehome.png',
            '/images/9commerce/9commerceshop.png',
            '/images/9commerce/9commercelogin.png',
            '/images/9commerce/9commerceitems.png',

        ],
        codeLink: "https://github.com/LetsGetRemixed/9-Commerce",
        websiteurl: "https://commerce-app-tan.vercel.app",
        features: [
            "Item Inventory Database: A wide range of products kept through MondoDB database for customers to browse, sort, and shop.",
            "Account Authorization: Secure registration, and login for customers to create an account and shop.",
            "Admin Dashboard: An admin dashboard for inventory and order management.",
            "Secure Checkout: A secure checkout feature where customers can securely checkout and place their order."
          ],
          technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Vercel", "Firebase"]
    },
    {
        id: "2",
        title: "Poke-Scan",
        description: "This project uses a vision trainer model to accurately detect pokemon cards so a user can add or remove them from their collection.",
        type: "Class Project",
        class: "Intro To Computer Vision 4337 ",
        members: 2,
        showcaseImage1: '/images/pokescan/pokescan4.png',
        showcaseImage2: '/images/pokescan/pokescan3.jpg',
        images: [
            '/images/pokescan/pokescan1.jpg',
            '/images/pokescan/pokescan2.png',
            '/images/pokescan/pokescan3.jpg',
            '/images/pokescan/pokescan4.png',
            '/images/pokescan/pokescan5.png',
        ],
        codeLink: "https://github.com/LetsGetRemixed/Poke-Scan",
        features: [
            "Scan Pokemon Cards: This project uses a vision trainer model to accurately detect pokemon cards so a user can add or remove them from their collection.",
            "Training Data: A dataset of pokemon cards is used to train the vision trainer model.",
            
          ],
          technologies: ["Python", "OpenCV", "Tensorflow"]
    },
    {
        id: "3",
        title: "Jumble Pack",
        description: "A Local multiplayer application that features multiples games. Includes a unique pong game with powerups, a block-runner game, and classic tic-tac-toe",
        type: "Class Project",
        class: "Software Engineering 3398",
        members: 4,
        showcaseImage1: '/images/jumblepack/jumbleMenu.png',
        showcaseImage2: '/images/jumblepack/jumblePong.png',
        images: [
            '/images/jumblepack/jumbleMenu.png',
            '/images/jumblepack/jumblePong.png',
            '/images/jumblepack/jumbleDash.png',
            '/images/jumblepack/jumbleToe.png',
        ],
        codeLink: "https://bitbucket.org/cs3398f22vulcans/jumblepack/src/master/",
        features: [
            "General Game: A local multiplayer application that features multiples games. Includes a unique pong game with powerups, a block-runner game, and classic tic-tac-toe",
            "Unity Engine: Game created in Unity Engine.",
          ],
          technologies: ["C#", "Unity", "Jira"]
    },
    {
        id: "4",
        title: "MindMi",
        description: "MindMi is a reminder, scheduling, and mindfulness app. It was created for high-stress users (like college students or business men and women) to help relax, plan, and help users with maintaining their mental health.",
        type: "Class Project",
        class: "Human Factors 4326",
        members: 4,
        showcaseImage1: '/images/mindmi/mindmicalendar.png',
        showcaseImage2: '/images/mindmi/mindmijournal.png',
        images: [
            '/images/mindmi/mindmicalendar.png',
            '/images/mindmi/mindmijournal.png',
            '/images/mindmi/mindmireminder.png',
        ],
        codeLink: "https://github.com/LetsGetRemixed/MindMi",
        features: [
            "Calendar: A calendar that allows users to add and remove events.",
            "Journal: A journal that allows users to write and save notes. Finds the mood of the user based on the notes.",
            "Reminder: A reminder that allows users to set and view reminders."
            
          ],
          technologies: ["Java", "Gradle"]
    },
    {
        id: "30",
        title: "Colby's Meme Generator",
        description: "An app that allows users to upload images and generate memes, along with an api for calling the meme generator.",
        type: "Personal Project",
        class: "",
        members: 2,
        showcaseImage1: '/images/MemeGenerator/memegenerator.png',
        showcaseImage2: '/images/MemeGenerator/memegen2.png',
        images: [
            '/images/MemeGenerator/memegenerator.png',
            '/images/MemeGenerator/memegen2.png',
            
        ],
        codeLink: "https://github.com/LetsGetRemixed/TaxWebsite",
        websiteurl: "https://meme-generator-15198.web.app",
        features: [
            "Meme editor: Allows users to upload memes, and edit text over them for download.",
            "API integration: Uses an api url call to automatically present the meme with text when the user types in the link somewhere with correct call.",
            "Imgur API integration: Allows images to be uploaded to imgur for the api integration."
          ],
          technologies: ["React", "Express", "Node.js", "Firebase", "Imgur API"]
        
    }
];

export default Projectsdata;
