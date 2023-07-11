//instanciamos formatter para dar formato al precio.
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});