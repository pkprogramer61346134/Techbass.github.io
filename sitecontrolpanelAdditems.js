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

function  eits()
{
  const params = new URLSearchParams(window.location.search);
  const argumentValue = params.get('argument');
  console.log(argumentValue);
  Get_from_Server().then(response =>{
    console.log(response);

    for (let i = 0; i < response.message.length; i++) {
                    

              if(Response.message[i].Items_id == argumentValue)
              {

                var catogry = document.getElementsByName("Catogry")[0];
                var name = document.getElementsByName("Name")[0];
                var detail = document.getElementsByName("Detail")[0];
                var price = document.getElementsByName("price")[0];
                var brand = document.getElementsByName("brand")[0];
                var Model = document.getElementsByName("Model")[0];
               
                    
                
                catogry.textContent =  obj[0].filedata[0].catogry ;
                brand.textContent  =  obj[0].filedata[0].brand ;
                detail.textContent =  obj[0].filedata[0].detail ;
                 price.textContent =  obj[0].filedata[0].price ;
                name.textContent =   obj[0].filedata[0].Name ;
                Model.textContent  =  obj[0].filedata[0].model_no ;

                         

              }
     
 

    }



} ) 


}

eits();

Addtimes();