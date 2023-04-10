const fs = require('fs');
let input = fs.readFileSync('Range-data.txt','utf-8');
const rangeList = input.split('\n').map(String);


const transformation = rangeList.map((item) =>{
    return item.split(',')
               .flatMap(elem => elem.split('-'))
               .map(Number)
})
const numGroup = transformation.reduce((acc, curr) =>{
    const [f1,s1,f2,s2] = curr;
    if (f2>=f1 && s2<=s1 || f2<=f1 && s2>=s1){
        acc.numGroup++
    }
    return acc;
},{ numGroup: 0 })
console.log(numGroup)

const group = transformation.reduce((acc, curr) =>{    
        const [f1,s1,f2,s2] = curr;
        if (s1>=f2 && f1<=s2 ){
            acc.group++
            console.log(acc)
        }
        return acc;
    },{ group: 0 })
console.log(group)

