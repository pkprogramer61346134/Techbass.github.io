function addbutnclick() {

    var ADD_Item_button = document.getElementById("ADD_Item_button");

    ADD_Item_button.addEventListener("click", () => {


        var url = "editAnddel.html?";
        window.open(url, '_blank');

    });


    var itemList = document.getElementById('Item_list');


    itemList.addEventListener('click', function (event) {

        var closestImg = event.target.closest('img');
        var closestH1 = event.target.closest('h1');
        var closestP = event.target.closest('p');

        if (closestImg || closestH1 || closestP) {

            var closestLi = event.target.closest('li');
            if (closestLi && closestLi.parentElement === itemList) {
                var liId = closestLi.id;

                var url = "editAnddel.html?argument=" + liId;
                window.open(url, '_blank');

            }
        }
    });
}

function listselecte() {



    document.getElementById('Sreaching_by_ID').addEventListener('input', (event) => {
        var selectValue = event.target.value.toLowerCase();
        var allLiElements = Item_list.querySelectorAll("li");
        document.getElementById('Sreaching_by_Category').value = null;
        document.getElementById('Sreaching_by_Name').value = null;
        allLiElements.forEach(element => {
            var elementId = element.id.toLowerCase();


            if (elementId.includes(selectValue)) {

                element.classList.remove("displaynot");
                element.classList.add("Item_cloumn_CSS");
            } else {

                element.classList.add("displaynot");
                element.classList.remove("Item_cloumn_CSS");
            }
        });



    });

    document.getElementById('Sreaching_by_Category').addEventListener('input', (event) => {
        var selectValue = event.target.value.toLowerCase();
        var allLiElements = Item_list.querySelectorAll("li");
        document.getElementById('Sreaching_by_ID').value = null;
        document.getElementById('Sreaching_by_Name').value = null;
        allLiElements.forEach(element => {
            var elementId = element.Name.toLowerCase();


            if (elementId.includes(selectValue)) {

                element.classList.remove("displaynot");
                element.classList.add("Item_cloumn_CSS");
            } else {

                element.classList.add("displaynot");
                element.classList.remove("Item_cloumn_CSS");
            }
        });
     });
    document.getElementById('Sreaching_by_Name').addEventListener('input', (event) => { 
        var selectValue = event.target.value.toLowerCase();
        var allLiElements = Item_list.querySelectorAll("li");
        document.getElementById('Sreaching_by_Category').value = null;
        document.getElementById('Sreaching_by_ID').value = null;
        allLiElements.forEach(element => {
          
                     
            var chic =  element.querySelector("#name");
            var elementId = chic.textContent;
           
            if (elementId.includes(selectValue)) {

                element.classList.remove("displaynot");
                element.classList.add("Item_cloumn_CSS");
            } else {

                element.classList.add("displaynot");
                element.classList.remove("Item_cloumn_CSS");
            }
        });
    });

}
addbutnclick();
listselecte();

