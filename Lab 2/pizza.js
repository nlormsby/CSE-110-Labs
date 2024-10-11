document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values
    const title = document.getElementById("title").value;

    // Check title length
    if (title.length > 50) {
        alert("Title cannot exceed 50 characters.")
    }

    // Display the result
    else {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<h3>Submitted Information</h3>
                               <p>Title: ${title}</p>`; 
    }
});

document.getElementById("title").addEventListener("focus", function () {
    this.style.backgroundColor = "#e0f7fa";  // Light blue background on focus
});

document.getElementById("title").addEventListener("blur", function () {
    this.style.backgroundColor = "";  // Reset background on blur
});

document.getElementById("content").addEventListener("focus", function () {
    this.style.backgroundColor = "#e0f7fa";  // Light blue background on focus
});

document.getElementById("content").addEventListener("blur", function () {
    this.style.backgroundColor = "";  // Reset background on blur
});