// Variables
const homeNavBtn = document.getElementById("home-nav-btn");
const profileNavBtn = document.getElementById("profile-nav-btn");
const backBtn = document.getElementById("back-btn");
const editProfileBtn = document.getElementById("edit-profile-btn");
const closeModalBtn = document.getElementById("close-modal");

const homeTitle = document.getElementById("home-title");
const profileTitle = document.getElementById("profile-title");

const tweetWriting = document.getElementById("tweet-writing");
const feeds = document.getElementById("feeds");
const profile = document.getElementById("profile");
const followingFollowers = document.getElementById("following-followers")

const following = document.getElementById("following");
const followingTabBtn = document.getElementById("following-tab-btn")
const followingTab = document.getElementById("following-tab");

const followers = document.getElementById("followers");
const followersTab = document.getElementById("followers-tab");
const followersTabBtn = document.getElementById("followers-tab-btn");

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

closeModalBtn.addEventListener("click", closeModal);

following.addEventListener("click", openFollowingTab);
followingTabBtn.addEventListener("click", openFollowingTab)
followers.addEventListener("click", openFollowersTab);
followersTabBtn.addEventListener("click", openFollowersTab);

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

function openFollowingTab() {
    changePage("following");
}

function openFollowersTab() {
    changePage("followers");
}

function openEditProfileModal() {
    if (typeof editProfileModal.showModal === "function") {
        editProfileModal.showModal();
    }

}

function closeModal() {
    editProfileModal.close();
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
        followingFollowers.classList.add("hide");
    } else if (page == "home") {
        profile.classList.add("hide");
        feeds.classList.remove("hide");
        tweetWriting.classList.remove("hide");
        followingFollowers.classList.add("hide");
    } else if (page == "following") {
        profile.classList.add("hide");
        feeds.classList.add("hide");
        tweetWriting.classList.add("hide");
        followingFollowers.classList.remove("hide");
        followingTab.classList.remove("hide");
        followersTab.classList.add("hide");
        followingTabBtn.classList.add("active-tab");
        followersTabBtn.classList.remove("active-tab");
    } else {
        profile.classList.add("hide");
        feeds.classList.add("hide");
        tweetWriting.classList.add("hide");
        followingFollowers.classList.remove("hide");
        followingTab.classList.add("hide");
        followersTab.classList.remove("hide");
        followingTabBtn.classList.remove("active-tab");
        followersTabBtn.classList.add("active-tab");
    }
}