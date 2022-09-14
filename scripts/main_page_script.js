// Variables
const homeNavButton = document.getElementById("home-nav-btn");
const profileNavButton = document.getElementById("profile-nav-btn");

const homeTitle = document.getElementById("home-title");
const profileTitle = document.getElementById("profile-title");

const tweetWriting = document.getElementById("tweet-writing");
const feeds = document.getElementById("feeds");
const profile = document.getElementById("profile");

// Event listeners
profileNavButton.addEventListener("click", openProfilePage);
homeNavButton.addEventListener("click", openHomePage);

// Functions
function openProfilePage() {
    changeNavBtnsStyle("profile");
    changePageTitle("profile");
    changePage("profile");
}

function openHomePage() {
    changeNavBtnsStyle("home");
    changePageTitle("home");
    changePage("home");
}

function changeNavBtnsStyle(page) {
    if (page == "profile") {
        homeNavButton.classList.remove("nav-btn-active");
        profileNavButton.classList.add("nav-btn-active");
    } else {
        homeNavButton.classList.add("nav-btn-active");
        profileNavButton.classList.remove("nav-btn-active");
    }

}

function changePageTitle(page) {
    if (page == "profile") {
        homeTitle.classList.add("hide");
        profileTitle.classList.remove("hide");
    } else {
        homeTitle.classList.remove("hide");
        profileTitle.classList.add("hide");
    }
}

function changePage(page) {
    if (page == "profile") {
        profile.classList.remove("hide");
        feeds.classList.add("hide");
        tweetWriting.classList.add("hide");
    } else {
        profile.classList.add("hide");
        feeds.classList.remove("hide");
        tweetWriting.classList.remove("hide");
    }
}