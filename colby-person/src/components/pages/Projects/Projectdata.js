// projectsData.js
const Projectsdata = [
    {
        id: "8",
        title: "CJP Web",
        description: "My company web development website showcasing professional web development services and portfolio.",
        type: "Business Endeavor",
        members: 1,
        showcaseImage1: '/images/Cjpweb/cjpweb.png',
        showcaseImage2: '/images/Cjpweb/cjpweb2.png',
        images: [
            '/images/Cjpweb/cjpweb.png',
            '/images/Cjpweb/cjpweb2.png',
            '/images/Cjpweb/cjpweb3.png',
            '/images/Cjpweb/cjpweb4.png',
        ],
        websiteurl: "https://cjpweb.com",
        features: [
            "Contact Form: Integrated contact form with EmailJS for seamless client communication.",
            "Security: CAPTCHA integration to prevent spam and ensure secure form submissions.",
            "Portfolio Showcase: Display of web development projects and services offered.",
            "Firebase Integration: Backend services powered by Firebase for reliable data management."
        ],
        technologies: ["JavaScript", "Firebase", "CAPTCHA", "EmailJS"]
    },
    {
        id: "5",
        title: "Best Brew Essentials",
        description: "An educational commerce website that allows users to learn about brewing coffee, and finding the best projects.",
        type: "Business Endeavor",
        members: 2,
        showcaseImage1: '/images/BestBrewEssentials/bestbrewessentials.png',
        showcaseImage2: '/images/BestBrewEssentials/bestbrewessentials2.png',
        images: [
            '/images/BestBrewEssentials/bestbrewessentials.png',
            '/images/BestBrewEssentials/bestbrewessentials2.png',
        ],
        websiteurl: "https://bestbrewessentials.com",
        features: [
            "Educational Content: Provides educational content about brewing coffee, and finding the best projects.",
            "Product Recommendations: Recommends products for brewing coffee, and finding the best projects.",
            "Community: A community of coffee enthusiasts to share their experiences and tips.",
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "Amazon Product API", "Firebase"]
    },
    {
        id: "6",
        title: "CJP Web Studio",
        description: "My company studio site created for multiple experiences and coding exercises. Features interactive applications including Tetris, GitHub profile stat viewer, and other personal management applications.",
        type: "Personal Project",
        members: 1,
        showcaseImage1: '/images/cjpstudio/cjpstudio1.png',
        showcaseImage2: '/images/cjpstudio/cjpstudio2.png',
        images: [
            '/images/cjpstudio/cjpstudio1.png',
            '/images/cjpstudio/cjpstudio2.png',
            '/images/cjpstudio/cjpstudio3.png',
        ],
        websiteurl: "https://cjpwebstudio.com",
        features: [
            "Tetris Game: A fully functional Tetris game with classic gameplay mechanics.",
            "GitHub Profile Stat Viewer: View and analyze GitHub profile statistics and contributions.",
            "Personal Management Applications: Various tools and applications for personal productivity and management.",
            "Multiple Coding Exercises: A collection of coding exercises and interactive experiences showcasing different programming concepts."
        ],
        technologies: ["React", "Typescript", "Tailwind CSS", "HTML", "Supabase"]
    },
    {
        id: "7",
        title: "Bold Hair Co",
        description: "An ecommerce hair extension site built for stylists with license authorization, subscriptions, Google Maps API for stylist finder, and a deep in-depth admin dashboard with over 50 features and over 20 pages.",
        type: "Business Endeavor",
        members: 1,
        showcaseImage1: '/images/boldhairco/bold1.png',
        showcaseImage2: '/images/boldhairco/bold2.png',
        images: [
            '/images/boldhairco/bold1.png',
            '/images/boldhairco/bold2.png',
            '/images/boldhairco/bold3.png',
        ],
        websiteurl: "https://boldhairco.com",
        features: [
            "License Authorization: Secure license verification system for stylists to verify their credentials.",
            "Subscription Management: Comprehensive subscription system for stylists with different membership tiers.",
            "Stylist Finder: Google Maps API integration allowing customers to find stylists in their area.",
            "Admin Dashboard: Deep in-depth admin dashboard with over 50 features and over 20 pages for complete site management.",
            "Ecommerce Platform: Full-featured ecommerce system for hair extensions with shopping cart, checkout, and order management."
        ],
        technologies: ["JavaScript", "Express", "MongoDB", "Firebase"]
    },
    {
        id: "9",
        title: "Bold Moves Media & Marketing",
        description: "A media and marketing agency website designed for lead captures, showcasing brand strategy, content production, social media services, and paid advertising campaigns.",
        type: "Business Endeavor",
        members: 1,
        showcaseImage1: '/images/boldmedia/boldmedia1.png',
        showcaseImage2: '/images/boldmedia/boldmedia2.png',
        images: [
            '/images/boldmedia/boldmedia1.png',
            '/images/boldmedia/boldmedia2.png',
            '/images/boldmedia/boldmedia3.png',
            '/images/boldmedia/boldmedia4.png',
        ],
        websiteurl: "https://boldmovesinc.com",
        features: [
            "Lead Capture System: Comprehensive lead capture forms and contact systems to convert visitors into clients.",
            "Service Showcase: Display of media and marketing services including brand strategy, content production, and social media management.",
            "Portfolio Display: Showcase of video production, brand films, and creative campaigns.",
            "Contact & Quote Forms: Integrated forms for client inquiries and quote requests with Firebase backend."
        ],
        technologies: ["TypeScript", "Firebase"]
    },
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
