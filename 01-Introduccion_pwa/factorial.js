const factorial = (n) => {
    let acumulator = 1;
    for (let i = 1; i <= n; i++) {
        acumulator *= i;
    }

    return acumulator;
};