let environmentTitle = "Perfect Paradise";

let environmentElements = ["sand", "waves", "beach towels", "palm trees"];

let mainEntity = {
    name: "Shelly",
    type: "crab",
    mood: "adventurous",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;  
    
    let currentMood = buttonCreature.moods[arrayPosition];
}