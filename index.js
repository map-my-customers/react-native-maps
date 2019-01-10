import MapView, {
  Animated as ani,
  ProviderPropType as prov,
  MAP_TYPES as mapTypes
} from './lib/components/MapView'

export { default as Marker } from './lib/components/MapMarker.js'
export { default as Polyline } from './lib/components/MapPolyline.js'
export { default as Polygon } from './lib/components/MapPolygon.js'
export { default as Circle } from './lib/components/MapCircle.js'
export { default as UrlTile } from './lib/components/MapUrlTile.js'
export { default as LocalTile } from './lib/components/MapLocalTile.js'
export { default as Overlay } from './lib/components/MapOverlay.js'
export { default as Callout } from './lib/components/MapCallout.js'
export { default as Heatmap } from './lib/components/MapHeatmap.js'
export { default as AnimatedRegion } from './lib/components/AnimatedRegion.js'

export const PROVIDER_GOOGLE = MapView.PROVIDER_GOOGLE
export const PROVIDER_DEFAULT = MapView.PROVIDER_DEFAULT

export const Animated = ani
export const ProviderPropType = prov
export const MAP_TYPES = mapTypes

export default MapView
