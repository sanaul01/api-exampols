const loadData = () =>{
    fetch(`https://randomuser.me/api`)
    .then(res => res.json())
    .then(data => displayRandom(data))
}
loadData();

const displayRandom = data =>{
    const randoms = data.results
    const randomDiv = document.getElementById('random');
    for(const random of randoms){
        console.log(random.name.first)
        const p = document.createElement('p')
        p.innerText = `name: ${random.name.first} 
        <img src="https://randomuser.me/api/portraits/thumb/women/72.jpg" alt=">
        `
        randomDiv.appendChild(p)

    }
}