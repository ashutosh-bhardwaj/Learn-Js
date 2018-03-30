
const HEADINGS = ['First', 'Last', 'Handle'];
const ROWS = [
    ['Elon', 'Musk', '@elonmusk'],
    ['Mark', 'Zuckerberg', '@markzuckerberg'],
    ['Bill', 'Gates', '@billgates'],
    ['Richard', 'Henricks', '@richard'],
    ['Ashutosh', 'Musk', '@elonmusk'],
    ['Vaibhav', 'Zuckerberg', '@markzuckerberg'],
    ['Shubham', 'Gates', '@billgates'],
    ['Satyam', 'Henricks', '@richard'],
    ['Shivam', 'Musk', '@elonmusk'],
    ['Sundarm', 'Zuckerberg', '@markzuckerberg'],
    ['Mike', 'Gates', '@billgates'],
    ['Ross', 'Henricks', '@richard'],
    ['Shivam', 'Musk', '@elonmusk'],
    ['Rossy', 'Zuckerberg', '@markzuckerberg'],
    ['Sweety', 'Gates', '@billgates'],
    ['Ridhima', 'Henricks', '@richard'],
];


let start = 0;

function TableMaker() {

}


function TableMaker(id, data, num, elem) {
    const { head , rows } = data;  
    const NUMBERS_OF_ROWS = num;
    const MAX = rows.length;
    const MIN = 0;
    const _this = this
    this.render = () => {
        console.log(elem);
        const panel = ` <div class="center margin-bottom-60">
        <button class="btn btn-primary" onclick="${elem}.previous()">
        Previous
        </button>
        <button class="btn btn-primary" onclick="${elem}.next()">
        Next
        </button>
        </div>`;
        
        const tableHead = createTableHead(head);
        const tableBody = createTableBody(rows.slice(start, start + NUMBERS_OF_ROWS));
        const table = `<table class="table table-striped">
        <thead> ${tableHead} </thead>
        <tbody> ${tableBody} </tbody>
        </table>`;
        const div = document.getElementById(id);
        div.innerHTML = table + panel;
    } 
    
    this.next = () => {
        console.log('Clicked Next');
        if (start < MAX -  NUMBERS_OF_ROWS) {
            start += NUMBERS_OF_ROWS;
        } else {
            console.log(`Can't go beyond ${MAX}`);
        }
        this.render(this);
    }
    
    this.previous = () => {
        console.log('Clicked Previous');
        if (start -  NUMBERS_OF_ROWS  >= MIN) {
            start -= NUMBERS_OF_ROWS;
        } else {
            console.log(`Can't go beyond ${MIN}`);
        }
        this.render(this);
    }
    
    // this.previous = this.previous.bind(this);
    this.render();
}


function createTableHead(list) {
    return (`
    <tr>
        <th scope="col">#</th>
        ${list.map( v => `<th scope="col">${v}</th>`)}
    </tr>
    `);
}

function createTableBody(list) {
    let rows = '';
    for(i in list) {
        rows += createRow(start + Number(i), list[i]);
    }
    return rows;
}

function createRow(index, values) {
   return (
    `<tr>
        <th scope="row">${index}</th>
        ${values.map((v) => `<td>${v}</td>`)}
    </tr>`
    );
}

const data = {
    head: HEADINGS,
    rows: ROWS
};

const myTable = new TableMaker('table', data, 5, 'myTable');
const myTable2 = new TableMaker('table2', data, 5, 'myTable2');
