 // Initial index
 let currentIndex = 0;

 // Array of image URLs

 // Function to update the image source
 function updateImage() {
   document.getElementById('imagesBox').src = imageList[currentIndex];
 }

 // Function to move to the previous image
 function moveLeft() {
   currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
   updateImage();
   
 }

 // Function to move to the next image
 function moveRight() {
   currentIndex = (currentIndex + 1) % imageList.length;
   updateImage();
 }

 // Function to delete the current image
 function deleteImage() {
   // Remove the current image from the array
   imageList.splice(currentIndex, 1);

   // If the list is not empty, update the image
   if (imageList.length > 0) {
     currentIndex = currentIndex % imageList.length;
     updateImage();
   } else {
     // If the list is empty, clear the image source
     document.getElementById('imagesBox').src = '';
   }
 }

 function buttons_click(){
 console.log(imageList);
 document.getElementById('lift').addEventListener('click', moveLeft);
 document.getElementById('Right').addEventListener('click', moveRight);
 document.getElementById('DELETE_img').addEventListener('click', deleteImage);

 }

 

 buttons_click();