var counting=[]
var reversecounting=[]
var even=[]
var odd=[]
var series=[]
for(var i=0;i<16;i++){
    counting.push(i)
}
for(var i=10;i>0;i--){
    reversecounting.push(i)
}
for(var i=0;i<21;i=i+2){
    even.push(i)
}
for(var i=1;i<20;i=i+2){
    odd.push(i)
}
for(var i=2000;i<22000;i=i+2000){
    series.push(i)
}
document.write("counting: " + counting + "<br>" + "reverse counting : " + reversecounting + "<br>" + "even : " + even + "<br>" + "odd: " + odd + "<br>" + "series: " + series )