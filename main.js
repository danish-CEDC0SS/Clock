a=180;
function fun1(){
    a=a+6;
    var x=document.getElementById("hour");
    x.style.transform="rotate("+a+"deg)";
}
setInterval(fun1,1000)