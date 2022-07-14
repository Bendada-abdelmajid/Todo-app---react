const currencyFormater= new Intl.NumberFormat(undefined, {
    currency:'usd',
    style:"currency",
    minimumFractionDigits:0
})
export default currencyFormater;