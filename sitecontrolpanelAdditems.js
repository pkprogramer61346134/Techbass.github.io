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
    var loders = document.getElementById("loders");
    var filercon = document.getElementById("filercon");
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
      loders.style.display = "block";
      filercon.classList.add("animate");
      setTimeout(function () {
  
        loders.style.display = "none";
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
    var loders = document.getElementById("loders");
    var filercon = document.getElementById("filercon");
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


      loders.style.display = "block";
      filercon.classList.add("animate");
      setTimeout(function () {

        loders.style.display = "none";
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
   ids.disabled = true;
   del.disabled = true;
   button.disabled = true;
   catogry.disabled = true;
   name.disabled = true;
   detail.disabled = true;
   price.disabled = true;
   brand.disabled = true;
   model.disabled = true;
  
   
await  Get_from_Server().then(response => {
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

    loders.style.display = "block";
    filercon.classList.add("animate");
    setTimeout(function () {

      loders.style.display = "none";
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
eits();

Addtimes();