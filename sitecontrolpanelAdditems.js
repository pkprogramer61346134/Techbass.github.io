function Addtimes(gets){

           
    var getbutton = document.getElementById('submat');
     getbutton.addEventListener("click",() =>{

        var catogry = document.getElementsByName("Catogry")[0];
        var name = document.getElementsByName("Name")[0];
        var detail = document.getElementsByName("Detail")[0];
        var price = document.getElementsByName("price")[0];
        var brand = document.getElementsByName("brand")[0];
        var Model = document.getElementsByName("Model")[0];
       
             if(gets == "" ){
          obj[0].command = "ADD";
          obj[0].filedata[0].catogry = catogry.value;
          obj[0].filedata[0].brand =  brand.value;
          obj[0].filedata[0].detail = detail.value;
          obj[0].filedata[0].price = price.value;
          obj[0].filedata[0].Name = name.value;
          obj[0].filedata[0].model_no = Model.value;
        }


         Get_from_Server().then(response =>{

          
          if(gets != "" ){
              
          }

         } )
   
     });
  


}

Addtimes();