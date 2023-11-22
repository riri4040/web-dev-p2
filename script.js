let score = 0;
let picked = false;
let justPickedPic = "";
let justPickedId = "";
function pressed(image,card){
    x = "";
    c = "";
    score++;
    document.getElementById(card).src = image;
    if(picked === false){
        justPickedPic = image;
        justPickedId = card;
        picked = true;
    } else{
        if(justPickedPic === image){
            document.getElementById(card).src = image;
            document.getElementById(justPickedId).src = image;
            picked = false;
            justPicked = "";
            justPickedId = "";
        }else{
            setTimeout(()=>{
            let x = document.getElementById(justPickedId);
            x.src = "back.jpg";
            let c = document.getElementById(card);
            c.src = "back.jpg";
            picked = false;
            
            },600);
        }
    }
    update();
}
function update(){
    y = document.getElementById("score");
    y.innerHTML = "Score:" + score;
}
document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('reset');
    button.addEventListener('click', function() {
        location.reload();
    });
});