import Immutable from 'immutable';


export function mergeDeeplyElements(page1, page2) {
    const map1 = Immutable.Map(page1);
    const map2 = Immutable.Map(page2);
    return (map1.mergeDeep(map2));
};

/* const page1 = {
    'user-1': {
      id: 1,
      name: 'test',
      likes: {
        1: {
          uid: 1234,
        }
      }
    },
};

const page2 = {
    'user-1': {
      likes: {
        2: {
          uid: 134,
        }
      }
    },
};

console.log(JSON.stringify(mergeDeeplyElements(page1, page2).toJS(), null, 2)); */