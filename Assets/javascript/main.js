//TODO: use this link to handle text resizing: https://stackoverflow.com/questions/11544811/how-to-make-text-relative-to-background-using-html-css

//initial show home
showHome();

/*//TODO:1 add in portfolio items
const portfolioItems = [
    {
        repoLink: ,
        deployedLink: ,
        description:
        //background?
    },
    
];
*/



//______________________________________- Event Handlers -_______________________________________//
$("body").on("click", ".portfolio-button", function() {
    showPortfolio();
});
$("body").on("click", ".contact-button", function() {
    showContact();
});
$("body").on("click", ".resources-button", function() {
    showResources();
});
$("body").on("click", ".home-button", function() {
    showHome();
    //TODO:no home-button
});
//_______________________________________________________________________________________________________


//_________________________________________- Functions -______________________________________________//
function hideAll() {
    $(".mypage").css("display", "none");
}
function showHome(){
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