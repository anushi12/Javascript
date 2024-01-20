// for , break, continue

for(let i = 1; i <= 10; i++){
    //console.log(i)
}

for(let i = 1; i <= 10; i++){
    if(i == 5){
        //console.log("5 detected")
    }
   // console.log(i)
}

const arr = ["WoderWoman", "ironman", "hulk"]
let n = arr.length
for(let i = 0; i < n; i++){
    //console.log(arr[i])
}


// break
for(let i = 1; i <= 10; i++){
    if(i == 5){
        //console.log("5 detected")
        break;
    }
    //console.log(i)
}

// continue
for(let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("5 detected")
        continue;
    }
    console.log(i)
}