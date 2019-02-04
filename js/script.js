function getclock(){
var h, m,s, days, mon, year,d, fulldate,suffix;
    var months=["January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"];
d=new Date();
days= d.getDate();
mon= months[d.getMonth()];
year= d.getFullYear();
h= d.getHours();
m= d.getMinutes();
s= d.getSeconds();
    if(h >= 12){
        suffix="PM";
    }else{
        suffix="AM";
    }

    if(h != 12){
        h %= 12;
    }
 fulldate = mon+" "+ days + ", " + year + "<br/> " +h + ":" + m + ":"+ s + " "+ suffix;
document.getElementById("date").innerHTML = fulldate;
setTimeout(getclock);
}
getclock();

