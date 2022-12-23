// const addToZero = (arr)=>{
//     done = arr.reduce((acc,cur)=> acc+cur)
//     return done == 0 
// }
const addToZero = (arr)=>{
    // console.log(arr);
    for (i = 0; i<arr.length;i++){
        let initial = arr[i]
        // console.log(initial);
        for (j = 1; j<arr.length;j++){
            if (initial+j==0){
                // console.log(initial+j);
                return true }}
            }
       return false
}

console.log(addToZero([1]));  
console.log(addToZero([-2, 2, 3]));  
