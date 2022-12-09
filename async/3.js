fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log('hello')
        return response.json()
    }
    ).then(data => {
        console.log(data)
    })