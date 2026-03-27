const form = document.querySelector("form")
const list = document.querySelector("#list")
const input = document.querySelector("#input")
const errorMensage = document.querySelector(".error-mensage")


form.onsubmit = (event) => {
    event.preventDefault()
    adicionarItem(input.value)
}

list.onclick = (event) => {
    if (event.target.closest(".delete")) {
        deletarItem(event.target.closest("li"))
    }
}


function adicionarItem(itemName) {
    const newLi = document.createElement("li")
    newLi.classList.add("item")

    const div = document.createElement("div")
    div.classList.add("content")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    const span = document.createElement("span")
    span.textContent = itemName

    div.append(checkbox, span) 

    const newBtn = document.createElement("button")
    newBtn.classList.add("delete")

    const img = document.createElement("img")
    img.src = "./assets/trash.svg"
    img.alt = "Excluir"

    newBtn.append(img)
    newLi.append(div, newBtn)
    list.appendChild(newLi)

    console.log(list)

    input.value = ""
}

function deletarItem(item) {
    item.remove()
    errorMensage.classList.remove("none")

    setTimeout(() => {
        
    }, 2000)
}


