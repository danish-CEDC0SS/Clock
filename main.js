// a=180;
function fun1(){
    // a=a+6;
    var now=new Date();
    var s=now.getSeconds();
    var m=now.getMinutes();
    // var h=now.getHours();
    var s1=s*6+180;
    var m1=m*6+180;
    console.log(s,m,s1,m1,'asdad');
    // var h1=h*
    var x=document.getElementById("sec");
    var y=document.getElementById("minute");
    // var x=document.getElementById("sec");
    x.style.transform="rotate("+s1+"deg)";
    y.style.transform="rotate("+m1+"deg)";
}
setInterval(fun1,1000)
