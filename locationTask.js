

const TASK_NAME = "TRACKING_LOCATION";

// Haversine formula for calculating distance between two geographical points

function isInsideZone(location, zone) {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371e3; // earth radius
    const dLatitude = toRad(zone.latitude - location.latitude);
    const dLongitude = toRad(zone.longitude - location.longitude);

    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(location.latitude)) * Math.cos(toRad(zone.latitude)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance <= zone.radius;
}