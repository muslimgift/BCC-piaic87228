var celsius=prompt("enter temprature in celcius")
celsius=Number(celsius)
var farhenhite=(celsius*(9/5))+32;
document.write(celsius+"C is "+farhenhite+"F"+"<br>")
farhenhite=prompt("enter temprature in farhenhite")
farhenhite=Number(farhenhite)
celsius=((farhenhite-32)*5/9);
document.write(farhenhite+"F is "+celsius+"C")
