// ================= LOGIN =================

function login() {
    const name = document.getElementById("loginName").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (name === "" || password === "") {
        alert("Please enter your name and password.");
        return;
    }

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
    document.getElementById("displayName").textContent = name;

    const profileLetters = document.querySelectorAll(".profile-picture");
    profileLetters.forEach(function(profile) {
        profile.textContent = name.charAt(0).toUpperCase();
    });
}

// ================= LOGOUT =================

function logout() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("loginName").value = "";
    document.getElementById("loginPassword").value = "";
}

// ================= CREATE POST =================

function addPost() {
    const content = document.getElementById("postContent").value.trim();

    if (content === "") {
        alert("Please write something before posting.");
        return;
    }

    const name = document.getElementById("displayName").textContent;
    const firstLetter = name.charAt(0).toUpperCase();

    const post = document.createElement("article");
    post.className = "post";

    post.innerHTML = `
        <div class="post-header">
            <div class="profile-picture">${firstLetter}</div>
            <div>
                <strong>${name}</strong>
                <small>Just now · 🌎</small>
            </div>
        </div>

        <div class="post-content">
            <p>${content}</p>
        </div>

        <div class="post-stats">
            <span>👍 0</span>
            <span class="comment-count">0 Comments</span>
        </div>

        <div class="post-buttons">
            <button onclick="likePost(this)">👍 Like</button>
            <button onclick="toggleCommentBox(this)">💬 Comment</button>
            <button>↗ Share</button>
        </div>

        <div class="comment-section hidden">
            <div class="comment-list"></div>
            <div class="comment-input-box">
                <input type="text" placeholder="Write a comment..." class="comment-input">
                <button onclick="addComment(this)">Post</button>
            </div>
        </div>
    `;

    document.getElementById("postFeed").prepend(post);
    document.getElementById("postContent").value = "";
}

// ================= LIKE =================

function likePost(button) {
    if (button.classList.contains("liked")) {
        button.innerHTML = "👍 Like";
        button.classList.remove("liked");
    } else {
        button.innerHTML = "👍 Liked";
        button.classList.add("liked");
    }
}

// ================= COMMENTS =================

function toggleCommentBox(button) {
    const post = button.closest(".post");
    const commentSection = post.querySelector(".comment-section");
    commentSection.classList.toggle("hidden");
}

function addComment(button) {
    const commentBox = button.previousElementSibling;
    const commentText = commentBox.value.trim();

    if (commentText === "") return;

    const name = document.getElementById("displayName").textContent;
    const post = button.closest(".post");
    const commentList = post.querySelector(".comment-list");

    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";
    commentItem.innerHTML = `<strong>${name}</strong>: ${commentText}`;
    
    commentList.appendChild(commentItem);
    commentBox.value = "";

    // Update comment count
    const commentCountSpan = post.querySelector(".comment-count");
    const currentCount = commentList.children.length;
    commentCountSpan.textContent = `${currentCount} ${currentCount === 1 ? 'Comment' : 'Comments'}`;
}

// ================= LOST & FOUND =================

function reportLost() {
    const message = document.getElementById("lostMessage");
    message.textContent = "Lost & Found reporting will be available soon.";
}
