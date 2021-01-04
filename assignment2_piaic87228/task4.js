var a=prompt("enter english paper number")
var b=prompt("enter urdu paper number")
var c=prompt("enter math paper number")
var total=prompt("enter total number")
var total1=Number(total)
var obtain=Number(a)+Number(b)+Number(c)
var percentage=(obtain/total1)*100
document.write("Total marks: "+total1+"<br>")
document.write("Marks obtained: "+obtain+"<br>")
document.write("Percentage: "+percentage+"%"+"<br>")
if (percentage>=80){
	document.write("Grade: A-one"+"<br>")
	document.write("Remarks : Excellent")
}
else if (percentage>=70){
	document.write("Grade: A"+"<br>")
	document.write("Remarks : Good")
}
else if (percentage>=60){
	document.write("Grade: B"+"<br>")
	document.write("Remarks : You need to improve")
}
else if (percentage<60){
	document.write("Grade: Fail"+"<br>")
	document.write("Remarks : Sorry")
}
