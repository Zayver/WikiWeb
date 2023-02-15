function initPanel(){
    let panel = document.getElementById("table-panel")
    let titles = document.getElementsByClassName("content-subtitle")

    Array.from(titles).forEach( title =>{
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.setAttribute("class", "panel-item")
        a.setAttribute("href", "#"+title.id)
        a.appendChild(document.createTextNode(title.innerHTML))
        li.appendChild(a)
        panel.appendChild(li);
        
    })
}


window.onload = initPanel