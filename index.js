// Get all the dropdown buttons
var dropdownBtns = document.getElementsByClassName("dropbtn");

// Loop through the buttons and add a click event listener to each one
for (var i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function() {
        // Toggle the visibility of the dropdown content when the button is clicked
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
