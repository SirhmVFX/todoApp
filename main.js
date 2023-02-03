let ourForm = document.getElementById("myForm")
let textField = document.getElementById("textField");
let list = document.getElementById("list");
let create = document.getElementById("create")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(textField.value)
})

function createItem(x) {
    let listItem = `<li> ${x}<button onclick="deleteItem(this)" class="fa fa-trash" aria-hidden="true"></button></li>`;
    list.insertAdjacentHTML("beforeend", listItem);
    textField.value = ""
    textField.focus();
}

function deleteItem(x) {
    x.parentElement.remove();
}