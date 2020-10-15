const username = localStorage.getItem("username");
document.getElementById("user").innerHTML = username;	

const ImageData = localStorage.getItem("imgR");

    if (ImageData) {
    	document.querySelector("#UserImg").setAttribute("src", ImageData);
    }
