import Immutable from 'immutable';



export function areMapsEqual(map1, map2) {
    return Immutable.is(map1, map2);
};

/* const map1 = Immutable.Map({ firstName: 'Guillaume', lastName: 'Salva' });
const map2 = Immutable.Map({ firstName: 'Guillaume', lastName: 'Salva' });

const equal = areMapsEqual(map1, map2);
console.log(equal); */