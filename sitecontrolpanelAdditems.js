var loders = document.getElementById('loder');
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


      console.log(response);
      loders.classList.add("loder");
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

      console.log(obj);

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


      loders.classList.add("loder");
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
  ids.disabled = true;
  del.disabled = true;
  button.disabled = true;
  catogry.disabled = true;
  name.disabled = true;
  detail.disabled = true;
  price.disabled = true;
  brand.disabled = true;
  model.disabled = true;


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
      }
    }

    loders.classList.add('loder');
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

function snapcontroler(maker,selcter,teger){

  var snapcr = document.getElementById('span0');
  var cusf =  document.getElementById('curmain');
 
 
 if(0 != maker)
 {
  while (cusf.firstChild) {
    cusf.removeChild(cusf.firstChild);
  }
  for (let v = 0; v < maker; v++) {
    
    var newspan =  snapcr.cloneNode(true);
    newspan.setAttribute("id",'span'+ v );
    newspan.setAttribute("class","curcul");
    cusf.appendChild(newspan);
    
  }
 
 }

 if(teger == 1)
 {
  var snapcr = document.getElementById(selcter);
  snapcr.style.backgroundColor = "black";
    
 }
 if(teger == 2)
 {
  var snapcr = document.getElementById(selcter);
  snapcr.style.backgroundColor = "white";
    
 }
 


}
var filesttas = [];
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
      var imagesArray = obj[0].filedata[0].Images;
     
      // Clear existing entries (if any)
      imagesArray.length = 0;

      var promises = [];

      for (var i = 0; i < fileInput.files.length; i++) {
        var file = fileInput.files[i];

        promises.push(getBase64(file));
      }
      obj[0].filedata[0].Images = promises;

      
    

      

      filesttas.length = 0;
      Promise.all(obj[0].filedata[0].Images)
        .then((base64Images) => {

          
          base64Images.forEach((element,index) => {

           

           filesttas[index] = element
      
                 
        })
        snapcontroler( filesttas.length,null);
        waitlick.src =  filesttas[0]; 
        console.log(filesttas);
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
 var index = 0
function  imagesellerter(){

        var list = document.getElementById("left");
        var right = document.getElementById("right");
        var iamgs = document.getElementById("ima");
       
        list.addEventListener("click",() =>{
          console.log("list");
          if( index > 0)
          {
            index--;
            console.log(index);
            snapcontroler(0,'span'+index,2);
            iamgs.src =  filesttas[index]; 
           
             
          }               

        });
        right.addEventListener("click",()=>{
       

          if( filesttas.length > index)
          {
            
            index++;
            console.log(index);
            var cou = index-1;
            snapcontroler(0,'span'+cou,1);
            iamgs.src =  filesttas[index-1];  
         
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
