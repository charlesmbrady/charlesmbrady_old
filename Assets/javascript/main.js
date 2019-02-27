//TODO: use this link to handle text resizing: https://stackoverflow.com/questions/11544811/how-to-make-text-relative-to-background-using-html-css

//initial show home
showHome();

//portfolio items
const portfolioItems = [
    {
        name: "Hangman",
        repoLink: "https://github.com/charlesmbrady/Word-Guess-Game",
        deployedLink: "http://charlesmbrady.com/Word-Guess-Game/",
        description: "A classic hangman movie-title guessing game with a Disney theme",
        technologies: ["javascript", "html", "css", "bootstrap"],
        type: "project",
        comments: ""
    },
    {
        name: "Star Wars Game",
        repoLink: "https://github.com/charlesmbrady/Star-Wars-Game",
        deployedLink: "http://charlesmbrady.com/Star-Wars-Game/",
        description: "An RPG game with a Star Wars theme",
        technologies: ["javascript", "html", "css", "bootstrap", "jQuery"],
        type: "project",
        comments: ""
    },
    {
        name: "Trivia Game",
        repoLink: "https://github.com/charlesmbrady/TriviaGame",
        deployedLink: "http://charlesmbrady.com/TriviaGame/",
        description: "A trivia game using timers",
        technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "timers"],
        type: "project",
        comments: ""
    },
    {
        name: "GifTastic",
        repoLink: "https://github.com/charlesmbrady/GifTastic",
        deployedLink: "http://charlesmbrady.com/GifTastic/",
        description: "An app that pulls in gifs from the Giphy API",
        technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "API"],
        type: "project",
        comments: ""
    },
    {
        name: "Train Scheduler",
        repoLink: "https://github.com/charlesmbrady/Train_Scheduler",
        deployedLink: "http://charlesmbrady.com/Train_Scheduler/",
        description: "An app that simulates train schedules",
        technologies: ["javascript", "html", "css", "bootstrap", "jQuery", "firebase", "moment.js"],
        type: "project",
        comments: ""
    },
    {
        name: "LIRI Node app",
        repoLink: "https://github.com/charlesmbrady/liri-node-app",
        deployedLink: "#",
        description: "LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.",
        technologies: ["javascript", "node", "API,", "moment.js", "CLI"],
        type: "project",
        comments: ""
    },
    {   //TODO:fill this out
        name: "WhereWatch",
        repoLink: "https://github.com/charlesmbrady/Project-1",
        deployedLink: "http://charlesmbrady.com/Project-1/",
        description: "app for finding what streaming services your favorite tv shows and movies are on",
        technologies: [],
        type: "project",
        comments: ""
    }

];

portfolioItems.forEach( function (item) {
  //TODO:make clicking the title bring a modal down
   var itemCard = $("<div>").addClass("itemCard");
    var title = $("<div>").addClass("itemTitle").text(`${item.name}`);
    var description = $("<div>").addClass("itemDescription").text(`${item.description}`);
    var repo = $("<div>").addClass("itemLink").html(`<a href=${item.repoLink} class="repoLink">Repo</a>`);
    var deployed = $("<div>").addClass("itemLink").html(`<a href=${item.deployedLink} class="deployedLink">Deployed</a>`);

    itemCard.append(title,description,repo,deployed);

//append to appropriate section based on type
    if(item.type == "project"){
        $("#project-items").append(itemCard);
    }
   
});


//______________________________________- Event Handlers -_______________________________________//
$("body").on("click", ".portfolioButton", function () {
    showPortfolio();
});
$("body").on("click", ".contactButton", function () {
    showContact();
});
$("body").on("click", ".resourcesButton", function () {
    showResources();
});
$("body").on("click", ".homeIcon", function () {
    showHome();
});

//_______________________________________________________________________________________________________


//_________________________________________- Functions -______________________________________________//
function hideAll() {
    $(".mypage").css("display", "none");
}
//TODO: GENERAL: make a delay so these appear to fade in and out
function showHome() {
    hideAll();
    $(".home").css("display", "block");
}
function showPortfolio() {
    hideAll();
    $(".portfolio").css('display', 'block');
    //TODO:
}
function showContact() {
    hideAll();
    $(".contact").css('display', 'block');
}
function showResources() {
    hideAll();
    $(".resources").css('display', 'block');
}

function showPortfolioItems() {
    //TODO: make this take in array of objects for portfolio items and assemble them dynamically
}