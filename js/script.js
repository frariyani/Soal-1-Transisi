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

var li, div, input, label1, label2

tasks.forEach(obj => {
    const randIndex = Math.floor(Math.random() * statusList.length)

    li = document.createElement("li")
    div = document.createElement("div")
    input = document.createElement("input")
    label1 = document.createElement("label")
    label2 = document.createElement("label")

    li.className = "todo"
    div.className = "item-input"
    input.className = "checkbox__input"
    label2.className = "status"

    input.type = "checkbox"
    label2.style.backgroundColor = statusList[randIndex].background
    label2.style.color = statusList[randIndex].color

    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(label1)
    li.appendChild(label2)

    label1.innerHTML = obj.name
    label2.innerHTML = statusList[randIndex].name

    document.querySelector(".item").appendChild(li)

})

document.querySelector("#add").onclick = function(){

    const randIndex = Math.floor(Math.random() * tasks.length)
    const statusIndex = Math.floor(Math.random() * statusList.length)

    li = document.createElement("li")
    div = document.createElement("div")
    input = document.createElement("input")
    label1 = document.createElement("label")
    label2 = document.createElement("label")

    li.className = "todo"
    div.className = "item-input"
    input.className = "checkbox__input"
    label2.className = "status"

    input.type = "checkbox"
    label2.style.backgroundColor = statusList[statusIndex].background
    label2.style.color = statusList[statusIndex].color

    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(label1)
    li.appendChild(label2)

    label1.innerHTML = tasks[randIndex].name
    label2.innerHTML = statusList[statusIndex].name

    document.querySelector(".item").appendChild(li)
}