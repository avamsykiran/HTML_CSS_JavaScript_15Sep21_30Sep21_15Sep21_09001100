import invService from './InventoryService.mjs'

const displayItems = () => {
   
    let items = invService.getAll();

    let dataTable = document.querySelector("#content>table");

    let dataTableBody = document.querySelector("#content>table>tbody");
    if (dataTableBody) {
        dataTable.removeChild(dataTableBody);
    }

    dataTableBody = document.createElement("tbody");

    items.forEach(item => {
        let tr = document.createElement("tr");
        let tds = [];
        for (let i = 0; i < 5; i++) {
            tds.push(document.createElement("td"));
            tr.appendChild(tds[i]);
        }

        tds[0].textContent = item.id;
        tds[1].textContent = item.name;
        tds[2].textContent = item.unit;
        tds[3].textContent = item.rate;

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.addEventListener('click', deleteBtnClicked(item.id));
        tds[4].appendChild(btn);

        dataTableBody.appendChild(tr);
    });

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.textContent = `Total ${items.length} Item(s) in stock`;
    td.colSpan = 4;

    tr.appendChild(td);
    dataTableBody.appendChild(tr);

    dataTable.appendChild(dataTableBody);

}

const deleteBtnClicked = itemId => event => {
    if (confirm(`Are you sure to delete item#${itemId}?`)) {
       invService.deleteById(itemId);
       displayItems();
    }
}

const addItem = event => {

    let txt1 = document.querySelector("#itemId");
    let txt2 = document.querySelector("#itemName");
    let txt3 = document.querySelector("#itemUnit");
    let txt4 = document.querySelector("#itemRate");

    let id = parseInt(txt1.value);
    let name = txt2.value;
    let unit = txt3.value;
    let rate = parseFloat(txt4.value);

    invService.add({ id, name, unit, rate });

    displayItems();
    txt1.value = "";
    txt2.value = "";
    txt3.value = "";
    txt4.value = "";
};

export default {displayItems,addItem};