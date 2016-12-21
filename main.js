var sum = items.reduce(function(a,b){
  return a + b.price
}, 0)

var avg = sum/items.length

document.querySelector("#answer1").innerHTML = "$" + avg.toFixed(2)

var buget = items.filter(function(item){
  if(item.price > 14 && item.price < 18){
    return item.title
  }
})

var bugetToString = ""
buget.forEach(function(item){
  bugetToString += item.title + "\n"
})

document.querySelector("#answer2").innerHTML = bugetToString

var hasCode = items.filter(function(item){
  return item.currency_code === "GBP"
})

var strCode = hasCode[0].title
var strCode2 = hasCode[0].price

document.querySelector("#answer3").innerHTML = strCode + " " + "&#163;" + strCode2

var isWood = items.filter(function(item){
  var hasWood = false
  item.materials.forEach(function(item){
    if(item === "wood"){
      hasWood = true
    }
  })
  return hasWood
})

var strWood = ""
isWood.forEach(function(item){
  strWood += item.title + " " + "is made of wood" + "\n"
})

document.querySelector("#answer4").innerHTML = strWood

var eightMats = items.filter(function (item){
  return item.materials.length >= 8
})

var strEight = ""

eightMats.forEach(function(item){
  strEight += item.title + " has " + item.materials.length + "materials: \n \n"
  item.materials.forEach(function(item){
    strEight += item + "\n"
  })
  strEight += "\n"
})

document.querySelector("#answer5").innerHTML = strEight

var sellMade = items.filter(function(item){
  return item.who_made === "i_did";
})
var crafter = sellMade.length + " were made by their sellers"

document.querySelector("#answer6").innerHTML = crafter
