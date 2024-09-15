function filterValuesFromArr(arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var result = [];
    var filteredValues = arr.filter(function (val) {
        return !values.includes(val);
    });
    return filteredValues;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterValuesFromArr(arr, 4, 5, 7, 10));
