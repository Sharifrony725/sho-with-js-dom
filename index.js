var total = 0;
function handleCLikBtn(data){
    const itemName = data.parentNode.childNodes[1].innerText;
    const itemPrice = data.parentNode.childNodes[5].innerText.split(" ")[1];

    const li = document.createElement('p');
    const selectedItemContainer = document.getElementById('selected-items');
    const count = selectedItemContainer.childElementCount;
    li.innerHTML = `${count +1}. ${itemName}`;
    
    if (count >= 5) {
        alert('you can not add more then 5');
        return;
    }
    selectedItemContainer.appendChild(li);
    const totalElement = document.getElementById('total');
    total = parseInt(total) + parseInt(itemPrice);
    totalElement.innerText = total;

    document.getElementById('apply').addEventListener('click', function () {
        const discountElement = document.getElementById('discount');
        const discountString = discountElement.value;
        const discount = parseInt(discountString);
        if (total > discount) {
            const grandTotalAfterDiscount = total - discount;
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerHTML = grandTotalAfterDiscount;
        }else{
            //alert('Discount Amount Must be less than Total Amount');
            return; 
        }
    })
    

}