window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

    const hand = document.getElementById("paws").value;
    const mental = document.getElementById("brainType").value;
    const colors = parseInt(document.getElementById("sleep").value);
    const companion = document.getElementById("pets").value;
    const vice = document.getElementById("recreation").value;
    
    function alignIt() {
      if (hand === "Right") {
        let txt = document.getElementById("language");
        txt.style.textAlign="right";
      } else if (hand === "Left") {
        let txt = document.getElementById("language");
        txt.style.textAlign="left";
      } else {
        txt.style.textAlign="center";
      }
    }
    //===========================================================================
    
    let language;
    if (mental === "Creative") {
      language = "information about option 1";
    } else if (mental === "Logic") {
      language = "information about option 2";
    } else {
      language = "information about option 3";
    }
    let noise;
    if (companion === "Cats") {
      noise = "meowing";
    } else if (companion === "Dogs") {
      noise = "barking";
    } else if (companion === "Birds") {
      noise = "chirping";
    } else if (companion === "Other") {
      noise = "repellant gurgling";
    } else {
      noise = "thick and viscous silence, pregnant with the regret you feel for having chosen solitude over any form of animal companionship";
    }
    let party;
    if (vice === "Grape") {
      party = "pop a bottle of bubbly";
    } else if (vice === "Grain") {
      party = "crack open a cold one";
    } else if (vice === "Green") {
      party = "spark some dank nugs";
    } else {
      party = "drink some tea or something, I guess. I don't know";
    }
  document.querySelector("span#languageChoice").innerText = language;
};
}