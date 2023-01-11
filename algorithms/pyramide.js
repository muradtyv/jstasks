const createPyramide = (n) => {
    for (let i = 1; i < n; i++) {
        let string = " ".repeat(n - i);

        let star = "*".repeat(i * 2 - 1);

        console.log(string + star + string);
    }
}

createPyramide(5);