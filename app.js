const imgs = {
    dino1: "<img src='./images/triceratops.jpg'>"
}

const dinosaurFacts = [
     imgs.dino1,
    "Dinosaurs ruled the Earth for over 160 million years",
    "A person who studies dinosaurs is known as a paleontologist",
    "Birds descended from a type of dinosaurs",
    "The name dinosaur means 'frighteningly big lizard",
    "Dinosaur footprints have been found all over the world and give scientists lots of clues about what made them!",
    "Dreatnoughtus was the largest dinosaur.",
    "Velociraptors is pronounce 'vell-os-eeraptor' ",
    "Triceratops had nose horns they used for defence.",
    "T. Rex had quite a large brain for a dinosaur. This would have helped it hunt better!" +
    "Large parts of its brain helped its vision and smell-it may have even had telescopic vision.",
    "Theropods - these are the meat eating dinosaurs.",
    "Sauropods have long necks and lon tails.",
     "Apatosaurus lived around 150 million years ago",
    "fact13",
    "fact14",
    "fact15",
    "fact16",
    "fact17",
    "fact18",
    "fact19",
    "fact20",
    "fact21",
    "fact22",
    "fact23",
    "fact24",
    "fact25",
    "fact26",
    "fact27",
    "fact28",
    "fact29",
    "fact30",
    "fact31",
]

//fact rec'd from: https://www.sciencekids.co.nz/sciencefacts/dinosaurs.html

const date = new Date();

//get year
const year = date.getFullYear()

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
$("td").on("click",function(){
    //$this is grabbing the id per day 
    const selectDate = $(this).attr("id");
    const getNum= $(this).html();
    const currentDate = moment();
    const getD = currentDate.format("D");
  
    //check if what is clicked matched today's date
    //current date 
    if(selectDate === currentDate.format("MM/D/YYYY")){
        $(".msgModal").modal();

        //show match getNum to match index-1
        $("#dinoFactHolder").html(dinosaurFacts[getNum-1]);
    }
    // //previous date
    // //whatever is clicked on, have to check to see if less than current num
    else if(parseInt(getNum) < parseInt(getD)){
        $(".msgModal").modal();
        $("#dinoFactHolder").html(dinosaurFacts[getNum-1]);
    }
    //for areas with no dates/num on it  
    else if(getNum == ""){
        $(".msgModal").modal();
        $("#dinoFactHolder").html("<p>No date here</p>");
    }
    //future dates = cannot show 
    else{
        $(".msgModal").modal();
        $("#dinoFactHolder").html("<p>Not time to see this fact yet</p>");
    }

});
