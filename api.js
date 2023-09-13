URL = "https://pokeapi.co/api/v2/pokemon/ditto"
const contenedor = document.getElementById('Data')


fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        apiData.innerText = JSON.stringify(data);
    })
    .catch(e => console.error(new Error(e)));



