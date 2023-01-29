window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    const hand = document.getElementById("paws").value;
    const mental = document.getElementById("brainType").value;
    const colors = document.getElementById("sleep").value;
    const companion = document.getElementById("pets").value;
    const vice = document.getElementById("recreation").value;
    console.log(hand);
    console.log(mental);
    console.log(colors);
    console.log(companion);
    console.log(vice);
    //const side2 = parseInt(document.querySelector("input#side2").value);
    //const side3 = parseInt(document.querySelector("input#side3").value);
    let language;
    if (mental === "Creative") {
      language = "information about option 1";
    } else if (mental === "Logic") {
      language = "information about option 2";
    } else {
      language = "information about option 3";
    }
  document.querySelector("span#languageChoice").innerText = language;
};
}