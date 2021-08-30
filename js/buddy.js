const lodeData = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}
lodeData();
const displayBuddy = data =>{
    const buddies = data.results
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        console.log(buddy.name.first)
        const p = document.createElement('p')
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`
        buddiesDiv.appendChild(p)
    }
}
