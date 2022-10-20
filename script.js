// https://superheroapi.com/api/access-token/id
//access-token is 822411945563454

//global variables
const access_token = '822411945563454'
const data_base = `https://superheroapi.com/api.php/${access_token}`

const imageDiv = document.getElementById('image')
const statsDiv = document.getElementById('stats')
const randomDiv = document.getElementById('random')
const nameDiv = document.getElementById('name')
const searchInputDiv = document.getElementById('searchInput')
const searchBtnDiv = document.getElementById('searchBtn')

const getSuperHeros = (id) => {
    fetch(`${data_base}/${id}`)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            // showHeroInfo(json)
            const superHero = json
            showHeroInfo(superHero)

            // const intelligence = `<h4> 🧠 Intelligence: ${json.powerstats.intelligence}</h4>`
            // const strength = `<h4> 💪 strength: ${json.powerstats.strength}</h4>`
            // const power = `<h4> ⚡ Power: ${json.powerstats.power}</h4>`
            nameDiv.innerText = `${json.name}`
            // imageDiv.innerHTML = `<img src='${json.image.url}'/> ${intelligence} ${strength} ${power}`
            // imageDiv.innerHTML = `<img src='${json.image.url}'/> ${stats}`
            // document.getElementById('image').innerHTML += `<img src='${json.image.url}' height= 200px width=200px/>`
        })
    // .then(json=>console.log(json.image.url))
    // .then(json=>{
    //     image.innerHTML=`<img src='${json.image.url}'/>`
    // })
}

const statToEmoji = {
    intelligence: '🧠',
    durability: '🏋️‍♂️',
    strength: '💪',
    speed: '⚡',
    power: '♨',
    combat: '⚠'
}

const showHeroInfo = (character) => {
    // const name = nameDiv.innerText = `${character.name}`
    const img = `<img src="${character.image.url}"/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<h4>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</h4>`
    }).join('')
    // imageDiv.innerHTML = `${img} ${stats}`
            // imageDiv.innerHTML = `<img src='${img}' opacity=1/>`
    imageDiv.innerHTML = `${img}`
    statsDiv.innerHTML = `${stats}`
    // console.log(stats.join(''))
    // return stats.join('')
}
// ............access_token..................access_token..................access_token.charAt......access_token.slice...access_token.split.apply.call.bind.call.bind......access_token......access_token.split.apply.call.bind...access_token.split.apply......access_token.split.apply...access_token.split.apply.call.........access_token.split.apply.call.bind...access_token...access_token..................access_token......access_token.................................access_token..............................access_token..........................................................................................................................................................................................................................................................


const getSearchSuperHero = (name) => {
    fetch(`${data_base}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            showHeroInfo(hero)
            nameDiv.innerText = `${hero.name}`
            // const intelligence = `<h4> 🧠 Intelligence: ${hero.powerstats.intelligence}</h4>`
            // const strength = `<h4> 💪 strength: ${hero.powerstats.strength}</h4>`
            // const power = `<h4> ⚡ Power: ${hero.powerstats.power}</h4>`

            // console.log(hero)
            // imageDiv.innerHTML = `<img src='${hero.image.url}'/> ${intelligence} ${strength} ${power} `
        })
}

const superHeroID = () => {
    id = Math.ceil(Math.random() * 731)
    console.log(id)
    return id
}
searchInputDiv.addEventListener('keyup', (enter) => {
    if (enter.keyCode === 13) {
        console.log("enter clicked")
        // searchBtnDiv.click()
        return getSearchSuperHero(searchInputDiv.value)
    }
})
// searchBtnDiv.addEventListener('keyup', (alt)=>{
//     if(alt.keyCode===17){
//         randomDiv.click()
//         console.log("alt")
//     }
// })

// if(alt.keyCode===18){
//     console.log("alt")
// }

randomDiv.onclick = () => getSuperHeros(superHeroID())
searchBtnDiv.onclick = () => getSearchSuperHero(searchInputDiv.value)