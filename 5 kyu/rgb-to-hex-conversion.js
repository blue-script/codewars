// ❓DESCRIPTION:
//     The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// ✅ SOLUTION
const rgb=(r, g, b)=> toHex(r)+toHex(g)+toHex(b)

const toHex = (num)=> {
    if (num > 255) return 'FF'
    if (num < 0) return '00'
    return ('0' + num.toString(16).toUpperCase()).slice(-2)
}


console.log(rgb(1,0,300))
console.log(rgb(26,114,15)) //'1A720F'