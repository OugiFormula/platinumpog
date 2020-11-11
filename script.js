function showPicture() {
    var sourceOfPicture = "https://i.imgur.com/X4YPpx8.gif";
    var img = document.getElementById('bigpic')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
  } 

  function discomode() {
    var element = document.body;
    element.classList.toggle("rainbow-mode");
  }
