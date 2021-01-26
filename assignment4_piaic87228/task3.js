var a=prompt("enter password")
if(!a[7]||Number(a[0])){
alert("enter correct password")
}
else{
	var b=false
	var c=false
	var d=false
	for (var i=0;i<a.length;i++){
		for(var j=65;j<91;j++){
			if(a[i]==String.fromCharCode(j)){
				b=true
				break
		}
		for(var k=97;k<123;k++){
			if(a[i]==String.fromCharCode(k)){
				c=true
				break
		}
		}
		}
		for(var s=0;s<10;s++){
			if(a[i]==s){
			d=true
			break
		}
	}
	}
}
if(b==false || d==false || c==false){
	alert("enter correct password")
}
