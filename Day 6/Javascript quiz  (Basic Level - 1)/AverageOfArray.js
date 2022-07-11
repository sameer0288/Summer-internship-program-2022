var grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var average = calculateAverage(grades, 0, 9);
console.log(average);

function calculateAverage(arr, start, end) {
    var total = 0;
    for (var i = start; i <= end; i++) {
        total += arr[i];
    }
    var diff = (end - start) + 1;
    var avg = total / diff;
    return avg
}