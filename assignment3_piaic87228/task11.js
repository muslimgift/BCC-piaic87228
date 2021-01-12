var A=["cake","apple pie","cookie","chips","patties"]
var b=prompt("welcome to ABC bakery what do you want to order sir/mam")
if(A.indexOf(b)!=-1){
    alert(b +" is available at index " + A.indexOf(b) + " in our bakery")
}
else{
    alert("we are sorry , " + b + " is not available in our bakery")
}