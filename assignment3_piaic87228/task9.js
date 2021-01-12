var a=[24,53,78,91,12]
var b=0
for(var i=0;i<a.length;i++){
    if(a[i]>b){
        b=a[i]
    }
}
document.write("array item : " + a + "<br>")
document.write("the largest number is " + b)
