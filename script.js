// Get elements from the DOM
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

/**
 * Function to open the full image view.
 * @param {string} pic - The source URL of the image to be displayed.
 */
function openFullImg(pic) {
    fullImgBox.style.display = "flex"; // Show the full image box
    fullImg.src = pic; // Set the source of the full image to the clicked image
}

/**
 * Function to close the full image view.
 */
function closeFullImg() {
    fullImgBox.style.display = "none"; // Hide the full image box
}
