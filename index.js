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

                var url = "editAnddel.html?argument=" +liId;
                window.open(url, '_blank');

            }
        }
    });
}
addbutnclick();

