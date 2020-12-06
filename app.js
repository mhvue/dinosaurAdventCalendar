const dinosaurFacts = [
    "Dinosaurs ruled the Earth for over 160 million years",
    "A person who studies dinosaurs is known as a paleontologist",
    "Birds descended from a type of dinosaurs",
    "The name dinosaur means 'frighteningly big lizard",
    "Dinosaur footprints have been found all over the world and give scientists lots of clues about what made them!",

]

//https://www.sciencekids.co.nz/sciencefacts/dinosaurs.html

const date = new Date();
console.log(date)

let days = "";

//1st week
for(let i = -1; i <= 5; i++){
    //hide -1 and 0
    if(i == -1 || i == 0){
       $("#numberDays").append("<td>"+ days + "</td>");
    }
    else{
        days = i;
        $("#numberDays").append("<td>"+ days + "</td>");
    }
}
//2nd week
for(let i = 6; i <= 12; i++){
    days = i;
    $("#numberDays2").append("<td>"+ days + "</td>");
}
//3rd week
for(let i = 13; i <= 19; i++){
    days = i;
    $("#numberDays3").append("<td>"+ days + "</td>");
}
//4th week
for(let i = 20; i <= 26; i++){
    days = i;
    $("#numberDays4").append("<td>"+ days + "</td>");
}
//5th week
for(let i = 27; i <= 31; i++){
    days = i;
    $("#numberDays5").append("<td>"+ days + "</td>");
}

