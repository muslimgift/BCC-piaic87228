var acity=["Karachi","Lahore","Islamabad","Faislabad"]
var o=["th","st","nd","rd"]
for (var i=0;i<acity.length;i++){
    if(i<3){
        document.write((i+1) + o[i+1] + " choice is " + acity[i] + "<br>")
    }
    else{
        document.write((i+1) + o[0] + " choice is " + acity[i] + "<br>")
    }
}