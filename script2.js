const elementx = document.getElementById("x");
const elementy = document.getElementById("y");

function calculateZ() {

    const x = parseFloat(elementx.value);
    const y = parseFloat(elementy.value);
    let z;

    if (x > y) {
        z = x * y;
    } else {
        z = Math.log(x + y);
    }

    document.getElementById("result").value = z;
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener("click", calculateZ);
