module.exports = function reverse(n) {
    n=Math.abs(n);
    str = n + '';
    n = Number(str.split('').reverse().join(''));
    return n;
}
