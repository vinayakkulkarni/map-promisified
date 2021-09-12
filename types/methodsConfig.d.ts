import type { FlyToOptions, Map } from 'mapbox-gl';
declare const _default: {
  setCenter: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  panBy: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  panTo: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  setZoom: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  zoomTo: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  zoomIn: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  zoomOut: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  setBearing: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  rotateTo: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  resetNorth: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  snapToNorth: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  setPitch: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  fitBounds: {
    events: {
      name: string;
      check: (map: Map) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  fitScreenCoordinates: {
    events: {
      name: string;
      check: (map: Map, options: any) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  jumpTo: {
    events: {
      name: string;
      check: (map: Map, options: FlyToOptions) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  easeTo: {
    events: {
      name: string;
      check: (map: Map, options: FlyToOptions) => boolean;
    }[];
    getter: (map: Map) => object;
  };
  flyTo: {
    events: {
      name: string;
      check: (map: Map, options: FlyToOptions) => boolean;
    }[];
    getter: (map: Map) => object;
  };
};
export default _default;
