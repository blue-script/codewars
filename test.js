let message =  'Invalid url format (Contacts->Facebook)'
// let res = message.match(/\(.*\)$/)
let res = message.match(/\((.*?)\)/)
console.log(res);
console.log(res.index);