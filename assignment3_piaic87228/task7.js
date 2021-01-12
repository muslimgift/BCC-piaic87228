
var a = [10,20,4,40,60,70]
var b=[1,2,3,4,5,6,7,8,9,10]
var arr1=[]
arr1.push(a,b)
var arr2=[]
for (var i =0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i])==-1){
        arr2.push(arr1[i])
    }
}
document.write(arr2)