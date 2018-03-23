function array(list = []) {
    this.list = list;

    this.doForEach = (cb) => {
        for( let i = 0; i < this.list.length; i++) {
            cb(this.list[i]);
        }
    }

    this.doMap = (cb) => {
        let arr = [...this.list];
        for( let i = 0; i < arr.length; i++) {
            arr[i] = cb(arr[i]);
        }
        return arr;
    }
}

const myArr = new array([1, 2, 3]);
console.log(myArr.list);

myArr.doForEach( i => console.log(i));

const double = myArr.doMap(i => i * 2);
console.log('After Map');
console.log('myArr', myArr.list);
console.log('double', double);