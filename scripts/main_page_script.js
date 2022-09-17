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
                    <p class="grey-text"> @${tweet.username} </p>
                    <p class="grey-text"> . ${tweet.date_time_of_creation}</p>
                </div>
                <!-- Tweet text -->
                <div class="tweet-text-wrapper">
                    <p>${tweet.tweet_text}</p>
                </div>
                ${imgHolder}
                <!-- Likes -->
                <div class="tweet-likes-wrapper">
                    <span class="material-symbols-outlined"> favorite </span>
                    <p class="likes-number"> 123 </p>
                </div>
            </div>
        </div>
    `;
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
                <p class="grey-text"> . ${tweet.date_time_of_creation}</p>
            </div>
            <!-- Tweet text -->
            <div class="tweet-text-wrapper">
                <p> ${tweet.tweet_text} </p>
            </div>
            <!-- Likes -->
            <div class="tweet-likes-wrapper">
                <span class="material-symbols-outlined"> favorite </span>
                <p class="likes-number"> 123 </p>
            </div>
        </div>
    </div>`;
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
                <p class="grey-text"> . ${tweet.date_time_of_creation}</p>
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
                <span class="material-symbols-outlined"> favorite </span>
                <p class="likes-number"> 123 </p>
            </div>
        </div>
    </div>
        `;
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
                    <p class="grey-text"> . ${tweet.date_time_of_creation}</p>
                </div>
                <!-- Tweet text -->
                <div class="tweet-text-wrapper">
                    <p>${tweet.tweet_text}</p>
                </div>
                ${imgHolder}
                <!-- Likes -->
                <div class="tweet-likes-wrapper">
                    <span class="material-symbols-outlined"> favorite </span>
                    <p class="likes-number"> 123 </p>
                </div>
            </div>
        </div>
    `;
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
