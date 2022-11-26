const xhr = new XMLHttpRequest
const URL = 'https://api.getfestivo.com/v2/countries/?api_key=096402a9b409a042484d32f073c9c6ac'
xhr.open('GET', URL)
xhr.setRequestHeader('Content-type', 'application/json')
xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        let countries = JSON.parse(xhr.responseText)
        for (let i in countries) {
            let opt = document.createElement('option')
            opt.appendChild(document.createTextNode(countries[i].name))
            opt.value = countries[i].codeAlpha2
            document.getElementById('select-field').appendChild(opt)
        }
    }
}
xhr.send()

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


document.getElementById('select-field').onchange = (e) => {
    xhr.open('GET', `${URL.replace('countries', 'holidays')}&country=${e.target.value}&year=2021`)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            let holidays = JSON.parse(xhr.responseText).holidays
            let parent = document.querySelector('table tbody')
            console.log(parent)

            for (list in holidays) {
                let tr = document.createElement('tr')
                let tdName = document.createElement('td')
                let tdDate = document.createElement('td')
                tdName.appendChild(document.createTextNode(holidays[list].name))
                tdDate.appendChild(document.createTextNode(`${monthNames[new Date(holidays[list].date).getMonth()]} ${new Date(holidays[list].date).getDay()}`))
                tr.appendChild(tdName)
                tr.appendChild(tdDate)
                parent.appendChild(tr)
            }
        }
    }
    xhr.send()
}