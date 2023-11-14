function Addtimes(){

           
    var getbutton = document.getElementById('submat');
     getbutton.addEventListener("click",() =>{

        var catogry = document.getElementsByName("Catogry")[0];
        var name = document.getElementsByName("Name")[0];
        var detail = document.getElementsByName("Detail")[0];
        var price = document.getElementsByName("price")[0];
        var brand = document.getElementsByName("brand")[0];
        var Model = document.getElementsByName("Model")[0];
       
            
          obj[0].command = "ADD";
          obj[0].filedata[0].catogry = catogry.value;
          obj[0].filedata[0].brand =  brand.value;
          obj[0].filedata[0].detail = detail.value;
          obj[0].filedata[0].price = price.value;
          obj[0].filedata[0].Name = name.value;
          obj[0].filedata[0].model_no = Model.value;
      


         Get_from_Server().then(response =>{

          
              console.log(response);

         } )
   
     });
  


}

function eits() {
  const params = new URLSearchParams(window.location.search);
  const argumentValue = params.get('argument');

  Get_from_Server().then(response => {
    for (let i = 0; i < response.message.length; i++) {
      if (response.message[i].Items_id == argumentValue) {
        var catogry = document.getElementById("Catogry");
        var name = document.getElementById("Name");
        var detail = document.getElementById("Detail");
        var price = document.getElementById("price");
        var brand = document.getElementById("brand");
        var model = document.getElementById("Model");

       
        catogry.value = response.message[i].category;
        brand.value = response.message[i].brand;
        detail.value = response.message[i].detail;
        price.value = response.message[i].price;
        name.value = response.message[i].Name;
        model.value = response.message[i].model_no;
      }
    }
  });
}

eits();

Addtimes();