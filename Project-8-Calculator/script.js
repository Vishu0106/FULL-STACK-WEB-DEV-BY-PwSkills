
let resultmsg = document.getElementById("result");
let para = document.getElementById("typingshowmsg");

// intializing operators
let addfun = document.getElementById("addbtn");
addfun.addEventListener("click",() => { resultmsg.innerText += "+";
 });


 let minusfun = document.getElementById("minusbtn");
minusfun.addEventListener("click",() => { resultmsg.innerText += "-";
 });

 
 let divfun = document.getElementById("dividebtn");
 divfun.addEventListener("click",() => { resultmsg.innerText += "/";

  });


  let mulfun = document.getElementById("mulbtn");
mulfun.addEventListener("click",() => { resultmsg.innerText += "*";
 });


 let modfun = document.getElementById("modbtn");
modfun.addEventListener("click",() => { resultmsg.innerText += "%";
 });


 let onefun = document.getElementById("onebtn");
onefun.addEventListener("click",() => { resultmsg.innerText += "1";
 });


 let twofun = document.getElementById("twobtn");
twofun.addEventListener("click",() => { resultmsg.innerText += "2";
 });


 let threefun = document.getElementById("threebtn");
threefun.addEventListener("click",() => { resultmsg.innerText += "3";
 });


 let fourfun = document.getElementById("fourbtn");
fourfun.addEventListener("click",() => { resultmsg.innerText += "4";
 });



 let fivefun = document.getElementById("fivebtn");
fivefun.addEventListener("click",() => { resultmsg.innerText += "5";
 });





 let sixfun = document.getElementById("sixbtn");
sixfun.addEventListener("click",() => { resultmsg.innerText += "6";
 });




 let sevenfun = document.getElementById("sevenbtn");
sevenfun.addEventListener("click",() => { resultmsg.innerText += "7";
 });




 let eightfun = document.getElementById("eightbtn");
eightfun.addEventListener("click",() => { resultmsg.innerText += "8";
 });






 let ninefun = document.getElementById("ninebtn");
ninefun.addEventListener("click",() => { resultmsg.innerText += "9";
 });





 let zerofun = document.getElementById("zerobtn");
zerofun.addEventListener("click",() => { resultmsg.innerText += "0";
 });





 let dotfun = document.getElementById("dotbtn");
dotfun.addEventListener("click",() => { resultmsg.innerText += ".";
 });







 let clearfun = document.getElementById("clearbtn");
clearfun.addEventListener("click",() => { resultmsg.innerText = "";
para.innerText = "0";

 });

 let backSpacefun = document.getElementById("backspacebtn");
backSpacefun.addEventListener("click",() => {
    let len = resultmsg.innerText.length;

    resultmsg.innerText = resultmsg.innerText.substring(0,len-1);

});

// // implimenting Equals function
const equalsfunc = document.getElementById("finalbutton");
equalsfunc.addEventListener('click',() => {
  equalsfunction(resultmsg.innerText);
});

function equalsfunction(resulttext)
{
  para.innerText = resulttext;
    let len = resulttext.length;
    let operator;
     for(let i=0;i<len;i++)
     {
         if(resulttext.charAt(i)=="+"||resulttext.charAt(i)=="+"||resulttext.charAt(i)=="-"||resulttext.charAt(i)=="*"||resulttext.charAt(i)=="/"||resulttext.charAt(i)=="%")
         {
            operator = resulttext.charAt(i);
            break;
         }
     }
     let list = resulttext.split(operator);
     switch(operator)
     {
        case '-':
        {
          let finalresult = Number(list[0])-Number(list[1]);
          resultmsg.innerText = finalresult;
          break;
        }
        case '+':
        {
          let finalresult = Number(list[0])+Number(list[1]);
          resultmsg.innerText = finalresult;
          break;
        }
        case '*':
        {
          let finalresult = Number(list[0]) * Number(list[1]);
          resultmsg.innerText = finalresult;
          break;
        }

        case '/':
        {
            if(Number(list[1]==0))
            {
                resultmsg.innerText = "infinte";
                break;
            }
            else{
          let finalresult = Number(list[0]) / Number(list[1]);
          resultmsg.innerText = finalresult;
          break;
            }
        }
        case '%':
            {
              let finalresult = Number(list[0]) % Number(list[1]);
              resultmsg.innerText = finalresult;
              break;
            }
     }
    // resultmsg.innerText = resulttext;
}
