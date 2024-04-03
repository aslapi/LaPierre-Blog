const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitPostBtn = document.querySelector("#submit");


submitPostBtn.addEventListener('click', function (e) {

    e.preventDefault();

    // creates an object with user's input
    const blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value
    };

    // if any inputs are left blank, will not allow post to go through
    if (usernameInput.value === "") {
        alert("Username cannot be blank.");
        return false;
    } else if (titleInput.value === "") {
        alert("Title cannot be blank.");
        return false;
    } else if (contentInput.value === "") {
        alert("Content cannot be blank.");
    } else {

        // Checks to see if any existing posts are in the local storage
        const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

        // Adds new post to the blogPost array
        existingPosts.unshift(blogPost);

        localStorage.setItem("blogPosts", JSON.stringify(existingPosts));
        window.location.href = "blog.html";
    }

    // Resets fields to empty
    usernameInput.value = "";
    titleInput.value = "";
    contentInput.value = "";
});




