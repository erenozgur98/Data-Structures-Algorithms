// Write a function that takes an array and slices it into half until there's only one item left in the array
// Use binary search algorithm

// len 8
const test1 = [0, 1, 2, 3, 4, 5, 6, 7];
// len 16
const test2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// len 24
const test3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

// Time Complexity is O(log(n)) => Where n is the length of the input array (Number of numbers in the array). Because we are eliminating half of the array every time we traverse it, it saves us a lot of time hence we have Logarithmic Time Complexity, O (log(n))
// Space Complexity is depending on how you implement it; if you implement iteratively it'll be O(1). If recursively, it'll be O (log(n)) because you'll use more memory on the callstack.
const arr = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (target === array[middle]) {
            return middle;
        } else if (target < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1
        }
    }
    return -1

}

console.log(arr(test1, 5))
console.log(arr(test2, 3))
console.log(arr(test3, 22))
console.log(arr(test3, 32))