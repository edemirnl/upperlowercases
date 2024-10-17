let sentence = "sHoRt AnD sToUt"

function uplowcase(st){
    let arr = st.toLowerCase().split(' ')
    for(let i=0 ; i<arr.length ; i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
    }
    return arr.join(' ')
}
console.log(uplowcase(sentence))