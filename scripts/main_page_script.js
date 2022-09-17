// Temporary items before merging with the signin-signup branch
localStorage.setItem("userId", 2);
localStorage.setItem("username", "moustafaism123");
localStorage.setItem("email", "moustafa@gmail.com");
localStorage.setItem("name", "moustafaIsmail013");
localStorage.setItem("password", 12341234);
localStorage.setItem("date_of_birth", "2001-01-01");
localStorage.setItem("date_of_registration", "2022-02-03");
localStorage.setItem("bio", "lebanese student");
localStorage.setItem("location", "lebanon");
localStorage.setItem("profile_picture_link", "http://localhost/SEF/twitter-clone-data/images/profile/2/6325962684131.jpeg");
localStorage.setItem("banner_picture_link", "http://localhost/SEF/twitter-clone-data/images/profile/2/6325962684131.jpeg");
localStorage.setItem("website", "NA");
// Variables
const homeNavBtn = document.getElementById("home-nav-btn");
const profileNavBtn = document.getElementById("profile-nav-btn");
const backBtn = document.getElementById("back-btn");
const editProfileBtn = document.getElementById("edit-profile-btn");
const closeModalBtn = document.getElementById("close-modal");
const moreBtn = document.getElementById("more-btn");
const logoutWrapper = document.getElementById("logout-wrapper");

const homeTitle = document.getElementById("home-title");
const profileTitle = document.getElementById("profile-title");

const tweetWriting = document.getElementById("tweet-writing");
const feeds = document.getElementById("feeds");
const profile = document.getElementById("profile");
const followingFollowers = document.getElementById("following-followers");

const following = document.getElementById("following");
const followingTabBtn = document.getElementById("following-tab-btn");
const followingTab = document.getElementById("following-tab");

const followers = document.getElementById("followers");
const followersTab = document.getElementById("followers-tab");
const followersTabBtn = document.getElementById("followers-tab-btn");

// Modal related stuff
const editProfileModal = document.getElementById("edit-profile-modal");
if (typeof editProfileModal.showModal !== "function") {
    favDialog.hidden = true;
}

// Stuff to do on page load
window.onload = () => {
    setupMiniProfile();
};

// Event listeners
profileNavBtn.addEventListener("click", openProfilePage);
homeNavBtn.addEventListener("click", openHomePage);
backBtn.addEventListener("click", openHomePage);

moreBtn.addEventListener("click", openLogoutWrapper);

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
    addUserInfo();
}

function openHomePage() {
    changeNavBtnsStyle("home");
    changePageTitle("home");
    changePage("home");
}

function openLogoutWrapper() {
    logoutWrapper.classList.toggle("hide");
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

// Helper functions
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

function setupMiniProfile() {
    const miniProfiles = document.getElementsByClassName("mini-user-info");
    const writeTweetProfile = document.getElementById("write-tweet-profile-img");
    for (const prof of miniProfiles) {
        prof.innerHTML = `
        <div class="small-round-profile-picture">
            <img src="${localStorage.getItem("profile_picture_link")}" alt="profile-picture">
        </div>
        <div>
            <p class="bold-text"> ${localStorage.getItem("name")} </p>
            <p class="grey-text"> @${localStorage.getItem("username")}  </p>
        </div>`;
    }
    writeTweetProfile.innerHTML = `<img src="${localStorage.getItem("profile_picture_link")}" alt="profile-picture">`;
}

function addUserInfo() {
    addUserBanner();
    addUserProfilePicture();
    addUserDetails();
}

function addUserDetails() {
    document.getElementById("user-name-display").textContent = localStorage.getItem("name");
    document.getElementById("username-display").textContent = "@" + localStorage.getItem("username");
    document.getElementById("user-joined-date").innerHTML = `<span class="material-symbols-outlined">calendar_month</span>${localStorage.getItem("date_of_registration")}`;
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_followers.php?userId=" + localStorage.getItem("userId"))
        .then((response) => response.json())
        .then((data) => followers.textContent = data.count + " Followers");
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_following.php?userId=" + localStorage.getItem("userId"))
        .then((response) => response.json())
        .then((data) => following.textContent = data.count + " Following");
}

function addUserProfilePicture() {
    const profilePicture = document.getElementsByClassName("profile-picture");
    for (const pic of profilePicture) {
        pic.innerHTML = `<img src="${localStorage.getItem("profile_picture_link")}" alt="profile-picture">`;
    }
}

function addUserBanner() {
    if (localStorage.getItem("banner_picture_link") != "NA") {
        const profileBanner = document.getElementsByClassName("profile-banner");
        for (const banner of profileBanner) {
            banner.style.backgroundImage = `url(${localStorage.getItem("banner_picture_link")})`
        }
    }
}