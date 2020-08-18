import { BUY_ICECREAM } from './iceCreamTypes'

export const buyIceCream = () => {
    console.log('buyIceCream action')
    return {
        type: BUY_ICECREAM
    }
}