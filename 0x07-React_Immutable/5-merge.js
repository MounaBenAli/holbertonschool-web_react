import { List, Map } from 'immutable';

// arrays
export function concatElements(page1, page2) {
  return (List(page1).concat(List(page2)));
}

// objects
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return (map1.merge(map2));
}
