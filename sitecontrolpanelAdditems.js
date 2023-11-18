var loders = document.getElementById('loder');
var filesttas = [];
var index = 0
function Addtimes() {

  var getbutton = document.getElementById('Del');
  getbutton.addEventListener("click", () => {

    var catogry = document.getElementsByName("Catogry")[0];
    var name = document.getElementsByName("Name")[0];
    var detail = document.getElementsByName("Detail")[0];
    var price = document.getElementsByName("price")[0];
    var brand = document.getElementsByName("brand")[0];
    var Model = document.getElementsByName("Model")[0];
    var ids = document.getElementById("idss");
    var loders = document.getElementById('loders');
    var del = document.getElementById("Del");

    del.disabled = true;
    loders.classList.add("loder");
    catogry.disabled = true;
    name.disabled = true;
    detail.disabled = true;
    price.disabled = true;
    brand.disabled = true;
    Model.disabled = true;
    getbutton.disabled = true;
    ids.disabled = true;
    var ids = document.getElementById("idss");
    obj[0].command = "DELETE";
    obj[0].filedata[0].Items_id = ids.value;
    Get_from_Server().then(response => {


      

      setTimeout(function () {

        loders.classList.remove("loder");
        window.close();
      }, 2000);
    })


  });

  var getbutton = document.getElementById('submat');
  getbutton.addEventListener("click", () => {

    var catogry = document.getElementsByName("Catogry")[0];
    var name = document.getElementsByName("Name")[0];
    var detail = document.getElementsByName("Detail")[0];
    var price = document.getElementsByName("price")[0];
    var brand = document.getElementsByName("brand")[0];
    var Model = document.getElementsByName("Model")[0];
    var ids = document.getElementById("idss");
    var loders = document.getElementById('loders');
    loders.classList.add("loder");
    var del = document.getElementById("Del");

    if (getbutton.textContent == "EDIT") {
      catogry.disabled = true;
      name.disabled = true;
      detail.disabled = true;
      price.disabled = true;
      brand.disabled = true;
      Model.disabled = true;
      getbutton.disabled = true;
      ids.disabled = true;
      del.disabled = true;
      obj[0].command = "EDIT";
      obj[0].filedata[0].Items_id = ids.value;
      obj[0].filedata[0].category = catogry.value;
      obj[0].filedata[0].brand = brand.value;
      obj[0].filedata[0].detail = detail.value;
      obj[0].filedata[0].price = price.value;
      obj[0].filedata[0].Name = name.value;
      obj[0].filedata[0].model_no = Model.value;

      

    }


    if (getbutton.textContent == "ADD") {

      catogry.disabled = true;
      name.disabled = true;
      detail.disabled = true;
      price.disabled = true;
      brand.disabled = true;
      Model.disabled = true;
      getbutton.disabled = true;
      ids.disabled = true;


      obj[0].command = "ADD";
      obj[0].filedata[0].category = catogry.value;
      obj[0].filedata[0].brand = brand.value;
      obj[0].filedata[0].detail = detail.value;
      obj[0].filedata[0].price = price.value;
      obj[0].filedata[0].Name = name.value;
      obj[0].filedata[0].model_no = Model.value;
      
    }

    Get_from_Server().then(response => {



      setTimeout(function () {

        loders.classList.remove("loder");
        window.close();

      }, 2000);

      catogry.disabled = false;
      name.disabled = false;
      detail.disabled = false;
      price.disabled = false;
      brand.disabled = false;
      Model.disabled = false;
      getbutton.disabled = false;
      ids.disabled = false;
    })


  });



}

async function eits() {
  const params = new URLSearchParams(window.location.search);
  const argumentValue = params.get('argument');
  var catogry = document.getElementById("Catogry");
  var name = document.getElementById("Name");
  var detail = document.getElementById("Detail");
  var price = document.getElementById("price");
  var brand = document.getElementById("brand");
  var model = document.getElementById("Model");
  var button = document.getElementById('submat');
  var ids = document.getElementById("idss");
  var del = document.getElementById("Del");
  var loders = document.getElementById('loders');
  var iamgs = document.getElementById("ima");
  ids.disabled = true;
  del.disabled = true;
  button.disabled = true;
  catogry.disabled = true;
  name.disabled = true;
  detail.disabled = true;
  price.disabled = true;
  brand.disabled = true;
  model.disabled = true;
  loders.classList.add('loder');

  await Get_from_Server().then(response => {
    for (let i = 0; i < response.message.length; i++) {
      if (response.message[i].Items_id == argumentValue) {

        button.textContent = "EDIT";

        del.disabled = false;
        ids.value = argumentValue;
        catogry.value = response.message[i].category;
        brand.value = response.message[i].brand;
        detail.value = response.message[i].detail;
        price.value = response.message[i].price;
        name.value = response.message[i].Name;
        model.value = response.message[i].model_no;
        filesttas.length = 0;
        filesttas = response.message[i].Images.split(' ,');

        snapcontroler(filesttas.length, null);
        snapcontroler(0, 'span' + 0, 1);
          var img = new Image();
        img.src = filesttas[0];
        img.onload = function () {
          iamgs.src = img.src;
        };


        index = 1;

      }
    }


    setTimeout(function () {

      loders.classList.remove("loder");
      catogry.disabled = false;
      name.disabled = false;
      detail.disabled = false;
      price.disabled = false;
      brand.disabled = false;
      model.disabled = false;
      button.disabled = false;
      button.disabled = false;


    }, 2000);


  });




}

