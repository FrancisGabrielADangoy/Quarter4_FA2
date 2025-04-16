function generateTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = '';

    if (isNaN(rows) || isNaN(cols) || rows < 2 || rows > 10 || cols < 2 || cols > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    let table = "<table border='1'>";
    
    table += "<tr><th></th>";
    for (let j = 1; j <= cols; j++) {
        table += `<th>${j}</th>`;
    }
    table += "</tr>";

    for (let i = 1; i <= rows; i++) {
        table += `<tr><th>${i}</th>`;
        for (let j = 1; j <= cols; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += "</tr>";
    }

    table += "</table>";
    outputDiv.innerHTML = table;
}