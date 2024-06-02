function updateResult() {
    let rate = parseFloat(document.getElementById("bitcoinRate").value);
    let amount = parseFloat(document.getElementById("amount").value);

    if (!isNaN(rate) && rate > 0 && !isNaN(amount)) {
        let bitcoins = amount / rate;
        document.getElementById("result").innerText = `You can buy ${bitcoins.toFixed(4)} bitcoins.`;
    } else {
        document.getElementById("result").innerText = '';
    }
}


function deleteBlock() {
    document.getElementById("result").innerText = '';
    document.getElementById("bitcoinRate").value = '';
    document.getElementById("amount").value = '';
}


function editBlock() {
    let resultBlock = document.getElementById("resultBlock");
    let currentText = document.getElementById("result").innerText;

    resultBlock.innerHTML = `
        <textarea id="editArea">${currentText}</textarea>
        <button onclick="saveEdit()">Save</button>
    `;
}


function saveEdit() {
    let newText = document.getElementById("editArea").value;
    document.getElementById("resultBlock").innerHTML = `<p id="result">${newText}</p>`;
}


document.getElementById("bitcoinRate").addEventListener("input", updateResult);
document.getElementById("amount").addEventListener("input", updateResult);
