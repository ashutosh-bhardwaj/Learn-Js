
const HEADINGS = ['First', 'Last', 'Handle'];
const ROWS = [
    ['Elon', 'Musk', '@elonmusk'],
    ['Mark', 'Zuckerberg', '@markzuckerberg'],
    ['Bill', 'Gates', '@billgates'],
    ['Richard', 'Henricks', '@richard'],
];

function updateTableHead(tableHead, list) {
    const head = document.querySelector(tableHead);
    const row = createHead(list);
    head.innerHTML = row;
}

function createHead(list) {
    return (`
    <tr>
        <th scope="col">#</th>
        <th scope="col">${list[0]}</th>
        <th scope="col">${list[1]}</th>
        <th scope="col">${list[2]}</th>
    </tr>
    `);
}

function updateTableBody(tableId, list) {
    const tableBody = document.querySelector(tableId);
    const rows = createTableBody(list);
    tableBody.innerHTML = rows;
}

function createTableBody(list) {
    let rows = '';
    for(i in list) {
        rows += createRow(i, list[i]);
    }
    return rows;
}

function createRow(index, values) {
   return (
    `<tr>
        <th scope="row">${index}</th>
        <td>${values[0]}</td>
        <td>${values[1]}</td>
        <td>${values[2]}</td>
    </tr>`
    );
}

updateTableHead('#table-head', HEADINGS);
updateTableBody('#table-body', ROWS);