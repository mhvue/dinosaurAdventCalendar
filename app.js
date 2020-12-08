const imgs = {
    dino1: "<img src='./images/triceratops.jpg'>",
    dino2: "<img src='./images/Hesperonychus.jpg'>",
    dino3: "<img src='./images/Allosaurus.jpg'>",
    dino4: "<img src='./images/Brachiosaurus.jpg'>",
    dino5: "<img src='./images/skeleton-ceratosaurus.jpg'>",
    dino6: "<img src='./images/skeleton-triceratops.jpg'>",
    dino7: "<img src='./images/fossils-heterodontosaurus.jpg'>",
    dino8: "<img src='./images/Heterodontosaurus.jpg'>",
    dino9: "<img src='./images/Stego.jpg'>",
    dino10: "<img src='./images/Saltopus.jpg'>",
    dino11: "<img src='./images/Dreadnoughtus.jpg'>",
    dino12: "<img src='./images/Sauropods.jpg'>",
    dino13:"<img src='./images/dinosaur-footprints.jpg'>",
}

const links = {
    dino1: "<a href = 'https://www.amnh.org/explore/ology/paleontology/ask-a-scientist-about-dinosaurs' target='_blank'>Learn More</a>",
    dino2: "<a href = 'https://pbskids.org/dinosaurtrain/games/fossilfinder.html' target='_blank'>Fossil Game Here</a>",
    dino3: "<a href = 'https://www.amnh.org/explore/ology/paleontology/dress-up-a-t.-rex' target='_blank'>Click Here to Color T-Rex</a>",
    dino4: "<a href = 'https://pbskids.org/dinosaurtrain/games/roarinrelay.html' target='_blank'>Let's race a dinosaur!</a>",
    dino5: "<a href = 'https://youtu.be/G3gXWDYpLAE' target='_blank'>Dinosaur Youtube Video</a>",
    dino6: "<a href = 'https://youtu.be/UrousrAIfYc' target='_blank'>Brachiosaurus Youtube Video</a>",
    dino7: "<a href = 'https://youtu.be/a73zEfwFN-s' target='_blank'>Velociraptors Youtube Video</a>",
    dino8: "<a href = 'https://youtu.be/5Ier8c9WFzE' target='_blank'>Dinosaurs in Arctic Youtube Video</a>",

}

