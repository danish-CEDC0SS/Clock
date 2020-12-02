// t=0;
function fun1(){
    var now=new Date();
    var s=now.getSeconds();
    var m=now.getMinutes();
    var h=now.getHours();
    // s=55;
    // if(t==0){
    //  s1=s*6+180;}
    // else{
    //     s1=s1+6;
    // }
    var g=now.getMilliseconds();
    var p= g/1000;
    s1=(s+p)*6+180;
    var j=s/60;
    var m1=(m+j)*6+180;
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
    // t=2;
}
setInterval(fun1,1)
