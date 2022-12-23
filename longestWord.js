const findLongestWord =(arr)=>{
    let initalLength = arr[0].length
    for (i=0;i<arr.length;i++){
        if (initalLength<arr[i].length){
            initalLength = arr[i].length
        }
    }
    return initalLength

}
console.log(findLongestWord(["hi", "hello",'jefkdokfldkf']))
