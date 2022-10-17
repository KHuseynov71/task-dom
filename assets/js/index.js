const form = document.querySelector(".form");
const inputName = document.querySelector("#txttaskname");
const inputPriace = document.querySelector("#txttaskpriace");
const inputKatagory = document.querySelector("#txttaskkatagory");
const list = document.querySelector("#task-list");
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addNewItem);

}
function addNewItem(e) {
    if (inputName.value === "" ) {
        alert("Duzgun ad daxil edin");
    }
    if (inputPriace.value === "" ) {
        alert("Duzgun reqem daxil edin");// reqemlerde deyisiklik elemey lazimdi
    }
    if (inputKatagory.value === "" ) {
        alert("Duzgun kategoriya daxil edin daxil edin");
    }
    e.preventDefault();

    // const li = document.createElement("li");
    // li.className = "list-group-item list-group-item-secondary";
    // li.appendChild(document.createTextNode(inputName.value))
    // li.appendChild(document.createTextNode(inputPriace.value))
    // li.appendChild(document.createTextNode(inputKatagory.value))
    const li = document.querySelectorAll("li")
    li.className="list-group-item list-group-item-secondary li-style";
    const liName = document.querySelector(".name");
    liName.appendChild(document.createTextNode(inputName.value));
    const liPriace = document.querySelector(".priace");
    liPriace.appendChild(document.createTextNode(inputPriace.value));
    const likatalog = document.querySelector(".katalog");
    likatalog.appendChild(document.createTextNode(inputKatagory.value));
    inputKatagory.value="";
    inputName.value="";
    inputPriace.value="";
    
    // list.appendChild(li);
}