function snapcontroler(maker, selcter, teger) {

  var snapcr = document.getElementById('span0');
  var cusf = document.getElementById('curmain');


  if (0 != maker) {
    while (cusf.firstChild) {
      cusf.removeChild(cusf.firstChild);
    }
    for (let v = 0; v < maker; v++) {

      var newspan = document.createElement("span");
      newspan.setAttribute("id", 'span' + v);
      newspan.setAttribute("class", "curcul");
   
      newspan.style.backgroundColor =   "white";
      cusf.appendChild(newspan);

    }

  }

  if (teger == 1) {
    var snapcr = document.getElementById(selcter);
   
    snapcr.style.backgroundColor = "black";

  }
  if (teger == 2) {

   
    var snapcr = document.getElementById(selcter);
    snapcr.style.backgroundColor = "white";

  }

  if(teger == 3)
  {

    while (cusf.firstChild) {
      cusf.removeChild(cusf.firstChild);
    }
  }



}

function openFileInput() {

  var waitlick = document.getElementById('ima');


  waitlick.addEventListener("click", () => {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = "ind"
    fileInput.style.display = 'none';
    fileInput.setAttribute('multiple', 'multiple');
    document.body.appendChild(fileInput);
    fileInput.click();
    fileInput.addEventListener("change", () => {

      filesttas.length = 0;
     


      var promises = [];

      for (var i = 0; i < fileInput.files.length; i++) {
        var file = fileInput.files[i];

        promises.push(getBase64(file));
      }







      obj[0].filedata[0].Images.length = 0;
      Promise.all(promises)
        .then((base64Images) => {


          base64Images.forEach((element, index) => {



            filesttas.push(element);

          })
           index = 1;
          obj[0].filedata[0].Images = filesttas;
          snapcontroler(filesttas.length, 0,0);

          waitlick.src = filesttas[0];
          snapcontroler(0, 'span' + 0, 1);
          
        })
        .catch((error) => {
          console.error("Error loading images:", error);
        })
        .finally(() => {


        });



    });

    document.body.removeChild(fileInput);
  });







}

function imagesellerter() {

  var list = document.getElementById("left");
  var right = document.getElementById("right");
  var iamgs = document.getElementById("ima");
  var del = document.getElementById("del");
  list.addEventListener("click", () => {
    
    if (index != 1) {
      index--;
     
      snapcontroler(0, 'span' + index, 2);
     
      var img = new Image();
      img.src = filesttas[index-1];
      img.onload = function () {
        iamgs.src = img.src;
      };


    }

  });
  right.addEventListener("click", () => {
   
    if (filesttas.length > index) {
      
      index++;
     
      var cou = index - 1;
      snapcontroler(0, 'span' + cou, 1);
      var img = new Image();
      img.src = filesttas[index-1];
      img.onload = function () {
        iamgs.src = img.src;
      };

    }

  });




 
  del.addEventListener("click", () => {

    var waitlick = document.getElementById('ima');
       console.log(filesttas.length);
    if (filesttas.length == 1 ) {

      snapcontroler(0, 'span' + 0, 3);
      filesttas.splice(index-1,1);
      waitlick.src = null;

      
    } else {

      if (filesttas.length > 0) {

        filesttas.splice(index-1,1);
    
        obj[0].filedata[0].Images = filesttas;
        snapcontroler(filesttas.length, 0,0);
        waitlick.src = filesttas[0];
        snapcontroler(0, 'span' + 0, 1);
        index = 1;
        
      }
     
    
    }
   








  });

}


function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result); // Extract base64 part
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}


eits();
imagesellerter();
Addtimes();
openFileInput();
