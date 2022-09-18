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
const searchNavBtn = document.getElementById("search-nav-btn");

const homeTitle = document.getElementById("home-title");
const profileTitle = document.getElementById("profile-title");

const tweetWriting = document.getElementById("tweet-writing");
const feeds = document.getElementById("feeds");
const profile = document.getElementById("profile");
const followingFollowers = document.getElementById("following-followers");
const searchPage = document.getElementById("search-page");

const following = document.getElementById("following");
const followingTabBtn = document.getElementById("following-tab-btn");
const followingTab = document.getElementById("following-tab");

const followers = document.getElementById("followers");
const followersTab = document.getElementById("followers-tab");
const followersTabBtn = document.getElementById("followers-tab-btn");

const personalTweets = document.getElementById("personal-tweets");
const personalTweetsTab = document.getElementById("personal-tweets-tab");

const personalMedia = document.getElementById("personal-media");
const personalMediaTab = document.getElementById("personal-media-tab");

const personalLikes = document.getElementById("personal-likes");
const personalLikesTab = document.getElementById("personal-likes-tab");

const uploadTweetBtn = document.getElementById("upload-tweet");
const tweetTextArea = document.getElementById("tweet-text");
const tweetError = document.getElementById("tweet-error");
const tweetUploadedImage = document.getElementById("tweet-image");

const saveBtn = document.getElementById("save-btn");
const nameInput = document.getElementById("name-input");
const bioInput = document.getElementById("bio-input");
const locationInput = document.getElementById("location-input");
const websiteInput = document.getElementById("website-input");
const profileImageInput = document.getElementById("profile-image");
const bannerImageInput = document.getElementById("banner-image");
const personalDateOfBirth = document.getElementById("personal-date-of-birth");

const logoutBtn = document.getElementById("logout-btn");

const viewBlockedBtn = document.getElementById("view-blocked-btn");
const blockedUsersContainer = document.getElementById("blocked-users-container");
const blockedUsers = document.getElementById("blocked-users");

const otherUserProfile = document.getElementById("other-user-profile");
const otherUserBanner = document.getElementById("other-user-banner");
const otherUserPicture = document.getElementById("other-user-picture");
const otherUserDetails = document.getElementById("other-user-details");
const otherTweetsTab = document.getElementById("other-tweets-tab");
const otherMediaTab = document.getElementById("other-media-tab");
const otherLikesTab = document.getElementById("other-likes-tab");
const otherTweet = document.getElementById("other-tweet");
const otherMedia = document.getElementById("other-media");
const otherLikes = document.getElementById("other-likes");

const search = document.getElementById("search");
const searchResult = document.getElementById("search-result");

const searchInPage = document.getElementById("search-inpage");
const searchResultInpage = document.getElementById("search-result-page");

// Modal related stuff
const editProfileModal = document.getElementById("edit-profile-modal");
if (typeof editProfileModal.showModal !== "function") {
    favDialog.hidden = true;
}

// Stuff to do on page load
window.onload = () => {
    setupMiniProfile();
    populateFeeds(localStorage.getItem("userId"));
};

// Event listeners
profileNavBtn.addEventListener("click", openProfilePage);
homeNavBtn.addEventListener("click", openHomePage);
backBtn.addEventListener("click", openHomePage);
searchNavBtn.addEventListener("click", openSearchPage);

moreBtn.addEventListener("click", openLogoutWrapper);

editProfileBtn.addEventListener("click", openEditProfileModal);

closeModalBtn.addEventListener("click", closeModal);

following.addEventListener("click", openFollowingTab);
followingTabBtn.addEventListener("click", openFollowingTab);

followers.addEventListener("click", openFollowersTab);
followersTabBtn.addEventListener("click", openFollowersTab);

personalTweetsTab.addEventListener("click", openPersonalTweetsTab);
personalMediaTab.addEventListener("click", openPersonalMediaTab);
personalLikesTab.addEventListener("click", openPersonalLikesTab);

uploadTweetBtn.addEventListener("click", uploadTweet);

saveBtn.addEventListener("click", updateUserInfo);

logoutBtn.addEventListener("click", logoutUser);

viewBlockedBtn.addEventListener("click", showBlockedUsersConstainer);

otherTweetsTab.addEventListener("click", () => {
    otherTweet.classList.remove("hide");
    otherTweetsTab.classList.add("active-tab");

    otherMedia.classList.add("hide");
    otherMediaTab.classList.remove("active-tab");

    otherLikes.classList.add("hide");
    otherLikesTab.classList.remove("active-tab");
});

