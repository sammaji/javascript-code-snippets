// all property flags are set to true (by default),
// if you add properties like this
let obj = {
    a: "one",
    b: "two",
    c: "three",
}

Object.defineProperty(obj, "c", {
    enumerable: false
})

for (let key in obj) {
    console.log(obj[key])
}