const tasks = [
    {
        "index": 1,
        "name" : "Learn web programming",
        "status": [{
            "name": "Done",
            "color": "#BFDB38"
        }],
        "checked": false 
    },
    {
        "index": 2,
        "name" : "Wash dishses",
        "status": [{
            "name": "Waiting",
            "color": "#FEC868"
        }],
        "checked": false
    },
    {
        "index": 3,
        "name" : "Fixing transparent background",
        "status": [{
            "name": "Pending",
            "color": "#FF0032"
        }],
        "checked": false
    },
    {
        "index": 4,
        "name" : "Making fried rice",
        "status": [{
            "name": "Pending",
            "color": "#EB455F"
        }],
        "checked": false
    }
]

tasks.forEach(obj => {
    document.querySelector('.todos-list').innerHTML +=`
        <div class="todo">
            <input class="checkbox__input" type="checkbox" id="checkbox${obj.index}">
            <span class="checkbox__inner"></span>
            <label for="checkbox${obj.index}">${obj.name}</label>

            <label style="background-color: ${obj.status[0].color};" class="status">${obj.status[0].name}</label>
        </div>
    `;

})

document.querySelector("#add").onclick = function(){
    const randIndex = Math.floor(Math.random() * tasks.length)

    document.querySelector('.todos-list').innerHTML +=`
        <div class="todo">
            <input class="checkbox__input" type="checkbox" id="checkbox${tasks[randIndex].index}">
            <span class="checkbox__inner"></span>
            <label for="checkbox${tasks[randIndex].index}">${tasks[randIndex].name}</label>

            <label style="background-color: ${tasks[randIndex].status[0].color}; class="status">${tasks[randIndex].status[0].name}</label>
        </div>
    `;
}