otherMediaTab.addEventListener("click", () => {
    otherTweet.classList.add("hide");
    otherTweetsTab.classList.remove("active-tab");

    otherMedia.classList.remove("hide");
    otherMediaTab.classList.add("active-tab");

    otherLikes.classList.add("hide");
    otherLikesTab.classList.remove("active-tab");
});

otherLikesTab.addEventListener("click", () => {
    otherTweet.classList.add("hide");
    otherTweetsTab.classList.remove("active-tab");

    otherMedia.classList.add("hide");
    otherMediaTab.classList.remove("active-tab");

    otherLikes.classList.remove("hide");
    otherLikesTab.classList.add("active-tab");
});

search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchResult.innerHTML = "";
        searchUsers(search, searchResult);
    }
});

searchInPage.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchResultInpage.innerHTML = "";
        searchUsers(searchInPage, searchResultInpage);
    }
});

/** Functions **/

// Eventlisteners function
function openProfilePage() {
    changeNavBtnsStyle("profile");
    changePageTitle("profile");
    changePage("profile");
    addUserInfo();
    populatePersonalTweets(localStorage.getItem("userId"));
}

function openHomePage() {
    changeNavBtnsStyle("home");
    changePageTitle("home");
    changePage("home");
    populateFeeds(localStorage.getItem("userId"));
}

function openSearchPage() {
    searchPage.classList.remove("hide");
    profile.classList.add("hide");
    feeds.classList.add("hide");
    tweetWriting.classList.add("hide");
    followingFollowers.classList.add("hide");
    blockedUsersContainer.classList.add("hide");
    otherUserProfile.classList.add("hide");
}

function openLogoutWrapper() {
    logoutWrapper.classList.toggle("hide");
}

function openFollowingTab() {
    changePage("following");
    populateFollowing(localStorage.getItem("userId"));
}

function openFollowersTab() {
    changePage("followers");
    populateFollowers(localStorage.getItem("userId"));
}

function openEditProfileModal() {
    if (typeof editProfileModal.showModal === "function") {
        editProfileModal.showModal();
        nameInput.value = localStorage.getItem("name");
        bioInput.value = getValue("bio");
        locationInput.value = getValue("location");
        websiteInput.value = getValue("website");
        personalDateOfBirth.innerHTML = `<p>${localStorage.getItem("date_of_birth")}</p>`;
    }

}

function closeModal() {
    editProfileModal.close();
}

function openPersonalTweetsTab() {
    personalTweets.classList.remove("hide");
    personalTweetsTab.classList.add("active-tab");
    populatePersonalTweets(localStorage.getItem("userId"));

    personalMedia.classList.add("hide");
    personalMediaTab.classList.remove("active-tab");

    personalLikes.classList.add("hide");
    personalLikesTab.classList.remove("active-tab");
}

function openPersonalMediaTab() {
    personalTweets.classList.add("hide");
    personalTweetsTab.classList.remove("active-tab");

    personalMedia.classList.remove("hide");
    personalMediaTab.classList.add("active-tab");
    populatePersonalMedia(localStorage.getItem("userId"));

    personalLikes.classList.add("hide");
    personalLikesTab.classList.remove("active-tab");
}

function openPersonalLikesTab() {
    personalTweets.classList.add("hide");
    personalTweetsTab.classList.remove("active-tab");

    personalMedia.classList.add("hide");
    personalMediaTab.classList.remove("active-tab");

    personalLikes.classList.remove("hide");
    personalLikesTab.classList.add("active-tab");
    populatePersonalLikes(localStorage.getItem("userId"));
}

function uploadTweet() {
    let formData = new FormData();
    formData.append("tweetText", tweetTextArea.value);
    formData.append("userId", localStorage.getItem("userId"));
    formData.append("dateOfCreation", getCurrent());
    let tweetImgBase64 = "";
    if (tweetUploadedImage.files.length == 0) {
        tweetImgBase64 = "NA";
        formData.append("tweetImageText", tweetImgBase64);
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/add_tweet.php", {
            method: 'post',
            body: formData
        }).then((response) => response.json());
    } else {
        // User selected file
        let fileToLoad = tweetUploadedImage.files[0];
        // New BLOB
        let fileReader = new FileReader();
        // Convert to base64 after load
        fileReader.onload = function (fileLoadedEvent) {
            tweetImgBase64 = fileLoadedEvent.target.result;
            formData.append("tweetImageText", tweetImgBase64);
            fetch("http://localhost/SEF/twitter-clone-backend/APIs/add_tweet.php", {
                method: 'post',
                body: formData
            }).then((response) => response.json());
        }
        // Trigger load
        fileReader.readAsDataURL(fileToLoad);
    }

}

