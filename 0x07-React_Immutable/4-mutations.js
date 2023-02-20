import Immutable from 'immutable';

export const map = Immutable.Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

export const map2 = map
.set('3', 'Benjamin')
.set('5', 'Oliver');

/* console.log(map.toJS());
console.log(map2.toJS()); */