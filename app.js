    //! Question # 01 //
function showAlertlink() {
    alert("Alert: You clicked the link!");
}
    //! Question # 02 //
const mobileImages = [
    'image 1.jpg',
    'image 2.jpg',
    'image 3.jpg',
    'image 4.jpg',
    // Add more image URLs as needed
];

// Function to display an alert when an image is clicked
function showAlert(imageUrl) {
    alert('You clicked on the mobile image: ' + imageUrl);
}

// Function to generate and display the mobile images
function displayMobileImages() {
    const imageContainer = document.createElement('div');
    imageContainer.id = 'image-container';

    mobileImages.forEach(imageUrl => {
        const image = document.createElement('img');
        image.src = imageUrl;
        image.addEventListener('click', () => showAlert(imageUrl));
        imageContainer.appendChild(image);
    });

    document.body.appendChild(imageContainer);
}

// Call the function to display the mobile images
displayMobileImages();

    //! Question # 03 //
function deleteRow(button) {
    var row = button.parentNode.parentNode; // Get the row containing the button
    var table = row.parentNode; // Get the table containing the row
    table.deleteRow(row.rowIndex); // Delete the row
}

    //! Question # 04 //
    var imageElement = document.getElementById("image");
    var originalImageSrc = imageElement.src;
    var newImageSrc = "second-image.jpg"; // Change this to the path of your second image

    function changeImage() {
        imageElement.src = newImageSrc;
    }

    function resetImage() {
        imageElement.src = originalImageSrc;
    }

    //! Question # 05 //
    var counterElement = document.getElementById("counter");
    var increaseButton = document.getElementById("increaseBtn");
    var decreaseButton = document.getElementById("decreaseBtn");

    var counterValue = 0;

    // Function to update the counter value and display it
    function updateCounter() {
        counterElement.textContent = counterValue;
    }

    // Event listener for the Increase button
    increaseButton.addEventListener("click", function() {
        counterValue++;
        updateCounter();
    });

    // Event listener for the Decrease button
    decreaseButton.addEventListener("click", function() {
        counterValue--;
        updateCounter();
    });