function updateUserInfo() {
    let formData = new FormData();
    formData.append("userId", localStorage.getItem("userId"));
    if (nameInput.value == "")
        formData.append("name", "NA");
    else
        formData.append("name", nameInput.value);
    if (bioInput.value == "")
        formData.append("bio", "NA");
    else
        formData.append("bio", bioInput.value);
    if (locationInput.value == "")
        formData.append("location", "NA");
    else
        formData.append("location", locationInput.value);
    if (websiteInput.value == "")
        formData.append("website", "NA");
    else
        formData.append("website", websiteInput.value);
    if (bannerImageInput.files.length == 0) {
        if (profileImageInput.files.length > 0) {
            let fileToLoad = profileImageInput[0];
            let fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                let profileImgBase64 = fileLoadedEvent.target.result;
                formData.append("bannerPicture", profileImgBase64);
                fetch("http://localhost/SEF/twitter-clone-backend/APIs/update_user.php", {
                    method: 'post',
                    body: formData
                }).then((response) => response.json());
                updateLocalStorage();
            }
            fileReader.readAsDataURL(fileToLoad);
        } else {
            fetch("http://localhost/SEF/twitter-clone-backend/APIs/update_user.php", {
                method: 'post',
                body: formData
            }).then((response) => response.json());
            updateLocalStorage();
        }
    } else {
        // User selected file
        let fileToLoad = bannerImageInput.files[0];
        // New BLOB
        let fileReader = new FileReader();
        // Convert to base64 after load
        fileReader.onload = function (fileLoadedEvent) {
            let bannerImgBase64 = fileLoadedEvent.target.result;
            formData.append("bannerPicture", bannerImgBase64);
            if (profileImageInput.files.length > 0) {
                let fileToLoad = profileImageInput[0];
                let fileReader = new FileReader();
                fileReader.onload = function (fileLoadedEvent) {
                    let profileImgBase64 = fileLoadedEvent.target.result;
                    formData.append("bannerPicture", profileImgBase64);
                    fetch("http://localhost/SEF/twitter-clone-backend/APIs/update_user.php", {
                        method: 'post',
                        body: formData
                    }).then((response) => response.json());
                    updateLocalStorage();
                }
                fileReader.readAsDataURL(fileToLoad);
            } else {
                fetch("http://localhost/SEF/twitter-clone-backend/APIs/update_user.php", {
                    method: 'post',
                    body: formData
                }).then((response) => response.json());
                updateLocalStorage();
            }
        }
        // Trigger load
        fileReader.readAsDataURL(fileToLoad);
    }
}

function logoutUser() {
    localStorage.clear();
    window.location.href = "index.html";
}

function showBlockedUsersConstainer() {
    changePage("blocked");
    populateBlockedUsers(localStorage.getItem("userId"));
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
        blockedUsersContainer.classList.add("hide");
        otherUserProfile.classList.add("hide");
        searchPage.classList.add("hide");
    } else if (page == "home") {
        profile.classList.add("hide");
        feeds.classList.remove("hide");
        tweetWriting.classList.remove("hide");
        followingFollowers.classList.add("hide");
        blockedUsersContainer.classList.add("hide");
        otherUserProfile.classList.add("hide");
        searchPage.classList.add("hide");
    } else if (page == "following") {
        profile.classList.add("hide");
        feeds.classList.add("hide");
        tweetWriting.classList.add("hide");
        followingFollowers.classList.remove("hide");
        followingTab.classList.remove("hide");
        followersTab.classList.add("hide");
        followingTabBtn.classList.add("active-tab");
        followersTabBtn.classList.remove("active-tab");
        otherUserProfile.classList.add("hide");
        blockedUsersContainer.classList.add("hide");
        searchPage.classList.add("hide");
    } else if (page == "followers") {
        profile.classList.add("hide");
        feeds.classList.add("hide");
        tweetWriting.classList.add("hide");
        followingFollowers.classList.remove("hide");
        followingTab.classList.add("hide");
        followersTab.classList.remove("hide");
        followingTabBtn.classList.remove("active-tab");
        followersTabBtn.classList.add("active-tab");
        otherUserProfile.classList.add("hide");
        blockedUsersContainer.classList.add("hide");
        searchPage.classList.add("hide");
    } else {
        profile.classList.add("hide");
        feeds.classList.add("hide");
        tweetWriting.classList.add("hide");
        followingFollowers.classList.add("hide");
        blockedUsersContainer.classList.remove("hide");
        otherUserProfile.classList.add("hide");
        searchPage.classList.add("hide");
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
        pic.style.backgroundImage = `url("${localStorage.getItem("profile_picture_link")}")`
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

function populateFeeds(userId) {
    feeds.innerHTML = ``;
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_following_tweets.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => addFeeds(data.feeds, feeds));
}

