const divelem = document.getElementById('info')
const inputelem = document.querySelector('.search')
let api ={
     url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '26c4d8ad14b57209671494df9bd9fcb9'
}

const btn = document.getElementById('search')
btn.addEventListener('click',()=>{
    divelem.innerHTML =''
    let country = inputelem.value
    fetch(`${api.url}${country}&&appid=${api.key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
       divelem.insertAdjacentHTML('beforeend',
       `<h3>status:${data.weather[0].main}</h3>
            <h1>${data.main.temp}<span class="badge bg-secondary">C</span></h1>`)
    })
    clear()
})
function clear()
{
    inputelem.value = ''
}
inputelem.addEventListener('keyup',(event)=>
{
    if(event.keyCode == 13)
    {
        divelem.innerHTML =''
    let country = inputelem.value
    fetch(`${api.url}${country}&&appid=${api.key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
       divelem.insertAdjacentHTML('beforeend',
       `<h3>status:${data.weather[0].main}</h3>
            <h1>${data.main.temp}<span class="badge bg-secondary">C</span></h1>`)
    })
    clear()
    }
})