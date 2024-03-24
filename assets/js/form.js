const modeToggleBtn = document.querySelector('.mode-toggle');

modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function submitForm () {
    user = document.forms["blogForm"]["username"].value;
    title = document.forms["blogForm"]["title"].value;
    content = document.forms["blogForm"]["content"].value;

    if (user == "") {
        alert("Username must be filled out.");
        // return false;
    } else if (title == "") {
        alert("Title must be filled out.");
        // return false;
    } else if (content == ""); {
        alert("Content cannot be blank.");
        return false;
    // } else {
    //     return false;
    }
};



