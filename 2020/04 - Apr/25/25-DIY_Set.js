// Source: Eloquent Javascript - https://eloquentjavascript.net/06_object.html

// Task 1 - My solution - 01

class Group extends Array {
    has(val) {
        return this.includes(val);
    }
    add(val) {
        if (!this.has(val)) this.push(val);
    }
    delete(val) {
        this.splice(this.indexOf(val), 1);
    }
    static from(array) {
        return new Group(...array);
    }
}

// Tests ////////////////////////////////////

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Task 2 - My solution - 01

class GroupIterator {
    constructor(group) {
        this.iteration = 0;
        this.group = group;
    }
    next() {
        if (this.iteration >= this.group.length) return { done: true };
        this.iteration++;
        return { value: this.group[this.iteration - 1], done: false };
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// a
// b
// c
let iterate = new GroupIterator(Group.from(["a", "b", "c"]));
console.log(iterate.next());
// { value: "a", done: false }
console.log(iterate.next());
// { value: "b", done: false }
console.log(iterate.next());
// { value: "c", done: false }
console.log(iterate.next());
// { done: true }