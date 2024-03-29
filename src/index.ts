import type { Map } from 'mapbox-gl';
import IMapActions from './mapActions';
import promisifyMap from './promisifyMap';
import promisifyMethod from './promisifyMethod';

/**
 * @param map
 * @param methodName
 */
export default function promisify(
  map: Map,
  methodName: string | null = null,
): ((...args: any) => Promise<object>) | IMapActions {
  if (methodName) {
    return promisifyMethod(map, methodName);
  } else {
    return promisifyMap(map);
  }
}
