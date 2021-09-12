import type { Map } from 'mapbox-gl';
import IMapActions from './mapActions';
import methodsData from './methodsConfig';
import promisifyMethod from './promisifyMethod';

/**
 * @param map
 */
export default function (map: Map): IMapActions {
  const toPromisify = Object.keys(methodsData);

  const actions: IMapActions = {} as any;

  toPromisify.forEach((key: string) => {
    if (toPromisify.indexOf(key) !== -1) {
      actions[key] = promisifyMethod(map, key);
    }
  });
  return actions;
}
