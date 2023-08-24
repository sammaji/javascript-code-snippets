let obj = {}

// all property flags are set to false (by default),
// if you add properties like this
Object.defineProperty(obj, "message", {
    value: "hello world",
    writable: true,
    enumerable: true,
    configurable: false
})

console.log(obj);

delete obj.message
console.log(obj)

obj.message = "hello"
console.log(obj)