var a="The quick brown fox jumps over the lazy dog"
var b=a.replace(/the/gi,"1")
var count=0
for (var i=0;i<b.length;i++){
if(b[i]=="1"){
count+=1
}
}
document.write("there are " + count + " accurence of \"the\"")