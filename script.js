let input = document.getElementById("name")

let formulario = document.querySelector('form')

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    const pokemon = input.value.trim().toLowerCase()

    if (!pokemon) {
        document.getElementById("estadisticas").innerHTML = "<li>Ingresa un nombre de Pokemon</li>"
        return
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res=>{
        res.json()
        .then(pokemon => {
            let estadisticas = pokemon.stats
            let texto = ''
            for (estadistica of estadisticas) {
                texto += `
                <li> 
                ${estadistica.stat.name} : ${estadistica.base_stat}
                </li>`
    
            }
            
            document.getElementById("estadisticas").innerHTML =  texto      
    
    
        })
    })
    .catch(
        error => console.log(error)
    )

})
