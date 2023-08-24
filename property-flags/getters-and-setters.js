let obj = {
    firstName: "Sam",
    lastName: "Maji",
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        const name = value.split(" ")
        this.firstName = name[0]
        this.lastName = name[name.length - 1]
    }
}

console.log(obj.fullName)

obj.fullName = "Samya Brata Maji"

console.log(obj.fullName)