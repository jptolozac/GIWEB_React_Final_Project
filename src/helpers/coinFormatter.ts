export function CoinFormatter(value: number){
    
    const formatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    })
    
    return formatter.format(value)
}
