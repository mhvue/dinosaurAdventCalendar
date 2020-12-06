const dinosaurFacts = [
    "Dinosaurs ruled the Earth for over 160 million years",
    "A person who studies dinosaurs is known as a paleontologist",
    "Birds descended from a type of dinosaurs",
    "The name dinosaur means 'frighteningly big lizard",
    "Dinosaur footprints have been found all over the world and give scientists lots of clues about what made them!",
    "fact6",
    "fact7",

]

//fact rec'd from: https://www.sciencekids.co.nz/sciencefacts/dinosaurs.html

const date = new Date();
console.log(date)

//get year
const year = date.getFullYear()
console.log(year)

let getDays = "";
let tdData= "";

//CALENDAR
//displaying month and year 
$("h2").html("December " + year) 

//generating dates
for(let i = -1; i <= 33; i++){
    getDays = i;
    tdData = $("<td>").html(getDays).attr("id",`12/${i}/${year}`); 

    //1st week
    if(i == -1 || i == 0){
     $("#numberDays").append("<td>"+ "" + "</td>");
    }
    else if(i >=1 && i <= 5){
     $("#numberDays").append(tdData);
    }
    //2nd week
    else if(i >= 6 && i <= 12){
     $("#numberDays2").append(tdData);
    }
    //3rd week
    else if(i >= 13 && i <= 19){
     $("#numberDays3").append(tdData);
    }
    //4th week
    else if(i >= 20 && i <= 26){
     $("#numberDays4").append(tdData);
     }
     //5th week
    else{
         if(i > 31 && i <= 33){
            $("#numberDays5").append("<td>"+ "" + "</td>");
         }
         else{
            $("#numberDays5").append(tdData);
        }
     }

}

//Display Facts
let count = 0;

$("td").on("click",function(){
    //$this is grabbing the id per day 
    const selectDate = $(this).attr("id");
    const getNum= $(this).html();
    console.log(getNum)

    const currentDate = moment()

    //check if what is clicked matched today's date 
    if(selectDate == currentDate.format("MM/D/YYYY")){

        $(".msgModal").modal()
    //show match dayNum(getNum) to match index 
        $("#dinoFactHolder").html(dinosaurFacts[getNum])
    }
    //previous date
    //show prevous fact 
    // else if(){

    // }
    //future date 
    else{
        $(".msgModal").modal();
        $("#dinoFactHolder").html("<p>Not time to see this fact yet")
    }

   



   
})