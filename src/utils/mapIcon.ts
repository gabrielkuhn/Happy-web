import Leaflet from 'leaflet'
import mapMarkerImg from '../images/Marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [172, 2]
})

export default mapIcon
