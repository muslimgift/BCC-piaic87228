var color=["blue","brown","white","peach","grey","black"]
alert(color)
var color_end =prompt("what color you want to add at the end")
color.push(color_end)
alert(color)
color.unshift("yellow","purple")
alert(color)
color.shift()
alert(color)
color.pop()
alert(color)
var color_add=prompt("give which color you want to add")
var color_index=parseInt(prompt("at what index you want to add that color"))
color.splice(color_index,0,color_add)
alert(color)
var color_index1=parseInt(prompt("at which index you want to delete the color"))
var color_delete=parseInt(prompt("from that how many color you want to delete"))
var o=color_index1+color_delete
color.slice(color_index,o)
alert(color)
