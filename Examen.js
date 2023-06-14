const computeJoinPoint = (s1, s2) => {
    while (s1 !== s2) {
        s1 = compute(s1);
        s2 = compute(s2);
    }
    return s1;
};

const compute = (x) => {
    let arr = x.toString().split("");
    return arr.reduce((partialSum, a) => partialSum + parseInt(a), x);
};