function populatePersonalTweets(userId) {
    personalTweets.innerHTML = "";
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_tweets_noMedia.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => addPersonalTweets(data.tweets, personalTweets));
}

function populatePersonalMedia(userId) {
    personalMedia.innerHTML = "";
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_tweets_media.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => addPersonalMedia(data.tweets, personalMedia));
}

function populatePersonalLikes(userId) {
    personalLikes.innerHTML = "";
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_liked_tweets.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => addPersonalLikes(data.liked, personalLikes));
}

function populateFollowing(userId) {
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_following.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => addFollowing(data.following));
}

function populateFollowers(userId) {
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_followers.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => addFollowers(data.followers));
}

function populateBlockedUsers(userId) {
    blockedUsers.innerHTML = ``;
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_blocked_users.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => addBlockedUsers(data.blocked_users, blockedUsers));
}

function addFeeds(feeds, container) {
    for (const tweet of feeds) {
        let imgHolder = "";
        let ppHolder = "";
        // check if the tweet has image
        if (tweet.tweet_image_link != "NA") {
            imgHolder = `
                <!-- Tweet Image -->
                <div class="tweet-img-wrapper">
                    <img src="${tweet.tweet_image_link}" alt="">
                </div>`;
        }
        // check if the user of the tweet has profile picture
        if (tweet.profile_picture_link != "NA") {
            ppHolder = `<img src="${tweet.profile_picture_link}" alt="profile-picture">`;
        }
        container.innerHTML += `
            <div class="feed-wrapper">
            <div>
                <div class="small-round-profile-picture">${ppHolder}</div>
            </div>
            <!-- Tweet content -->
            <div class="tweet-content">
                <!-- Username nad name -->
                <div class="user-info">
                    <p class="bold-text"> ${tweet.name} </p>
                    <p class="grey-text grey-background username-text" id="${tweet.id}"> @${tweet.username} </p>
                </div>
                <div></div>
                <!-- Tweet text -->
                <div class="tweet-text-wrapper">
                    <p>${tweet.tweet_text}</p>
                </div>
                ${imgHolder}
                <!-- Likes -->
                <div class="tweet-likes-wrapper">
                    <div>
                    <span class="material-symbols-outlined like-btn" id="${tweet.tweet_id}"> favorite </span>
                    <p class="likes-number" id="${tweet.tweet_id}"> 123 </p>
                    </div>
                    <p class="grey-text">${tweet.date_time_of_creation.split(".")[0]}</p>
                </div>
            </div>
        </div>`;
    }
    const likesNumbers = document.getElementsByClassName("likes-number");
    for (const likesNumber of likesNumbers) {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + likesNumber.id)
            .then((response) => response.json())
            .then((data) => likesNumber.innerHTML = data.likes_count);
    }
    const likeBtns = document.getElementsByClassName("like-btn");
    for (const likebtn of likeBtns) {
        likebtn.addEventListener("click", () => {
            likebtn.style.color = "rgb(29, 155, 240)";
            fetch("http://localhost/SEF/twitter-clone-backend/APIs/add_like.php?userId=" + localStorage.getItem("userId") + "&tweetId=" + likebtn.id)
                .then((response) => response.json())
                .catch((error) => console.log(error));
        });
    }
    const tweets = document.getElementsByClassName("username-text");
    for (const t of tweets) {
        t.addEventListener("click", () => {
            showTweetOwner(t.id, "follower");
        });
    }
}

