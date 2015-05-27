function reverse(str) {
    // Your code here
    if (str.length === 0) {
        return '';
    }
    var a = str.charAt(str.length - 1)
    return a + reverse(str.slice(0, str.length - 1))
}

function rev(str) {
    return str.slice(0, str.length - 1)
}
console.log(rev('a'));

console.log('a'.slice(0, 1));

console.log(reverse('abcde').length);