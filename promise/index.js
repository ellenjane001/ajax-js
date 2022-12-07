let myPromise = new Promise((resolve, reject) => {
    let sum = 5 - 4
    if (sum > 1) {
        resolve(sum)
    } else {
        reject('sum is less than or equal to 1')
    }
})

myPromise.then((response) => {
    console.log(response)
}).catch(e => {
    console.log(e)
})