function addPersonalTweets(tweets, container) {
    for (const tweet of tweets) {
        container.innerHTML += `<div class="feed-wrapper">
        <!-- Picture -->
        <div>
            <div class="small-round-profile-picture">
                <img src="${localStorage.getItem("profile_picture_link")}" alt="profile-picture">
            </div>
        </div>
        <!-- Tweet content -->
        <div class="tweet-content">
            <!-- Username nad name -->
            <div class="user-info">
                <p class="bold-text"> ${localStorage.getItem("name")} </p>
                <p class="grey-text"> @${localStorage.getItem("username")} </p>
            </div>
            <!-- Tweet text -->
            <div class="tweet-text-wrapper">
                <p> ${tweet.tweet_text} </p>
            </div>
            <!-- Likes -->
            <div class="tweet-likes-wrapper">
                <div><span class="material-symbols-outlined like-btn" id="${tweet.id}"> favorite </span>
                <p class="likes-number" id="${tweet.id}"> 123 </p></div>
                <p class="grey-text">${tweet.date_time_of_creation.split(".")[0]}</p>
            </div>
        </div>
    </div>`;
    }
    const likesNumbers = document.getElementsByClassName("likes-number");
    for (const likesNumber of likesNumbers) {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + likesNumber.id)
            .then((response) => response.json())
            .then((data) => likesNumber.innerHTML = data.likes_count);
    }
    const likeBtns = document.getElementsByClassName("like-btn");
    for (const likebtn of likeBtns) {
        likebtn.addEventListener("click", () => {
            likebtn.style.color = "rgb(29, 155, 240)";
            fetch("http://localhost/SEF/twitter-clone-backend/APIs/add_like.php?userId=" + localStorage.getItem("userId") + "&tweetId=" + likebtn.id)
                .then((response) => response.json())
                .catch((error) => console.log(error));
        });
    }
}

function addPersonalMedia(tweets, container) {
    for (const tweet of tweets) {
        container.innerHTML += `
        <div class="feed-wrapper">
        <div>
            <div class="small-round-profile-picture">
                <img src="${localStorage.getItem("profile_picture_link")}" alt="profile-picture">
            </div>
        </div>
        <!-- Tweet content -->
        <div class="tweet-content">
            <!-- Username nad name -->
            <div class="user-info">
                <p class="bold-text"> ${localStorage.getItem("name")} </p>
                <p class="grey-text"> @${localStorage.getItem("username")} </p>
            </div>
            <!-- Tweet text -->
            <div class="tweet-text-wrapper">
                <p>${tweet.tweet_text}</p>
            </div>
            <!-- Tweet Image -->
            <div class="tweet-img-wrapper">
                <img src="${tweet.tweet_image_link}" alt="">
            </div>
            <!-- Likes -->
            <div class="tweet-likes-wrapper">
                <div><span class="material-symbols-outlined like-btn" id="${tweet.id}"> favorite </span>
                <p class="likes-number" id="${tweet.id}"> 123 </p></div>
                <p class="grey-text">${tweet.date_time_of_creation.split(".")[0]}</p>
            </div>
        </div>
    </div>`;
    }
    const likesNumbers = document.getElementsByClassName("likes-number");
    for (const likesNumber of likesNumbers) {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + likesNumber.id)
            .then((response) => response.json())
            .then((data) => likesNumber.innerHTML = data.likes_count);
    }
    const likeBtns = document.getElementsByClassName("like-btn");
    for (const likebtn of likeBtns) {
        likebtn.addEventListener("click", () => {
            likebtn.style.color = "rgb(29, 155, 240)";
            fetch("http://localhost/SEF/twitter-clone-backend/APIs/add_like.php?userId=" + localStorage.getItem("userId") + "&tweetId=" + likebtn.id)
                .then((response) => response.json())
                .catch((error) => console.log(error));
        });
    }
}

function addPersonalLikes(tweets, container) {
    for (const tweet of tweets) {
        let imgHolder = "";
        let ppHolder = "";
        // check if the tweet has image
        if (tweet.tweet_image_link != "NA") {
            imgHolder = `
                <!-- Tweet Image -->
                <div class="tweet-img-wrapper">
                    <img src="${tweet.tweet_image_link}" alt="">
                </div>`;
        }
        // check if the user of the tweet has profile picture
        if (tweet.profile_picture_link != "NA") {
            ppHolder = `<img src="${tweet.profile_picture_link}" alt="profile-picture">`;
        }
        container.innerHTML += `
            <div class="feed-wrapper">
            <div>
                <div class="small-round-profile-picture">${ppHolder}</div>
            </div>
            <!-- Tweet content -->
            <div class="tweet-content">
                <!-- Username nad name -->
                <div class="user-info">
                    <p class="bold-text"> ${tweet.name} </p>
                    <p class="grey-text"> @${tweet.username} </p>
                </div>
                <!-- Tweet text -->
                <div class="tweet-text-wrapper">
                    <p>${tweet.tweet_text}</p>
                </div>
                ${imgHolder}
                <!-- Likes -->
                <div class="tweet-likes-wrapper">
                    <div><span class="material-symbols-outlined"> favorite </span>
                    <p class="likes-number" id="${tweet.tweet_id}"> 123 </p></div>
                    <p class="grey-text">${tweet.date_time_of_creation.split(".")[0]}</p>
                </div>
            </div>
        </div>`;
    }
    const likesNumbers = document.getElementsByClassName("likes-number");
    for (const likesNumber of likesNumbers) {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + likesNumber.id)
            .then((response) => response.json())
            .then((data) => likesNumber.innerHTML = data.likes_count);
    }
}

