// function show()
// {
//     var a = parseInt(document.getElementById("t1").value);
//     var b = parseInt(document.getElementById("t2").value);
//     var sum = a+b;
//     var res=document.getElementById("sumpos");
//     res.innerHTML ="SUM= "+ sum;
//     res.style.backgroundColor="green";
// }
 
// var x = 5;
// function fun(){
//   let x =10;
//    if(x>5){
//        let x =15;
//     console.log(x);
// }
// }
//     fun();
//     console.log(x);
var img = document.getElementById("image");

var imgs =["2.jpg","1.jpg","3.jpg","4.jpg"];
var counter = 0;
function next(){
    if (counter == imgs.length-1){
        counter = 0;
    }else{
counter++;}
img.src = imgs[counter];

}
function previous(){
    if (counter == 0){
        counter =  imgs.length;
    }
counter--;
img.src = imgs[counter];
}

