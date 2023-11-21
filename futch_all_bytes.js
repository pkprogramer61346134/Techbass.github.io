let url = "https://script.google.com/macros/s/AKfycbwtK_yPzpVFunUvksxMugblTSy-1Gx2GbpaBq1GajSNmoEGcSS5wRydpNS-EOJdJlEA/exec";
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
imageList = [
  
    
  ];

category_option.id = "category_option";
Items_id_option.id = "Items_id_option";
brand_option.id = "brand_option";
Name_option.id = "Name_option ";

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
        "model_no": "mouse7845"

    }]
}]



async function make_a_options(inputs) {
    try {
        const result = await get_and_set_value();
        console.log(result.message);
        stronge.push(result.message);
        for (let index = 1; index < result.message.length; index++) {

            var getlist = document.createElement("li");
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            var p = document.createElement("p");
            var h2 = document.createElement("h1");

            getlist.id = result.message[index].Items_id;
            getlist.className = "Item_cloumn_CSS";
            img.src = result.message[index].Images;
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

                id.value = result.message[index].Items_id;
                id.disabled = true;
                Category.value = result.message[index].category;
                brand.value = result.message[index].brand;
                Name.value = result.message[index].Name;
                Item_Descriptions.textContent = result.message[index].detail;
                Model.value = result.message[index].model_no;
                Price.value =  result.message[index].price;
                const values =   result.message[index].Images;
                imageList = values.split(" , ");

            }
            addOptionIfNotExists(category_option, result.message[index].category);
            addOptionIfNotExists(Items_id_option, result.message[index].Items_id);
            addOptionIfNotExists(brand_option, result.message[index].brand);
            addOptionIfNotExists(Name_option, result.message[index].Name);

        }




        var mainbox_of_list = document.getElementById("mainbox");
        mainbox_of_list.appendChild(Items_id_option);
        mainbox_of_list.appendChild(category_option);
        mainbox_of_list.appendChild(brand_option);
        if ("listview" == inputs) {

            var Sreaching_by_ID = document.getElementById("Sreaching_by_ID");
            var Sreaching_by_Category = document.getElementById("Sreaching_by_Category");
            var Sreaching_by_Name = document.getElementById("Sreaching_by_Name");

            Sreaching_by_ID.setAttribute("list", "Items_id_option");
            Sreaching_by_Category.setAttribute("list", "category_option");
            Sreaching_by_Name.setAttribute("list", "brand_option");
        } else {



            Category.setAttribute("list", "category_option");
            brand.setAttribute("list", "brand_option");







        }





    } catch (error) {
        console.error('Error:', error);
    }
}

async function get_and_set_value() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj)
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