function addFollowing(followingUsers) {
    followingTab.innerHTML = "";
    for (const u of followingUsers) {
        if (u.profile_picture_link == "NA") {
            followingTab.innerHTML += `
            <div class="other-user-wrapper grey-background">
                <div class="small-round-profile-picture">
                </div>
            <div class="other-user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
            </div>
        </div>`;
        } else {
            followingTab.innerHTML += `
            <div class="other-user-wrapper grey-background">
                <div class="small-round-profile-picture">
                    <img src="${pp}" alt"pp">
                </div>
            <div class="other-user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
            </div>
        </div>`;
        }
    }
}

function addFollowers(followerUsers) {
    followersTab.innerHTML = "";
    for (const u of followerUsers) {
        if (u.profile_picture_link == "NA") {
            followersTab.innerHTML += `
            <div class="other-user-wrapper grey-background">
                <div class="small-round-profile-picture">
                </div>
            <div class="other-user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
            </div>
        </div>`;
        } else {
            followersTab.innerHTML += `
            <div class="other-user-wrapper grey-background">
                <div class="small-round-profile-picture">
                    <img src="${u.profile_picture_link}" alt"pp">
                </div>
            <div class="other-user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
            </div>
        </div>`;
        }
    }
}

function addBlockedUsers(users, container) {
    for (const u of users) {
        if (u.profile_picture_link == "NA") {
            container.innerHTML += `
            <div class="other-user-wrapper">
                <div class="small-round-profile-picture">
                </div>
            <div class="other-user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
            </div>
            <div class="unblock-btn-wrapper"><button type="button" class="bold-text grey-background unblock-btn" value="${u.id}"> Unbclock </button></div>
        </div>`;
        } else {
            container.innerHTML += `
            <div class="other-user-wrapper grey-background">
                <div class="small-round-profile-picture">
                    <img src="${u.profile_picture_link}" alt"pp">
                </div>
            <div class="other-user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
            </div>
            <div class="unblock-btn-wrapper"><button type="button" class="bold-text grey-background unblock-btn" value="${u.id}"> Unbclock </button></div>
        </div>`;
        }
        const unblockBtns = document.getElementsByClassName("unblock-btn");
        for (const btn of unblockBtns) {
            btn.addEventListener("click", () => {
                fetch("http://localhost/SEF/twitter-clone-backend/APIs/remove_blocked_user.php?userId=" + localStorage.getItem("userId") + "&blockedUserId=" + btn.value)
                    .then((response) => response.json())
                    .then((data) => console.log(data.result));
            });
        }
    }
}

function getLikesCount(id) {
    let count = 0;
    console.log("Before fetch: " + count);
    count = fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + id)
        .then((response) => response.json())
        .then((data) => {
            console.log("Actual count: " + data.likes_count);
            return data.likes_count;
        });
    console.log("After fetch: " + count);
    return count;
}

function getCurrent() {
    let today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}

function updateLocalStorage() {
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_by_id.php?userId=" + localStorage.getItem("userId"))
        .then((response) => response.json())
        .then((data) => {
            console.log(data.user);
            // updateValuesOfLocalStorage(data.user);
        });
}

function updateValuesOfLocalStorage(user) {
    localStorage.clear();
    localStorage.setItem("userId", user.id);
    localStorage.setItem("username", user.username);
    localStorage.setItem("email", user.email);
    localStorage.setItem("name", user.name);
    localStorage.setItem("password", user.password);
    localStorage.setItem("date_of_birth", user.date_of_birth);
    localStorage.setItem("date_of_registration", user.date_of_registration);
    localStorage.setItem("bio", user.bio);
    localStorage.setItem("location", user.location);
    localStorage.setItem("profile_picture_link", user.profile_picture_link);
    localStorage.setItem("banner_picture_link", user.banner_picture_link);
    localStorage.setItem("website", user.website);
}

function getValue(type) {
    return localStorage.getItem(type) == "NA" ? "" : localStorage.getItem(type);
}

function showTweetOwner(userId, type) {
    tweetWriting.classList.add("hide");
    feeds.classList.add("hide");
    profile.classList.add("hide");
    searchPage.classList.add("hide");
    otherUserProfile.classList.remove("hide");
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_by_id.php?userId=" + userId)
        .then((response) => response.json())
        .then((data) => setProfileData(data.user, userId, type));
}