const dinosaurFacts = [
    "Dinosaurs ruled the Earth for over 160 million years <br> Watch to learn more! " + links.dino5,
    "A person who studies dinosaurs is known as a paleontologist. Click on link to learn from a paleontogist: "+ links.dino1,
    "Birds' ancestors are dinosaurs. Back then, some dinosuars have feathers",
    "The name dinosaur means 'frighteningly big lizard",
    "Dinosaur footprints have been found all over the world!" + imgs.dino13,
    "Dreadnoughtus was the largest dinosaur." + imgs.dino11 + "<br>Picture by: By ArcaneHalveKnot - https://commons.wikimedia.org/wiki/File:Dreadnoughtus_Published_Reconstruction.jpg",
    "Velociraptors is pronounce 'vell-os-eeraptor' Let's watch to learn more: " + links.dino7,
    "Triceratops had nose horns they used for defence." + imgs.dino1 + "<br>Picture and info by https://www.kids-dinosaurs.com/dinosaurs-triceratops.html",
    "T. Rex had quite a large brain for a dinosaur."+
    "That help T.Rex see and smell-it may have even had telescopic vision. Want to color a T-Red?" + links.dino3,
    "Theropods means beast foot. It is a group of dinosaurs that has 3 toes for each leg and very short arms. For example: T-Rex",
    "Sauropods are a group of dinosaurs that have long necks, long tails, and they walked on all four feet."+ imgs.dino12 + "<br>Picture by: By DiBgd, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2443100",
    "Some dinosarus run as fast as 25 miles per minute! Want to play a game racing the dinosaurs?"+ links.dino4,
    "First dinosaur bones discovered 1677 by Robert Plot -https://www.discovery.com/science/First-Dinosaur-Fossil-Name",
    "Dinosaurs extinct about 65 million years ago -https://www.kids-dinosaurs.com/dinosaur-extinction.html",
    "The smallest meat eating dinosaurs are Hesperonychus." + imgs.dino2 + "<br>Picture By Nobu Tamura (http://spinops.blogspot.com)",
    "Allosaurus existed before T.Rex. It's also very big dinosaurs that many other dinosaurs were scared of. No dinsoaurs hunted it...it's like a cousin to the T.Rex" + imgs.dino3 + "<br>By Fred Wierum - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=47577505",
    "Brachiosaurus name means 'arm-reptiles. Stay tune for tomorrow to learn more about these guys!'" + imgs.dino4 + "<br>-Info https://www.kids-dinosaurs.com/brachiosaurus.html. Picture: By Богданов dmitrchel@mail.ru",
    "Let's learn more about the Brachiosaurus! (click to yesterday's date for the picture) "+ links.dino6,
    "Bone of a Ceratosaurus. Most of the time, they ate fish and crocodiles. Makes sense as they were good swimmers!" + imgs.dino5,
    "Bone of a Triceratops. They have a total of 985 bones!" + imgs.dino6,
    "Joke: What did the dinosaur say when the volacano exploded?....." + "<br> Answer: Have a Lava-ly day! <br> There were a lot of volcanos when dinosuars were alive.",
    "This is a Heterodontonsaurus. The name means different tooth lizard." + imgs.dino8 + "<br>Picture: By FunkMonk (Michael B. H.) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=44921379",
    "Fossils are remains of ancient animals. It helps us learn about them. Let's play a fossil game! " + links.dino2,
    "Here is the Heterodontonsaurus fossil" + imgs.dino7,
    "Mery Christmas!!<br> Did dinosaurs live in the cold too? yes! there are some bones found in the Arctic." + links.dino8,
    "Dinosaurs did not live in oceans, lakes or rivers. Most can paddle through water.",
    "The smallest dinosuar is Lesothosaurus, which is the size of big chickens. -https://www.scholastic.com/teachers/articles/teaching-content/dinosaurs-smallest-largest/",
    "Guess how tall T. Rex was? <br> He was 12 feet tall. -https://www.scholastic.com/teachers/articles/teaching-content/dinosaurs-smallest-largest/",
    "Did dinosaur lay eggs?" + "<br> Yes they did! Dinosaurs lay about 3-5 eggs. Sometime more.",
    "The Stegosaurus had a brain the size of a walnut and is considered a dumb dinosaur.." + imgs.dino9 + "<br>Info by https://www.thedinosaurmuseum.com/dino-facts. Picture by: By Charles R. Knight. Published in Gilmore, C.W. (1914).",
    "The oldest dinosaur is Saltopus. It lived for 245 million years ago." + imgs.dino10 + "<br>Picture by By Conty - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=6812666",
];

const date = new Date();

//get year
const year = date.getFullYear();

let getDays = "";
let tdData= "";

//CALENDAR
//displaying month and year 
$("h2").html("December " + year) 
//generating dates
for(let i = -1; i <= 33; i++){
    getDays = i;
    tdData = $("<td>").html(getDays).attr("data-date",`12/${i}/${year}`).attr("id","td"+i)

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

//trying to get the green background to persist
// const numbers =[];
// const compareDays = moment().format("MM/D/YYYY") > moment().subtract(30,"days").format("MM/D/YYYY")
// for(let j = 0; j < numbers.length; j++){
//     numbers[i]
//     if(compareDays == true){
//         $("#td"+numbers[i]).addClass("clicked")
//     }
    
// }

// console.log(numbers)

//highlight today's date
function getToday(){
    const getToday = moment().format("MM/D/YYYY");
    if(getToday == $("#td"+moment().format("D")).attr("data-date")){
        $("#td"+moment().format("D")).addClass("clickMe")
    }
    

}
getToday();


//Display Facts
$("td").on("click",function(){
    //$this is grabbing the id per day 
    const selectDate = $(this).attr("data-date");
    const getNum= $(this).html();
    const currentDate = moment();
    const getD = currentDate.format("D");
    const getID= $(this).attr("id")
 

    //check if what is clicked matched today's date
    //current date 
    if(selectDate == currentDate.format("MM/D/YYYY")){
        $(".msgModal").modal();
        $("#"+getID).removeClass("clickMe").addClass("clicked")
        //show match getNum to match index-1
        $(".dinoFactHolder").html(dinosaurFacts[getNum-1])
    }
     //previous date
    //whatever is clicked on, have to check to see if less than current num
    else if(parseInt(getNum) < parseInt(getD)){
        $(".msgModal").modal();
        $("#"+getID).addClass("clicked")
        $(".dinoFactHolder").html(dinosaurFacts[getNum-1]);
    }

    //for areas with no dates/num on it  
    else if(getNum == ""){
        $(".msgModal").modal();
        $(".dinoFactHolder").html("No date here");
    }
    //future dates = cannot show 
    else{
        $(".msgModal").modal();
        $(".dinoFactHolder").html("Not time to see this fact yet");
    }

});
