// const modeToggleBtn = document.querySelector('.mode-toggle');

// modeToggleBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

const username = document.querySelector(".user-username");
const title = document.querySelector(".user-title");
const content = document.querySelector(".user-content");
const blogSection = document.querySelector(".blog-section");

const existingPosts = JSON.parse(localStorage.getItem("blogPosts"));

if (existingPosts.length === 0) {
  const noPosts = document.createElement("h2");
  noPosts.classList.add("no-posts");

  noPosts.innerHTML = 
  `<div class="notyet">
  <h2>Sorry no posts yet idiot!</h2>
  </div>`;

  blogSection.append(noPosts);
} else {

  existingPosts.forEach((post) => {
    const newPostDiv = document.createElement("div");
    newPostDiv.classList.add("post");

    newPostDiv.innerHTML = 
    `<div>
      <h3 class="user-title">${post.title}</h3>
      <p class="user-content">${post.content}</p>
    <div>
      <p class="user-username">${post.username}</p>`;


    blogSection.appendChild(newPostDiv);
  });
}