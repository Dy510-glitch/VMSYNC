// ================= LOGIN =================

function login() {

    const name =
        document.getElementById("loginName").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();


    if (name === "" || password === "") {

        alert(
            "Please enter your name and password."
        );

        return;
    }


    document
        .getElementById("loginPage")
        .classList.add("hidden");


    document
        .getElementById("mainPage")
        .classList.remove("hidden");


    document
        .getElementById("displayName")
        .textContent = name;


    // Change profile letter

    const profileLetters =
        document.querySelectorAll(".profile-picture");


    profileLetters.forEach(function(profile) {

        profile.textContent =
            name.charAt(0).toUpperCase();

    });

}


// ================= LOGOUT =================

function logout() {

    document
        .getElementById("mainPage")
        .classList.add("hidden");


    document
        .getElementById("loginPage")
        .classList.remove("hidden");


    document
        .getElementById("loginName")
        .value = "";

    document
        .getElementById("loginPassword")
        .value = "";

}


// ================= CREATE POST =================

function addPost() {

    const content =
        document
            .getElementById("postContent")
            .value
            .trim();


    if (content === "") {

        alert(
            "Please write something before posting."
        );

        return;
    }


    const name =
        document
            .getElementById("displayName")
            .textContent;


    const firstLetter =
        name.charAt(0).toUpperCase();


    const post =
        document.createElement("article");


    post.className = "post";


    post.innerHTML = `

        <div class="post-header">

            <div class="profile-picture">
                ${firstLetter}
            </div>

            <div>

                <strong>
                    ${name}
                </strong>

                <small>
                    Just now · 🌎
                </small>

            </div>

        </div>


        <div class="post-content">

            <p>
                ${content}
            </p>

        </div>


        <div class="post-stats">

            <span>
                👍 0
            </span>

            <span>
                0 Comments
            </span>

        </div>


        <div class="post-buttons">

            <button onclick="likePost(this)">
                👍 Like
            </button>

            <button>
                💬 Comment
            </button>

            <button>
                ↗ Share
            </button>

        </div>

    `;


    document
        .getElementById("postFeed")
        .prepend(post);


    document
        .getElementById("postContent")
        .value = "";

}


// ================= LIKE =================

function likePost(button) {

    if (button.classList.contains("liked")) {

        button.innerHTML = "👍 Like";

        button.classList.remove("liked");

    }

    else {

        button.innerHTML = "👍 Liked";

        button.classList.add("liked");

    }

}


// ================= LOST & FOUND =================

function reportLost() {

    const message =
        document.getElementById("lostMessage");


    message.textContent =
        "Lost & Found reporting will be available soon.";

}
