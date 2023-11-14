function listview_textbox() {


    Get_from_Server().then(Response => {

        console.log(Response);
        var mainlistvolume = document.getElementById("listvolume");
        var Getidbox = document.getElementsByName("ID");
        var GetCatogrybox = document.getElementsByName("Catogry");
        var Getnamebox = document.getElementsByName("Name")
        var getAddtimesmainid = document.getElementById("detali");
        var listvalue1 = document.createElement('datalist');
        var listvalue2 = document.createElement('datalist');
        var listvalue3 = document.createElement('datalist');
        var listvalue4 = document.createElement('datalist');
        listvalue1.setAttribute("id", "boxID");
        listvalue2.setAttribute("id", "boxcategory");
        listvalue3.setAttribute("id", "boxName");
        listvalue4.setAttribute("id", "brand");
        var Getline = document.getElementById("mylines");
        var mainlist = document.getElementById("mainlu");


        for (let i = 0; i < Response.message.length; i++) {

            if (i != 0) {
                var opetions1 = document.createElement("option");
                var opetions3 = document.createElement("option");

                opetions1.text = Response.message[i].Items_id;
                opetions3.text = Response.message[i].Name;


                
                if (Response.message[i].category != Response.message[i - 1].category) {
                    var opetions2 = document.createElement("option");
                    opetions2.text = Response.message[i].category;
                  
                    

                    listvalue2.appendChild(opetions2);
                   

                }

               


                listvalue1.appendChild(opetions1);

                listvalue3.appendChild(opetions3);

          try {
            var clonedDiv = Getline.cloneNode(true);
           
            console.log( clonedDiv.style.height.value);
            clonedDiv.setAttribute("id", Response.message[i].Items_id);
            clonedDiv.setAttribute("name",Response.message[i].category);
            var imagebox = clonedDiv.querySelector("#imagesbo");

            
            var productname = clonedDiv.querySelector("#Producatnamehedin");
            productname.textContent = Response.message[i].Name;
            var detailes = clonedDiv.querySelector("#Producatdetali");
            
            detailes.textContent = Response.message[i].detail;
            var pricees = clonedDiv.querySelector("#ProducatPric");
            pricees.textContent = "RS."  +Response.message[i].price;

            mainlist.appendChild(clonedDiv);
            
          } catch (error) {
            if (Response.message[i].brand != Response.message[i - 1].brand) {
                var opetion4 = document.createElement("option");
                opetion4.text = Response.message[i].brand;
              


                listvalue4.appendChild(opetion4);

            }

            
          }
               





            }



        }

        try {
            mainlistvolume.appendChild(listvalue1);
            mainlistvolume.appendChild(listvalue2);
            mainlistvolume.appendChild(listvalue3);
           
            mainlistvolume.style.display = "block";
            Getidbox[0].setAttribute("list", "boxID");
            GetCatogrybox[0].setAttribute("list", "boxcategory");
            Getnamebox[0].setAttribute("list", "boxName");
            
        } catch (error) {
            getAddtimesmainid.appendChild(listvalue4);
            getAddtimesmainid.appendChild(listvalue2);
            
        }

       





    });


}


function screachingitems(){

    try {
        var items_list = document.getElementById('mainlu').getElementsByTagName('li');
    var GetCatogrybox = document.getElementsByName("Catogry")[0];
    var Getnamebox = document.getElementsByName("Name")[0];
    var Getidbox = document.getElementsByName("ID")[0];
    

    Getidbox.addEventListener("input",()=>{
           GetCatogrybox.value = "";
           Getnamebox.value = "";
        
          for (let i = 0; i < items_list.length; i++) {
            const text = items_list[i].id;
            const displayStyle = text.includes(Getidbox.value) ? 'block' : 'none';
            console.log(displayStyle);
            items_list[i].style.display = displayStyle;
        }

    });
   
     GetCatogrybox.addEventListener("input",() =>{

         Getidbox.value = "";
         Getnamebox.value = "";
        for (let i = 0; i < items_list.length; i++) {
          const text = items_list[i].getAttribute("name");
        
          const displayStyle = text.includes(GetCatogrybox.value) ? 'block' : 'none';
          console.log(displayStyle);
          items_list[i].style.display = displayStyle;
      }



     });
   
    Getnamebox.addEventListener("input",() =>{
           
        Getidbox.value = "";
        GetCatogrybox.value = "";
        for (let i = 0; i < items_list.length; i++) {
          const text = items_list[i].querySelector("#Producatnamehedin").textContent;
          
          const displayStyle = text.includes(Getnamebox.value) ? 'block' : 'none';
          console.log(displayStyle);
          items_list[i].style.display = displayStyle;
      }



     });    
        
    } catch (error) {
         console.log(error);
        
    }
    

             

}

function selectitems()
{

    const myList = document.getElementById('mainlu');
   
  
    myList.addEventListener('click', function(event) {
      
        
      
      
        const parentLiId = event.target.closest('li').id;
        console.log('Parent li ID:', parentLiId);
      
    });

}


 screachingitems();

listview_textbox();
selectitems();