let obj = {
    a: "one",
    b: "two"
}

Object.freeze(obj);

let clone1 = Object.assign({}, obj);
clone1.a = "three";
console.log(clone1);

let clone2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
clone1.a = "three";
console.log(clone2);