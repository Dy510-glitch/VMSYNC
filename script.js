// LOGIN

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;


    if (username === "" || password === "") {

        alert(
            "Please enter your username and password."
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
        .textContent = username;
}


// LOGOUT

function logout() {

    document
        .getElementById("mainPage")
        .classList.add("hidden");


    document
        .getElementById("loginPage")
        .classList.remove("hidden");


    document.getElementById("username").value = "";

    document.getElementById("password").value = "";
}


// CREATE POST

function createPost() {

    let content =
        document.getElementById("postContent").value;


    if (content.trim() === "") {

        alert(
            "Please write something first."
        );

        return;
    }


    let post =
        document.createElement("div");


    post.className = "post";


    post.innerHTML = `

        <h3>
            ${document.getElementById("displayName").textContent}
        </h3>

        <p>${content}</p>

        <button onclick="react(this)">
            ❤️ 0
        </button>

        <button>
            💬 Comment
        </button>

    `;


    document
        .getElementById("feed")
        .prepend(post);


    document
        .getElementById("postContent")
        .value = "";
}


// REACTION

function react(button) {

    let currentText =
        button.textContent;


    let number =
        parseInt(currentText.match(/\d+/));


    number++;


    button.textContent =
        "❤️ " + number;
}


// CREATE GROUP

function createGroup() {

    document
        .getElementById("groupMessage")
        .textContent =
        "Assignment group creation feature is ready for development.";
}


// LOST AND FOUND

function reportItem() {

    document
        .getElementById("lostMessage")
        .textContent =
        "Lost & Found reporting feature is ready for development.";
}
