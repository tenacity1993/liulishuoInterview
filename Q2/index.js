const originalData = [
    { name: 'jch', age: 30, score: 90, sex: 1, lesson: 'math' },
    { name: 'oh', age: 31, score: 80, sex: 1, lesson: 'math' }, 
    { name: 'jia', age: 27, score: 70, sex: 0, lesson: 'math' }, 
    { name: 'jch', age: 30, score: 80, sex: 1, lesson: 'english' }
  ];
// 请用编写程序
// 给定age = x， 返回所有age大于x (不含等于) 的人的平均分，并按lesson和sex进行先后归类
// 比如
// returns { math: { 0: 73, 1: 82 }, english: { 0: 65, 1: 43 } }
function cal(age){
    let res = {}   
    let filterMath = []
    let avgMath0 = 0
    let avgMath1 = 0
    let filterEnglish = []
    let avgEnglish0 = 0
    let avgEnglish1 = 0
    originalData.forEach((item, index, array) => {
        if(item.age > age) {
            if(item.lesson === 'math') {
                filterMath.push(item)
            } else if(item.lesson === 'english') {
                filterEnglish.push(item)
            }
        }
    })
   // console.log(filterMath)
   // console.log(filterEnglish)
   let temp0 = 0
   let temp1 = 0
   let index = 0
   let filterMathLen = filterMath.length
   for(let i = 0; i < filterMathLen; i++) {
       if(filterMath[i].sex === 0) {
           temp0 += filterMath[i].score
           index++           
       } else {
           temp1 += filterMath[i].score        
       }
   }
   avgMath0 = index === 0 ? 0 : temp0 / index
   avgMath1 = index === filterMathLen ? 0 : temp1 / (filterMathLen - index)

   temp0 = 0
   temp1 = 0
   index = 0
   let filterEnglishLen = filterEnglish.length
   for(let i = 0; i < filterEnglishLen; i++) {
       if(filterEnglish[i].sex === 0) {
           temp0 += filterEnglish[i].score
           index++
       } else {
           temp1 += filterEnglish[i].score
       }
   }
   avgEnglish0 = index === 0 ? 0 : temp0 / index
   avgEnglish1 = index === filterEnglishLen ? 0 : temp1 / (filterEnglishLen - index)
   // returns { math: { 0: 73, 1: 82 }, english: { 0: 65, 1: 43 } }

   res = {
       math: {
           0: avgMath0,
           1: avgMath1
       },
       english: {
           0: avgEnglish0,
           1: avgEnglish1
       }
   }

   console.log(res)

}
cal(30)