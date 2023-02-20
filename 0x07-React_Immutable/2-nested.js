import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
    if (!object || !array || !array.length)
        return undefined;
        
    const immutableObj = Immutable.fromJS(object);
    return (immutableObj.getIn(array));
}

/* console.log(accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first']));
 */