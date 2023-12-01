let url = "https://script.google.com/macros/s/AKfycbzVwS7zFTlhSsgFGbiKpKRPj1EYxF23q1N8nfFuZEVvfEmOKLg0IhP6GFL0MpK0LXES/exec";
var stronge = [];
const category_option = document.createElement("datalist");
const Items_id_option = document.createElement("datalist");
const brand_option = document.createElement("datalist");
const Name_option = document.createElement("datalist");
const Item_list = document.getElementById("Item_list");
const argumentValue = new URLSearchParams(window.location.search).get('argument');
const id = document.getElementById("ID");
const Category = document.getElementById("Category");
const brand = document.getElementById("brand");
const Name = document.getElementById("Name");
const Item_Descriptions = document.getElementById("Item_Descriptions");
const Model = document.getElementById("Model");
const Price = document.getElementById("Price");
const loadinger = document.getElementById("loadinger");
imageList = [];

category_option.id = "category_option";
Items_id_option.id = "Items_id_option";
brand_option.id = "brand_option";
Name_option.id = "Name_option";



obj = [{
    "command": "Display",


    "filedata": [{

        "Items_id": 1699290111146,
        "category": "best",
        "brand": "hp",
        "Name": "speed up moues",
        "detail": "best RBG gaming mouse  made for gamer",
        "price": "300",
        "Images": [],
        "model_no": "mouse78xcfg45"

    }]
}]


if (argumentValue !== null) {
    obj[0].filedata[0].command = "Displayselecter";
    obj[0].filedata[0].Items_id = argumentValue;
} else {
    
    console.log('Argument not found in the URL');
}

async function fetchImagesAndSaveBuffers(imageUrl) {




    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            var reader = new FileReader();
            reader.onloadend = function () {
                var imageData = reader.result;
                console.log('Image Data:', imageData);

                // Now you have the image data in the 'imageData' variable
                // You can use it as needed
            };
            reader.readAsDataURL(blob);
        })
        .catch(error => {
            console.error('Error fetching image data:', error);
        });


}


async function make_a_options(inputs) {
    try {
        const result = await get_and_set_value(obj);
        
        stronge.push(result.message);
      
         if(result.message.length <= 1)
         {

            loadinger.classList.remove("loadinger");
            loadinger.classList.add("displaynot");
         }
        for (let index = 1; index < result.message.length; index++) {
          
            loadinger.classList.remove("loadinger");
            loadinger.classList.add("displaynot");
            var getlist = document.createElement("li");
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            h1.id = "name";
            var p = document.createElement("p");
            var h2 = document.createElement("h1");

            getlist.id = result.message[index].Items_id;
            getlist.className = "Item_cloumn_CSS";
            getlist.Name = result.message[index].category;
            const values = result.message[index].Images;
            var valuesr = [];
            valuesr = values.split(" ,");
            img.src =  valuesr[0];
            
            h1.textContent = result.message[index].Name;
            p.textContent = result.message[index].detail;
            h2.textContent = result.message[index].price;

            getlist.appendChild(img);
            getlist.appendChild(h1);
            getlist.appendChild(p);
            getlist.appendChild(h2);
            if ("listview" == inputs) {
                Item_list.appendChild(getlist);
            }
            if (argumentValue == result.message[index].Items_id) {

                const EDIT = document.createElement("button");
                const DELETE = document.createElement("button");
                EDIT.textContent = "EDIT";
                DELETE.textContent = "DELETE";
                DELETE.classList.add("buttse");
                EDIT.classList.add("buttse");
                EDIT.id = "EDIT";
                DELETE.id = "DELETE"
                ditailscontener.appendChild(EDIT);
                ditailscontener.appendChild(DELETE);
                id.value = result.message[index].Items_id;
                id.disabled = true;
                Category.value = result.message[index].category;
                brand.value = result.message[index].brand;
                Name.value = result.message[index].Name;
                Item_Descriptions.textContent = result.message[index].detail;
                Model.value = result.message[index].model_no;
                Price.value = result.message[index].price;
                const values = result.message[index].Images;
                var valuesr = [];
                valuesr = values.split(" ,");
                console.log(valuesr);
                imageList.length = 0;
                valuesr.forEach(element => {


                     
                    imageList.push( element);


                });

                updateImage();


                  break;


            }




            addOptionIfNotExists(category_option, result.message[index].category);
            addOptionIfNotExists(Items_id_option, result.message[index].Items_id);
            addOptionIfNotExists(brand_option, result.message[index].brand);
            addOptionIfNotExists(Name_option, result.message[index].Name);

        }

        if (id) {
            if (id.value.length <= 0) {

                
                const ADD = document.createElement("button");
                ADD.textContent = "ADD";
                ADD.classList.add("buttse");
                ADD.id = "ADD";
                ditailscontener.appendChild(ADD);
            }

        }
        if (typeof put_the_images === 'function' && typeof put_the_images !== 'undefined') {
           
            put_the_images();
            imagesfilesselcter(imageList.length, "setbk", 1);
        }
       

        var mainbox_of_list = document.getElementById("mainbox");
        mainbox_of_list.appendChild(Items_id_option);
        mainbox_of_list.appendChild(category_option);
        mainbox_of_list.appendChild(brand_option);
        mainbox_of_list.appendChild(Name_option);
        if ("listview" == inputs) {

            var Sreaching_by_ID = document.getElementById("Sreaching_by_ID");
            var Sreaching_by_Category = document.getElementById("Sreaching_by_Category");
            var Sreaching_by_Name = document.getElementById("Sreaching_by_Name");

            Sreaching_by_ID.setAttribute("list", "Items_id_option");
            Sreaching_by_Category.setAttribute("list", "category_option");
            Sreaching_by_Name.setAttribute("list", "Name_option");
        } else {



            Category.setAttribute("list", "category_option");
            brand.setAttribute("list", "brand_option");







        }





    } catch (error) {
        console.error('Error:', error);
    }
}

async function get_and_set_value(objs) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(objs)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON data
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to be caught by the calling function
    }
}

function addOptionIfNotExists(selectElement, value) {
    var options = selectElement.getElementsByTagName("option");

    if (options.length === 0 || options[options.length - 1].value !== value) {
        var newOption = document.createElement("option");
        newOption.value = value;
        selectElement.appendChild(newOption);
    }
}
