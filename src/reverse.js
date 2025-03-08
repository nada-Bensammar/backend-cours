function reverseList(list){
    let tempVal ;

    // use for loop to reverse the list.
    
    let reversedList = [];

    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }

    return reversedList
}

console.log (reverseList([5,4,3,7]))