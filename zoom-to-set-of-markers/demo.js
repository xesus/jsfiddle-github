/**
 * Adds three markers and alters the view bounds of the map to ensure that all
 * markers are visible
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersAndSetViewBounds() {
  // create map objects
  var toronto = new H.map.Marker({lat:43.7,  lng:-79.4}),
      boston = new H.map.Marker({lat:42.35805, lng:-71.0636}),
      washington = new H.map.Marker({lat:38.8951, lng:-77.0366}),
      group = new H.map.Group();

  // add markers to the group
  group.addObjects([toronto, boston, washington]);
  map.addObject(group);

  // get geo bounding box for the group and set it to the map
  map.setViewBounds(group.getBounds());
}



/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'DemoAppId01082013GAL',
  app_code: 'AJKnXv84fjrb0KIHawS0Tg',
  useCIT: true,
  useHTTPS: true
});

var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
// note that all the markers are in North America...
var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map,{
  center: {lat:52, lng:5},
  zoom: 5
});

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Now use the map as required...
addMarkersAndSetViewBounds(map);

$('head').append('<link rel="stylesheet" href="https://js.api.here.com/v3/3.0/mapsjs-ui.css" type="text/css" />');