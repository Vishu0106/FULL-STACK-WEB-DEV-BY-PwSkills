var circles = document.querySelectorAll('.circle');
var lines = document.querySelectorAll('.bar');
let count=1;
function next()
{
    if(count>0&&count<=circles.length-1)
    {
    circles[count].classList.add('filled');
    lines[count-1].classList.add('filled-bar');
    circles[count].innerHTML=`<i id="img" class="fa-solid fa-check" style="color: #f5f0f0;"></i>`;
    count++;
    if(count-1==circles.length-1)
    {
        setTimeout(function exec()
        {
            const box = document.getElementById("dailoguebox");
        box.style.display="flex";
        const crossbtn = document.getElementById("cross");
        crossbtn.addEventListener('click',()=>{
            box.style.display="none";
        })
        },2500)
    }
    }
}
const prevbtn = document.getElementById('prevbtnn');
prevbtn.addEventListener('click',() =>{
    if(count<=1)
    {
    }
    else{
    count--;
    circles[count].classList.remove('filled');
    lines[count-1].classList.remove('filled-bar');
    var img = circles[count].querySelector('i');
    circles[count].removeChild(img);
    }


});
