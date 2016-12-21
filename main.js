var sum = items.reduce(function(a,b){
  return a+b.price
}, 0)

var avg = sum / items.length

document.querySelector("#answer1").innerHTML = "$" + avg.toFixed(2)

var newArr = items.filter(function(item){
  var str = ""
  if(item.price >= 14 && item.price <= 18)
      return item.title.toString(str)

})
document.querySelector("#answer2").innerHTML = newArr

//
// var thirdArr = items.filter(function(item){
//   if(item.currency_code == "GBP"){
//     return  item.title && item.price
//   }
//
// })
// document.querySelector("#answer3").innerHTML = thirdArr
//
// var fourthArr = items.filter(function(item){
//   if(item.materials containing"wood")
// })
