// Initial index
const EDIT = document.getElementById("EDIT");
const ADD = document.getElementById("ADD");
const DELETE = document.getElementById("DELETE");
let currentIndex = 0;

// Array of image URLs

// Function to update the image source
function updateImage() {



  // Assuming 'value' is an Image element, use the 'onload' event

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

function buttons_click() {

  document.getElementById('lift').addEventListener('click', moveLeft);
  document.getElementById('Right').addEventListener('click', moveRight);
  document.getElementById('DELETE_img').addEventListener('click', deleteImage);

}

async function put_the_images() {

 
  ADD.addEventListener("click", async () => {




    loadinger.classList.remove("displaynot");
    loadinger.classList.add("loadinger");
    obj[0].command = "ADD";
    obj[0].filedata[0].Images = imageList;
    obj[0].filedata[0].category = Category.value;
    obj[0].filedata[0].brand = brand.value;
    obj[0].filedata[0].Name = Name.value;
    obj[0].filedata[0].detail = Item_Descriptions.value;
    obj[0].filedata[0].model_no = Model.value;
    obj[0].filedata[0].price = Price.value;
    await get_and_set_value(obj);
    window.close();









  });

 
  EDIT.addEventListener("click", async () => {



    loadinger.classList.remove("displaynot");
    loadinger.classList.add("loadinger");
    var cunterner = [];
    obj[0].command = "EDIT";
    obj[0].filedata[0].Items_id = id.value;
    imageList.forEach(element => {
      var fuch = element.indexOf('https://drive.google.com/uc?id=');
      if (fuch == -1) {
        cunterner.push(element);

      } else {

        cunterner.push(element.replace('https://drive.google.com/uc?id=', ''))
      }
    });

    obj[0].filedata[0].Images = cunterner;
    obj[0].filedata[0].category = Category.value;
    obj[0].filedata[0].brand = brand.value;
    obj[0].filedata[0].Name = Name.value;
    obj[0].filedata[0].detail = Item_Descriptions.value;
    obj[0].filedata[0].model_no = Model.value;
    obj[0].filedata[0].price = Price.value;
    await get_and_set_value(obj);
    window.close();








  });

  var DELETE = document.getElementById("DELETE");
  DELETE.addEventListener("click", async () => {


    loadinger.classList.remove("displaynot");
    loadinger.classList.add("loadinger");
    var cunterner = [];
    obj[0].command = "DELETE";
    obj[0].filedata[0].Items_id = id.value;
    imageList.forEach(element => {
      var fuch = element.indexOf('https://drive.google.com/uc?id=');
      if (fuch == -1) {
        cunterner.push(element);

      } else {

        cunterner.push(element.replace('https://drive.google.com/uc?id=', ''))
      }
    });

    obj[0].filedata[0].Images = cunterner;
    obj[0].filedata[0].category = Category.value;
    obj[0].filedata[0].brand = brand.value;
    obj[0].filedata[0].Name = Name.value;
    obj[0].filedata[0].detail = Item_Descriptions.value;
    obj[0].filedata[0].model_no = Model.value;
    obj[0].filedata[0].price = Price.value;
    await get_and_set_value(obj);
    console.log(obj);
    window.close();

  });

  var imagesBox = document.getElementById("imagesBox");

  imagesBox.addEventListener("click", () => {

    var inputfiles = document.getElementById("inputfiles");
    inputfiles.click();
    inputfiles.addEventListener("change", async function (event) {
      var selectedFiles = event.target.files;

      if (selectedFiles.length > 0) {



        for (var i = 0; i < selectedFiles.length; i++) {

          imageList.push(await read_files(selectedFiles[i]));


        }


        console.log("Files saved in array:", imageList);

        updateImage();
      } else {
        console.log("No files selected");
      }
    });
  });
}

async function read_files(input) {
  return new Promise((resolve, reject) => {
    var fileReader = new FileReader();

    fileReader.addEventListener("loadend", function () {
      resolve(fileReader.result);

    });

    fileReader.addEventListener("error", function (error) {
      reject(error);
    });

    fileReader.readAsDataURL(input);
  });
}



put_the_images();


buttons_click();


