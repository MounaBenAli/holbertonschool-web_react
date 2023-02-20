import Immutable from 'immutable';

//arrays
export function concatElements(page1, page2) {
    return (Immutable.List(page1).concat(page2));
};

//objects
export function mergeElements(page1, page2) {
    const map1 = Immutable.fromJS(page1);
    const map2 = Immutable.fromJS(page2);
    return (map1.merge(map2));
};

/* const page1 = ['1', 'b', '3'];
const page2 = ['d', '5', 'f'];
concatElements(page1, page2);
console.log(concatElements(page1, page2)); */

/* const obj1 = Immutable.Map({ a: 1, b: 2 });
const obj2 = Immutable.Map({ c: 3, d: 4 });
const newObj = mergeElements(obj1, obj2);
console.log(newObj.toJS()); */