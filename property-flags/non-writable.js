let obj = {}

// all property flags are set to false (by default),
// if you add properties like this
Object.defineProperty(obj, "message", {
    value: "hello world",
    writable: false,
    enumerable: true,
    configurable: true
})

console.log(obj);

obj.message = "hello sam"
console.log(obj)