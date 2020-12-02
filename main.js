function fun1(){
    var now=new Date();
    var s=now.getSeconds();
    var m=now.getMinutes();
    var h=now.getHours();
    var s1=s*6+180;
    var m1=m*6+180;
    var i=m/60;
    if(h>12){
        h=h-12;
    }
    var h1=(h+i)*30+180;
    console.log(h1,'ewr');
    console.log(s,m,h,s1,m1,h1,i,'asdad');
    var x=document.getElementById("sec");
    var y=document.getElementById("minute");
    var z=document.getElementById("hour");
    x.style.transform="rotate("+s1+"deg)";
    y.style.transform="rotate("+m1+"deg)";
    z.style.transform="rotate("+h1+"deg)";
}
setInterval(fun1,1000)
