//fetch mapbox api
mapboxgl.accessToken = 'pk.eyJ1Ijoibml0aW5yYW8wMyIsImEiOiJja2hrbjQzMGcwODc4MnNsbjhkMm8yN2J4In0.ZUAeQUbxbPbsGoHJn4WPFA';

//get current location using navigation api
navigator.geolocation.getCurrentPosition(successLoc, errorLoc ,{enableHighAccuracy: true});

function successLoc(position){
    //Passing longitude then latitude in an array
    setupMap([position.coords.longitude, position.coords.latitude]);
};

function errorLoc(){
    //delhi rough coords
    setupMap([77.216721,28.644800]);
    alert("User Denied Geolocation");
};

//coords of current location as center
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

     //Navigation control
    var nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    //Adding directions by using Plugin (mapbox-gl-directions)
    var directions= new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(directions, "top-left")
}