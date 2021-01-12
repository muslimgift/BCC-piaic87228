var city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selectedcity=[]
var a=prompt("enter first city you wamt to select "+city)
var b=prompt("enter second city you wamt to select "+city)
var c=prompt("enter third city you want to select "+city)
selectedcity.push(a,b,c)
document.write("Cities list" + "<br>"+ city + "<br>" + "<br>" + "Selected cities list" + "<br>" + selectedcity)