function fun1(){
    var now=new Date();
    var s=now.getSeconds();
    var m=now.getMinutes();
    var h=now.getHours();
    let j=s/60;
    let m1=(m+j)*6+180;
    let i=m/60;
    if(h>12){
        h=h-12;
    }
    var h1=(h+i)*30+180;
    console.log(h1,'ewr');
    var y=document.getElementById("minute");
    var z=document.getElementById("hour");
    y.style.transform="rotate("+m1+"deg)";
    z.style.transform="rotate("+h1+"deg)";
}
//Seprate Function is added to improve processor load.
function fun2(){
    let now=new Date();
    let g2=document.getElementById("digital");
    let arr=Date().split(" ");
    g2.innerHTML=arr[4];
    let s=now.getSeconds();
    let g=now.getMilliseconds();
    let p= g/1000;
    let s1=(s+p)*6+180;
    let x=document.getElementById("sec");
    x.style.transform="rotate("+s1+"deg)";
}
setInterval(fun2,1)
setInterval(fun1,1000)
