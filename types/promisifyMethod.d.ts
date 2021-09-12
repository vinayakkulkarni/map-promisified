import type { Map } from 'mapbox-gl';
declare function promisifyMethod(
  map: Map,
  methodName: string,
): (...args: any) => Promise<object>;
export default promisifyMethod;
