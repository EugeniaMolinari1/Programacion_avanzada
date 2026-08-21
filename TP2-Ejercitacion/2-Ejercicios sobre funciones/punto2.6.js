function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log("El facotrial de 4 es:", factorial(4));