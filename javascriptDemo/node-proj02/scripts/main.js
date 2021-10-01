import invCtrl from './InventoryController.mjs'
import cartCtrl from './CartController.mjs'

document.querySelector("#addItemBtn").addEventListener('click',invCtrl.addItem);

invCtrl.displayItems();
