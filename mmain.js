
//when clicking like button this funtion increases the counting in the pargraph likes
var counter=0;
function count (){
    var likes = document.querySelector(".likes-count");
    counter = counter + 1;
    likes.innerText = counter + " ";
}