function setProfileData(u, id, type) {
    otherUserDetails.innerHTML = `
    <p class="bold-text"> ${u[0].name} </p>
    <p class="grey-text">@${u[0].username}</p>
    <p class="grey-text date-wrapper"><span class="material-symbols-outlined">calendar_month</span>${u[0].date_of_registration}</p>
    <div class="following-followers-info-wrapper">
        <p id="other-following">0 Following</p>
        <p id="other-followers">0 Followers</p>
    </div>`;
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_followers.php?userId=" + id)
        .then((response) => response.json())
        .then((data) => document.getElementById("other-followers").textContent = data.count + " Followers");
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_following.php?userId=" + id)
        .then((response) => response.json())
        .then((data) => document.getElementById("other-following").textContent = data.count + " Following");

    if (u[0].banner_picture_link != "NA") {
        otherUserBanner.style.backgroundImage = `url(${u[0].banner_picture_link})`;
    }
    if (u[0].profile_picture_link != "NA") {
        otherUserPicture.innerHTML = `<img src="${u[0].profile_picture_link}">`;
    }

    const blockBtn = document.getElementById("block-btn");
    blockBtn.addEventListener("click", () => {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/add_block.php?userId=" + localStorage.getItem("userId") + "&blockId=" + id)
            .then((response) => response.json());
        openHomePage();

    });

    const followUnfollowBtn = document.getElementById("follow-unfollow-btn");
    if (type == "follower") {
        followUnfollowBtn.textContent = "Unfollow";
        followUnfollowBtn.addEventListener("click", () => {
            fetch("http://localhost/SEF/twitter-clone-backend/APIs/remove_following.php?userId=" + localStorage.getItem("userId") + "&followingUserId=" + id)
                .then((response) => response.json());
            openHomePage();
        });
    } else {
        followUnfollowBtn.textContent = "Follow";
        followUnfollowBtn.addEventListener("click", () => {
            fetch("http://localhost/SEF/twitter-clone-backend/APIs/add_following.php?userId=" + localStorage.getItem("userId") + "&followingUserId=" + id)
                .then((response) => response.json());
            openHomePage();
        });
    }
    otherTweet.innerHTML = "";
    otherMedia.innerHTML = "";
    otherLikes.innerHTML = "";
    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_tweets_noMedia.php?userId=" + id)
        .then((response) => response.json())
        .then((data) => addOtherTweets(data.tweets, otherTweet, u[0]));

    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_tweets_media.php?userId=" + id)
        .then((response) => response.json())
        .then((data) => addOtherMedia(data.tweets, otherMedia, u[0]));

    fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_user_liked_tweets.php?userId=" + id)
        .then((response) => response.json())
        .then((data) => addOtherLikes(data.liked, otherLikes, u[0]));

}

function addOtherTweets(tweets, container, u) {
    for (const tweet of tweets) {
        let ppHolder = "";
        if (u.profile_picture_link != "NA")
            ppHolder = `<img src="${u.profile_picture_link}" alt="profile-picture">`;
        container.innerHTML += `<div class="feed-wrapper">
        <!-- Picture -->
        <div>
            <div class="small-round-profile-picture">
                ${ppHolder}
            </div>
        </div>
        <!-- Tweet content -->
        <div class="tweet-content">
            <!-- Username nad name -->
            <div class="user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
                <p class="grey-text"> . ${tweet.date_time_of_creation.split(".")[0]}</p>
            </div>
            <!-- Tweet text -->
            <div class="tweet-text-wrapper">
                <p> ${tweet.tweet_text} </p>
            </div>
            <!-- Likes -->
            <div class="tweet-likes-wrapper">
                <span class="material-symbols-outlined like-btn" id="${tweet.id}"> favorite </span>
                <p class="likes-number" id="${tweet.id}"> 123 </p>
            </div>
        </div>
    </div>`;
    }
    const likesNumbers = document.getElementsByClassName("likes-number");
    for (const likesNumber of likesNumbers) {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + likesNumber.id)
            .then((response) => response.json())

    }
}

