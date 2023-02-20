import Immutable from 'immutable';

export function getListObject(array) {
    return(Immutable.List(array));
};

export function addElementToList(list, element) {
    const immutableList = Immutable.List.isList(list) ? list : Immutable.list(list);
    return (immutableList.push(list));
};

