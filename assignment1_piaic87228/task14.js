var a=2,b=1
document.write("a is "+a+"<br>")
document.write("b is "+b+"<br>")
var result=--a - --b + ++b + b--;
//--a; 1
//--a - --b;  1
//--a - --b + ++b;  2
//--a - --b + ++b + b--;  3

document.write("result is"+result)
