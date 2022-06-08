// How to write your own Hash Table in JS

function hashStringToInt(s, tableSize) {
    let hash = 17;

    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable {
    table = new Array(3333);
    numItems = 0;

    resize = () => {
        // increasing the size of the array by creating a new one, like dynamic arrays do
        const newTable = newArray(this.table.length * 2);

        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length);

                    if (newTable[idx]) {
                        newTable[idx].push([key, value]);
                    } else {
                        newTable[idx] = [[key, value]];
                    }
                });
            }
        });
        this.table = newTable
    }

    set = (key, value) => {
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;

        if (loadFactor > .8) {
            // we need to resize the array if 80% of it is full
            this.resize();
        }

        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }
    }

    search = key => {
        const idx = hashStringToInt(key, this.table.length);

        if (!this.table[idx]) {
            return null;
        }

        // O(n)
        // we are looking for the item, not the name/id it's given therefore [1]
        return this.table[idx].find(x => x[0] === key)[1];
    }

    remove = key => {
        // TODO: finish implementing this code


        // const idx = hashStringToInt(key, this.table.length);
        // const slot = this.table[idx]

        // if (!slot) {
        //     return null;
        // } else {
        //     for (let i = 0; i < slot.length; i++) {
        //         if (slot[i][0] === key) {
        //             slot.splice(i, 1);
        //             this.table[idx]
        //         }
        //     }
        // }
    }
}

const myTable = new HashTable();
myTable.set('firstName', 'Eren');
myTable.set('lastName', 'Ozgur');
myTable.set('dob', '07/22/1998');
myTable.set('age', 24);
myTable.set('location', 'Charlotte');
console.log(myTable.search('firstName'));
console.log(myTable.search('lastName'));
console.log(myTable.search('dob'));
console.log(myTable.search('age'));
console.log(myTable.search('location'));
// console.log(myTable.remove('firstName'));
// console.log(myTable.remove('lastName'));
// console.log(myTable.remove('dob'));
// console.log(myTable.remove('age'));
// console.log(myTable.remove('location'));