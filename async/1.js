let firstPromise = new Promise((resolve, reject) => {
    let sum = 8 + 5
    setTimeout(() => {
        resolve(sum)
    }, 3000);
})

firstPromise.then((data) => {
    console.log('promise')
    console.log(data)
}).catch(e => {
    console.log(`Error: ${e}`)
})

console.log('****** DEBUG ******')