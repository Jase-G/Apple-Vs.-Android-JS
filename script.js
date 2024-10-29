//controlling css and attributes from JS

//document.getElementById("some-id").style; //accesses the css rule for "enter ID here" element

//document.getElementById("android").style.border = "2ps solid black";

//document.getElementById("some-image").src = "images/newpic.jpg"; //changes an image

//document.getElementById("some-a-tag").href = "http://newlink.com";//this will change the hyperlink

//changing an image vs adding a new image
//to add an image where there wasnt one before, you need a container for the image in HTML
//containers are empty p, div, span
//E.G in (HTML: <div id="img-container">)in JS: (document.getelementbyid("img-container").innerhtml = "<img src='images/pic.jpg'>");

//apple vs android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  //Change the 'Android vs Apple' image to the Android Logo in the images folder
  console.log("test");
  document.getElementById("logo").src = "images/Android-logo.jpg";

  //Change the 'Explore the Debate' link so that the link says 'Android Home'
  document.getElementById("the-link").innerHTML = "Android Home";

  //Change the 'Explore the Debate' link so that the background color is #a4c93b
  document.getElementById("the-link").style.backgroundColor = "#a4c93b";

  //Change the 'Explore the Debate' link so that the href is now 'https://www.android.com/&#39;
  document.getElementById("the-link").href = "https://www.android.com/&#39";

  //Change the background color of the html to #a4c93b
  document.getElementById("html").style.backgroundColor = "#a4c93b";

  //Change the base font-family to 'Roboto', sans-serif
  document.getElementById("body").style.fontFamily = " 'Roboto', sans-serif";

  //Add the class 'active' to the Android button.
  document.getElementById("android").classList.add("redborder");

  //Remove the class 'active' from the Apple button.
  document.getElementById("apple").classList.remove("redborder");

  //E.g. document.getElementById('bruh').classList.add('thing')
  //This will add the class 'thing' to the element with id 'bruh'. CSS should have a .thing rule with the style set to what you want when this class is added.
  //E.g. document.getElementById('bruh').classList.remove('thing')
  //This removes 'thing' class from the 'bruh' element.
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  //Change the 'Android vs Apple' image to the Apple Logo in the images folder
  document.getElementById("logo").src = "images/Apple-Logo.jpg";

  //Change the 'Explore the Debate' link so that the link says 'Apple Home'
  document.getElementById("the-link").innerHTML = "Apple Home";

  //Change the 'Explore the Debate' link so that the background color is #b6bcca
  document.getElementById("the-link").style.backgroundColor = "#b6bcca";

  //Change the 'Explore the Debate' link so that the href is now 'https://www.apple.com/&#39;
  document.getElementById("the-link").href = "https://www.apple.com/&#39";

  //Change the background color of the HTML to #b6bcca
  document.getElementById("html").style.backgroundColor = "#b6bcca";

  //Change the base font family to 'Brygada 1918', serif
  document.getElementById("body").style.fontFamily = "'Brygada 1918', serif";

  //Add the class 'redborder' to the Apple button.
  document.getElementById("apple").classList.add("redborder");

  //Remove the class 'redborder' from the Android button'.
  document.getElementById("android").classList.remove("redborder");
}