function addOtherMedia(tweets, container, u) {
    for (const tweet of tweets) {
        let ppHolder = "";
        if (u.profile_picture_link != "NA")
            ppHolder = `<img src="${u.profile_picture_link}" alt="profile-picture">`;
        container.innerHTML += `
        <div class="feed-wrapper">
        <div>
            <div class="small-round-profile-picture">
                ${ppHolder}
            </div>
        </div>
        <!-- Tweet content -->
        <div class="tweet-content">
            <!-- Username nad name -->
            <div class="user-info">
                <p class="bold-text"> ${u.name} </p>
                <p class="grey-text"> @${u.username} </p>
                <p class="grey-text"> . ${tweet.date_time_of_creation.split(".")[0]}</p>
            </div>
            <!-- Tweet text -->
            <div class="tweet-text-wrapper">
                <p>${tweet.tweet_text}</p>
            </div>
            <!-- Tweet Image -->
            <div class="tweet-img-wrapper">
                <img src="${tweet.tweet_image_link}" alt="">
            </div>
            <!-- Likes -->
            <div class="tweet-likes-wrapper">
                <span class="material-symbols-outlined like-btn" id="${tweet.id}"> favorite </span>
                <p class="likes-number" id="${tweet.id}"> 123 </p>
            </div>
        </div>
    </div>`;
    }
    const likesNumbers = document.getElementsByClassName("likes-number");
    for (const likesNumber of likesNumbers) {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + likesNumber.id)
            .then((response) => response.json())
            .then((data) => likesNumber.innerHTML = data.likes_count);
    }
}

function addOtherLikes(tweets, container, u) {
    for (const tweet of tweets) {
        let imgHolder = "";
        let ppHolder = "";
        // check if the tweet has image
        if (tweet.tweet_image_link != "NA") {
            imgHolder = `
                <!-- Tweet Image -->
                <div class="tweet-img-wrapper">
                    <img src="${tweet.tweet_image_link}" alt="">
                </div>`;
        }
        // check if the user of the tweet has profile picture
        if (tweet.profile_picture_link != "NA") {
            ppHolder = `<img src="${tweet.profile_picture_link}" alt="profile-picture">`;
        }
        container.innerHTML += `
            <div class="feed-wrapper">
            <div>
                <div class="small-round-profile-picture">${ppHolder}</div>
            </div>
            <!-- Tweet content -->
            <div class="tweet-content">
                <!-- Username nad name -->
                <div class="user-info">
                    <p class="bold-text"> ${tweet.name} </p>
                    <p class="grey-text"> @${tweet.username} </p>
                    <p class="grey-text"> . ${tweet.date_time_of_creation.split(".")[0]}</p>
                </div>
                <!-- Tweet text -->
                <div class="tweet-text-wrapper">
                    <p>${tweet.tweet_text}</p>
                </div>
                ${imgHolder}
                <!-- Likes -->
                <div class="tweet-likes-wrapper">
                    <span class="material-symbols-outlined"> favorite </span>
                    <p class="likes-number" id="${tweet.tweet_id}"> 123 </p>
                </div>
            </div>
        </div>`;
    }
    const likesNumbers = document.getElementsByClassName("likes-number");
    for (const likesNumber of likesNumbers) {
        fetch("http://localhost/SEF/twitter-clone-backend/APIs/get_tweet_likes_count.php?tweetId=" + likesNumber.id)
            .then((response) => response.json())
            .then((data) => likesNumber.innerHTML = data.likes_count);
    }
}

function searchUsers(input, container) {
    fetch('http://localhost/SEF/twitter-clone-backend/APIs/get_user_by_username.php?username=' + input.value)
        .then((response) => response.json())
        .then((data) => {
            for (const u of data.searchResults) {
                let ppHolder = "";
                if (u.profile_picture_link != "NA")
                    ppHolder = `<img src="${u.profile_picture_link}">`;
                container.innerHTML += `
                <div class="searched-user grey-background" id="${u.id}">
                    <div class="small-round-profile-picture">${ppHolder}</div>
                    <div>
                        <p class="bold-text">${u.name}</p>
                        <p class="grey-text">@${u.username}</p>
                    </div>
                </div>`;
            }
            const resultUsers = document.getElementsByClassName("searched-user");
            for (const singleResult of resultUsers) {
                if (singleResult.id != localStorage.getItem("userId")) {
                    singleResult.addEventListener("click", () => {
                        fetch('http://localhost/SEF/twitter-clone-backend/APIs/get_user_following.php?userId=' + localStorage.getItem("userId"))
                            .then((response) => response.json())
                            .then((data) => {
                                let followingIds = [];
                                for (const u of data.following) {
                                    followingIds.push(u.id);
                                }
                                const follower = checkIfFollowing(followingIds, singleResult.id);
                                console.log("followingIds: " + followingIds +
                                    "\nUserId: " + singleResult.id +
                                    "\nContains? : " + follower);
                                if (follower) {
                                    showTweetOwner(singleResult.id, "follower");
                                } else {
                                    showTweetOwner(singleResult.id, "notFollower");
                                }
                            });
                    });
                }
            }
        });
}

function checkIfFollowing(array, element) {
    for (let i = 0; i < array.length; i++) {
        return array[i] == element;
    }
    return false;
}

