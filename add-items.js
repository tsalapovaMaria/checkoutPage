const buttons = document.querySelectorAll('.items-button');
const totalQuantities = document.querySelectorAll('.items-quantity');


Array.from(buttons).forEach((button, buttonIndex) => {
    button.onclick = () => {
        let action = (buttonIndex % 2 === 0) ? -1 : 1;

        Array.from(totalQuantities).forEach(totalQuantity => {
            if((totalQuantity.textContent === '0' && action === -1) ||
               totalQuantity.textContent === '10' && action === 1){
                return;
            }

            if (button.parentNode === totalQuantity.parentNode) {
                totalQuantity.textContent = +totalQuantity.textContent + action;
            }
        });
    };
});