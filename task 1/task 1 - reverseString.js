// task 1;
function task1ReverseString(str) {
    return str.split('').reverse().join('');
}

let timeout;

timeout = setTimeout(function() {
    console.log(task1ReverseString("malachite"));
}, 1000);
