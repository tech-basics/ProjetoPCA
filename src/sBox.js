function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myContainer");
    div = ul.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        a = div[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}