
function localMaximum(arr) {
    let amount = 0;

    for (let i = 0; i < arr.length; i++) {
        const leftCompare = arr[i - 1] === undefined ? true : arr[i] > arr[i - 1];
        const rightCompare = arr[i + 1] === undefined ? true : arr[i] > arr[i + 1];

        if (leftCompare && rightCompare) {
            amount += 1;
        }
    }

    return amount;
}

document
    .getElementById("compute")
    .addEventListener("click", function () {
        const strArray = document.getElementById("input").value;
        const maxAmount = localMaximum(strArray.split(" "));
        document.getElementById("result").innerText = `Max Amount: ${maxAmount}`;
    });