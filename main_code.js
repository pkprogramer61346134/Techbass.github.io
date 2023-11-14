let Url = "https://script.google.com/macros/s/AKfycbwpo-65HNonX8PRyh1DPSLF0Hkel_E1_yFfcKPMrbxmIhblOsm1_EsN4NN4PVMlw680/exec";
 
 obj = [{
  "command": "Display",
  "address": "data",
  "pageselecter":"sitecontrolpanelAdditems.html",

  "filedata": [{

    "Items_id": 1699290111146,
    "category": "laptops",
    "brand": "Acer",
    "Name": "Acer Gaming",
    "detail": "Ram 8gb and  HDD 500Gb Processer is best i7 6th genrations  the made for games user enjoy the best Gaming eproyains",
    "price": "65000",
    "Images": "classi",
    "model_no": "Acer nitro"

  }]
}]


function Get_from_Server(){

  return fetch(Url, {

       method: "POST",
       body: JSON.stringify(obj)

  })
        .then(response => response.json()) // Assuming you want to parse the response as JSON
        .catch(error => console.error('Error:', error))
}


