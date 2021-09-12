import type { Map } from 'mapbox-gl';
import IMapActions from './mapActions';
export default function promisify(
  map: Map,
  methodName?: string | null,
): ((...args: any) => Promise<object>) | IMapActions;
