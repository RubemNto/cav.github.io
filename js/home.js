window.onload = function () {
    var backgroundImg=["../images/donuts.jpg",
                      "../images/salads.jpg",
                      "../images/coffee.jpg",
                      ]
    setInterval(changeImage, 5000);

    function changeImage() {   
        var i = Math.floor(Math.random() * Math.floor(backgroundImg.length))        
        document.getElementById("headerImages").style.backgroundImage = "url('"+backgroundImg[i]+"')";
        setInterval(5000);
        //   document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
    }
        
  }