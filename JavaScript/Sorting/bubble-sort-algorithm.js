// Write a function that takes in an array of integers and returns a sorted version of that array.

const test1 = [8, 5, 2, 9, 5, 6, 3];
const test2 = [1];
const test3 = [1, 2];
const test4 = [2, 1];
const test5 = [3, 2, 1];


// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

// The reason O(1) is because we do the swaps in the same array, we didn't add aditional space
// For the time complexity; n is the len of the array, we are looping thru the array multiple times until it gets sorted. In the worst and average, we will do bunch of loops therefore it'll be O(n^2)

// Best case is O(n) that occurs if we're given sorted array. We'll traverse it one and check that every item is in correct order, then we ask did we do any swaps we didn't so that's O(N).
const bubbleSort = array => {
    let counter = 0;
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                const iDontKnowWhyThisWorksLikeThis = array[i + 1]
                array[i + 1] = array[i];
                // array[i] = array[i + 1] is not working, find out why
                array[i] = iDontKnowWhyThisWorksLikeThis;
                isSorted = false;
            }
        }
        counter++
    }
    return array;
}


console.log(bubbleSort(test1))
console.log(bubbleSort(test2))
console.log(bubbleSort(test3))
console.log(bubbleSort(test4))
console.log(bubbleSort(test5))