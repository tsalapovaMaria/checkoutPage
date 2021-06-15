const buttons = document.querySelectorAll('.items-button');
const totalQuantities = document.querySelectorAll('.items-quantity');

const totalPrice = document.querySelector('.total-price');
const itemsNewPrice = document.querySelectorAll('.new-price');
const itemsOldPrice = document.querySelectorAll('.old-price');

Array.from(buttons).forEach((button, buttonIndex) => {
    button.onclick = () => {
        let action = (buttonIndex % 2 === 0) ? -1 : 1;

        Array.from(totalQuantities).forEach(totalQuantity => {
            if ((totalQuantity.textContent === '1' && action === -1) ||
                totalQuantity.textContent === '10' && action === 1) {
                return;
            }

            if (button.parentNode === totalQuantity.parentNode) {
                let totalPriceCounter = 0;
                Array.from(itemsNewPrice).forEach((itemNewPrice, index) => {
                    const itemOldPrice = itemsOldPrice[index];
                    const newPrice = +itemNewPrice.textContent.slice(1) / totalQuantity.textContent;
                    const oldPrice = +itemOldPrice.textContent.slice(1) / totalQuantity.textContent;
                    if (button.parentNode.parentNode ===
                        itemNewPrice.parentNode.parentNode.parentNode) {
                        itemNewPrice.textContent = (action === 1) ?
                            `$${(+itemNewPrice.textContent.slice(1) + newPrice).toFixed(2)}` :
                            `$${(+itemNewPrice.textContent.slice(1) - newPrice).toFixed(2)}`;
                        itemOldPrice.textContent = (action === 1) ?
                            `$${(+itemOldPrice.textContent.slice(1) + oldPrice).toFixed(2)}` :
                            `$${(+itemOldPrice.textContent.slice(1) - oldPrice).toFixed(2)}`;
                    }
                    totalPriceCounter += +itemNewPrice.textContent.slice(1);
                });
                totalQuantity.textContent = +totalQuantity.textContent + action;
                totalPrice.textContent = `$${totalPriceCounter.toFixed(2)}`;
            }
        });
    };
});
