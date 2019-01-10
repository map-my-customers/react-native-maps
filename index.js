
import MapView, { Animated, MAP_TYPES, ProviderPropType } from './lib/components/MapView';
import Marker from './lib/components/MapMarker.js';
import Overlay from './lib/components/MapOverlay.js';


export { default as UrlTile } from './lib/components/MapUrlTile.js';
export { default as LocalTile } from './lib/components/MapLocalTile.js';
export { default as Callout } from './lib/components/MapCallout.js';
export { default as AnimatedRegion } from './lib/components/AnimatedRegion.js';


export { Marker, Overlay };
export { Animated, MAP_TYPES, ProviderPropType };


export const PROVIDER_GOOGLE = MapView.PROVIDER_GOOGLE;
export const PROVIDER_DEFAULT = MapView.PROVIDER_DEFAULT;
