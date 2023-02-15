function fillSubtitlesId(subtitles){
    Array.from(subtitles).forEach(sub =>{
        sub.setAttribute("id", sub.innerHTML.toLowerCase().replaceAll(" ", "_"))
    })
}
function initPanel(){
    let panel = document.getElementById("table-panel")
    let titles = document.getElementsByClassName("content-subtitle")
    fillSubtitlesId(titles)

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


document.addEventListener("DOMContentLoaded", initPanel)