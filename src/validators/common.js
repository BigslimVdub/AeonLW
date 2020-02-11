//import { validateAddress } from "./address_tools"

export const payment_id = (input) => {
    return input.length === 0 || (/^[0-9A-Fa-f]+$/.test(input) && (input.length == 16 || input.length == 64))
}

export const privkey = (input) => {
    return input.length === 0 || (/^[0-9A-Fa-f]+$/.test(input) && input.length == 64)
}

export const address = (input) => {

    if(!(/^[0-9A-Za-z]+$/.test(input))) return false

    switch (input.substring(0,2)) {
        case "Wm":
        case "Xn":
        case "Um":
            return input.length === 97
        case "Wz":
            return input.length === 108
        default:
            return false
    }
}
