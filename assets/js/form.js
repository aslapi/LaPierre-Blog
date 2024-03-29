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
        alert("username cant blank");
        return false;
    } else if (titleInput.value === "") {
        alert("title cant blank");
        return false;
    } else if (contentInput.value === "") {
        alert("content blank no good");
    } else {

        const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

        existingPosts.unshift(blogPost);

        localStorage.setItem("blogPosts", JSON.stringify(existingPosts));
        window.location.href = "blog.html";
    }

    usernameInput.value = "";
    titleInput.value = "";
    contentInput.value = "";
});




