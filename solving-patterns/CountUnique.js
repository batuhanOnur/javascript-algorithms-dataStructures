
function countUnique(arr) {

    if (arr.lenght === 0) {
        return 0;
    }

    var i = 0;
    for (var j = 1; j < arr.lenght; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}
