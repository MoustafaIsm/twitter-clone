// Variables
const homeNavBtn = document.getElementById("home-nav-btn");
const profileNavBtn = document.getElementById("profile-nav-btn");
const backBtn = document.getElementById("back-btn");
const editProfileBtn = document.getElementById("edit-profile-btn");

const homeTitle = document.getElementById("home-title");
const profileTitle = document.getElementById("profile-title");

const tweetWriting = document.getElementById("tweet-writing");
const feeds = document.getElementById("feeds");
const profile = document.getElementById("profile");

// Modal related stuff
const editProfileModal = document.getElementById("edit-profile-modal");
if (typeof editProfileModal.showModal !== "function") {
    favDialog.hidden = true;
}

// Event listeners
profileNavBtn.addEventListener("click", openProfilePage);
homeNavBtn.addEventListener("click", openHomePage);
backBtn.addEventListener("click", openHomePage);
editProfileBtn.addEventListener("click", openEditProfileModal);

/** Functions **/

// Eventlisteners function
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

function openEditProfileModal() {
    if (typeof editProfileModal.showModal === "function") {
        editProfileModal.showModal();
    }

}


// Other functions
function changeNavBtnsStyle(page) {
    if (page == "profile") {
        homeNavBtn.classList.remove("nav-btn-active");
        profileNavBtn.classList.add("nav-btn-active");
    } else {
        homeNavBtn.classList.add("nav-btn-active");
        profileNavBtn.classList.remove("nav-btn-active");
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