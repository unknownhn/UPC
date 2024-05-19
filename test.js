/////////////Task1
function task1(obj,a,b){
    obj[a]=b
    return obj
}
console.log(task1({},"Burust",300))

//////////////////Task2
function task2(v){
//     let res=0
//    let v=a.map((e) => {
//     return res+e.score
//    })
  return v.reduce((a,b) => {
    return a+b.score
  }, 0)
}
console.log(task2([{title:"N",score:2},{title:"A",score:2},{title:"T",score:2}]));