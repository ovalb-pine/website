async function getResponce() {
    let responce = await fetch("shop.json")
    console.log("responce:\n", responce, "\n /responce: \n")
    let content = await responce.text()
    console.log("await responce.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 9)
    console.log("content.slice(0, 9)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h4 class="card-title">${content[key].title}</h5>
        <p class="card-text\">${content[key].description}.</p>
        <p><i>Price ${content[key].price}₽.</i></p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Order <input class="button field" type="number" name="amount" value="0"></p>
        </li>`
    }
}
getResponce()