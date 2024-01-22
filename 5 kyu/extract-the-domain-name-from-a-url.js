// ❓ DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// ✅ SOLUTION

function domainName(url){
    console.log(url)
    let first = url.indexOf('www') >= 0
        ? url.indexOf('.') + 1
        : url.indexOf('//') >= 0
            ? url.indexOf('//') + 2
            : 0



    let point = url.indexOf('.', first)
    return url.slice(first, point)
}

console.log(domainName('icann.org'))