let mCurrentIndex = 0 // Tracks the current image index
let mImages = [] // Array to hold GalleryImage objects
const mUrl = 'images.json' // Replace with actual JSON URL
const mWaitTime = 5000 // Timer interval in milliseconds

$(document).ready(() => {
  $('.details').hide() // Hide details initially 

  // Call a function here to start the timer for the slideshow

  // Select the moreIndicator button and add a click event to:
  $('.moreIndicator').on('click', () => {
    // - toggle the rotation classes (rot90 and rot270)
    $('.moreIndicator').toggleClass('rot90');
    // - slideToggle the visibility of the .details section
    $('.details').slideToggle();
  })


  // Select the "Next Photo" button and add a click event to call showNextPhoto
  $('#nextPhoto').on('click', () => {
    showNextPhoto();
  })
  // Select the "Previous Photo" button and add a click event to call showPrevPhoto
  $('#prevPhoto').on('click', () => {
    showPrevPhoto();
  })
  // Call fetchJSON() to load the initial set of images
  fetchJSON()
})

// Function to fetch JSON data and store it in mImages
function fetchJSON() {
  // Use $.ajax here to request the JSON data from mUrl
  $.ajax({
    type: 'GET',
    url: mUrl,
    // On success, parse the JSON and push each image object into mImages array
    success: function (data) {

      mImages = data.images;
      
      document.getElementById('photo').src = mImages[mCurrentIndex].imgPath
      document.getElementById('flower').textContent = `Flower: ${mImages[mCurrentIndex].flower}`
      document.getElementById('hemisphere').textContent = `Hemisphere: ${mImages[mCurrentIndex].hemisphere}`
      document.getElementById('description').textContent = `Description: ${mImages[mCurrentIndex].description}`
    },
    error: function () {
      console.log('Connection error.');
    }
  });
}

// After JSON is loaded, call swapPhoto() to display the first image

// Function to swap and display the next photo in the slideshow
function swapPhoto() {
  // Access mImages[mCurrentIndex] to update the image source and details
  // Update the #photo element's src attribute with the current image's path
  // Update the .location, .description, and .date elements with the current image's details
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto() {
  // Increment mCurrentIndex and call swapPhoto()
  mCurrentIndex++
  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length
  if (mCurrentIndex === 10) {
    mCurrentIndex = 0
  }
  console.log(mCurrentIndex);
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto() {
  // Decrement mCurrentIndex and call swapPhoto()
  mCurrentIndex--
  // Ensure it loops to the end if mCurrentIndex is less than 0
  if (mCurrentIndex === -1) {
    mCurrentIndex = 9
  }
  console.log(mCurrentIndex);
}

// Starter code for the timer function
function startTimer() {
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time
}