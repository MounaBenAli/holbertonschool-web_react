import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
    if (!object || !array || !array.length)
        return undefined;
        
    const immutableObj = fromJS(object);
    return (immutableObj.getIn(array));
}

