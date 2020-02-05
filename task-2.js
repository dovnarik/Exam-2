function isPolyndrom (str){
    return str === str
        .split('')
        .reverse()
        .join('');
}