const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'INR',
    });


    export function formatCurrency(amount: number) {
    return CURRENCY_FORMATTER.format(amount);
   
}