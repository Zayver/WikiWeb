
const colors = {
    Red: "#CC4949",
    Green: "#4E9F3D"
}
function checkName(name){
    const re = new RegExp("^[A-Za-z]+$")
    return re.test(name)
}

function checkMail(email){
    const re = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    return re.test(email)
}
function checkComment(comment){
    const re = new RegExp("[\\dA-Za-z]\\w+")
    return re.test(comment)
}
function checkCheck(check){
    let label = document.getElementById("label-term")
    if(check.checked){
        label.style.color = ""
        return 1
    }else{
        console.log("fsdsdfsdf")
        label.style.color = colors.Red
        return 0
    }
}

function checkPredicate(field, predicate){
    let good = 1
    if(!predicate(field.value)){
        good = 0
        field.style.borderColor = colors.Red
    }else{
        field.style.borderColor = colors.Green
    }
    return good
}
function checkForm(){
    let name = document.getElementById("name-textbox")
    let email = document.getElementById("email-textbox")
    let comment = document.getElementById("comment-textarea")
    let check = document.getElementById("term-btn")
    let goodCounter = 0

    goodCounter += checkPredicate(name, checkName)
    goodCounter += checkPredicate(email, checkMail)
    goodCounter += checkPredicate(comment, checkComment)
    goodCounter += checkCheck(check)

    if(goodCounter == 4){
        window.location.href = "index.html";
    }
}

function addChecker(){
    document.getElementById("send-btn").addEventListener("click", function(event){
        event.preventDefault()
        checkForm()
    });
}

document.addEventListener("DOMContentLoaded", addChecker)
