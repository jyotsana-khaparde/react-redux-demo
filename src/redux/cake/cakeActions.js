import { BUY_CAKE } from './cakeTypes'

export const buyCake = () => {
    console.log('buyCake action')
    return {
        type: BUY_CAKE
    }
}