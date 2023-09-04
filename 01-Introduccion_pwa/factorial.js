const factorial = (n) => {
    let acumulator = 1;
    for (let i = 1; i <= n; i++) {
        acumulator *= i;
    }

    return acumulator;
};

const execute = (add) => {
    add(1, 3);
}

function add(n1, n2) {
    console.log(n1 + n2);
}

execute(add);