const tasks = [
    {
        "index": 1,
        "name" : "Learn web programming",
        "checked": ""
    },
    {
        "index": 2,
        "name" : "Wash dishses",
        "checked": ""
    },
    {
        "index": 3,
        "name" : "Fixing transparent background",
        "checked": ""
    },
    {
        "index": 4,
        "name" : "Making fried rice",
        "checked": ""
    }
]

const statusList = [
    {
        "name": "Pending",
        "background": "#FD8A8A",
        "color": "#B81212"
    },
    {
        "name": "Waiting",
        "background": "#FEC868",
        "color": "#D69218"
    },
    {
        "name": "Done",
        "background": "#BFDB38",
        "color": "#197F7F"
    }
]

const projects = [
    {
        "symbol": "GH",
        "name" : "Green House",
        "url": "img/project1.jpg"
    },
    {
        "symbol": "CP",
        "name" : "Cyber Punk",
        "url": "img/project2.jpg"
    },
    {
        "symbol": "EC",
        "name" : "Easy Crypto",
        "url": "img/project3.jpg"
    },
    {
        "symbol": "TA",
        "name" : "Travel App",
        "url": "img/project4.jpg"
    },
    {
        "symbol": "LP",
        "name" : "Landing Page",
        "url": "img/project5.jpg"
    },
    {
        "symbol": "8+",
        "name" : "",
        "url": "img/project6.jpg"
    },
]


projects.forEach(obj => {
    document.querySelector('.project-cards').innerHTML += `
        <div class="card">
            <div class="card-picture" style="background-image: url('${obj.url}'); background-size: cover;">
                <h1>${obj.symbol}</h1>
            </div>
            <div class="card-text">
                <p>${obj.name}</p>
            </div>
        </div>
    `
})

tasks.forEach(obj => {
    const randIndex = Math.floor(Math.random() * statusList.length)

    document.querySelector('.todos-list ul').innerHTML +=`
        <li class="todo">
            <div class="item-input">
                <input class="checkbox__input" type="checkbox" id="checkbox${obj.index}" ${obj.checked ? "checked" : ""}>
                <span class="checkbox__inner"></span>
                <label for="checkbox${obj.index}">${obj.name}</label>
            </div>

            <label style="background-color: ${statusList[randIndex].background}; color: ${statusList[randIndex].color};" class="status">${statusList[randIndex].name}</label>
        </li>
    `;

})

document.querySelector("#add").onclick = function(){
    const randIndex = Math.floor(Math.random() * tasks.length)
    const statusIndex = Math.floor(Math.random() * statusList.length)

    document.querySelector('.todos-list ul').innerHTML +=`
        <li class="todo">
            <div class="item-input">
                <input class="checkbox__input" type="checkbox" id="checkbox${tasks[randIndex].index}" ${tasks[randIndex].checked ? "checked" : ""}>
                <span class="checkbox__inner"></span>
                <label for="checkbox${tasks[randIndex].index}">${tasks[randIndex].name}</label>
            </div>

            <label style="background-color: ${statusList[statusIndex].background}; color: ${statusList[statusIndex].color};" class="status">${statusList[statusIndex].name}</label>
        
        </li>
    `;
}