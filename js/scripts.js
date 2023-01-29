window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

    const hand = document.getElementById("paws").value;
    const mental = document.getElementById("brainType").value;
    const colors = parseInt(document.getElementById("sleep").value);
    const companion = document.getElementById("pets").value;
    const vice = document.getElementById("recreation").value;

    let language1;
    let language2;
    let language3;
    let noise;
    let party;


    //===========================================================================
    
   
    if (mental === "Creative") {
      language1 = "Might as well start with Python! The level of simplicity in its code structure allows for a coding experience that your personality type would find attractive! Have a blast making your code your own! The only thing Python is missing right now is your masterful manipulation! Make a million programs in one day that all scream Designer Dream! All you need is to ";
      language2 = " for inspiration and answer the ";
      language3 = " in your soul, and you can own the world!";
    } else if (mental === "Logic") {
      language1 = "Check out Ruby! Its focus on productivity aligns perfectly with your personality type. Get in there and get it done! Once you master Ruby, you can do anything! It's a gateway to virtually infinite possibilities. So, ";
      language2 = " and ignore the ";
      language3 = " emanating from the other room and hunker down to a productivity party with Ruby, The Object-oriented Scripting Language!";
    } else {
      language1 = "Sounds like you'd love to get your hands on some JavaScript! Its impossibly complicated user interface is just the thing you need to pull all your hair out trying to figure out how to align all the text to the right when someone says they're right handed! Is the background blue? Probably not, but it will be some day! Just kick back in anxious agony, dreaming of some day when you can ";
      language2 = " and try to drown out the ";
      language3 = " from your starving dependants whose very existence you've all but forgotten about and read the same forums over and over again wishing you had started earlier because the deadline is looming with JavaScript! Huzzah!";
    }

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

    if (vice === "Grape") {
      party = "pop a bottle of bubbly";
    } else if (vice === "Grain") {
      party = "crack open a cold one";
    } else if (vice === "Green") {
      party = "spark some dank nugs";
    } else {
      party = "drink some tea or something, I guess. I don't know...";
    }
  const wholeOutput = language1 + party + language2 + noise + language3;
  document.querySelector("span#languageChoice").innerText = wholeOutput;
};
}