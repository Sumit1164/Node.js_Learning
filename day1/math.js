function Add(a, b) {
    return a + b;
}

function Sub(a, b) {
    return a - b;
}

// module.exports = add
// module.exports = sub

module.exports = {
    Add,
    SubFunc: Sub
}