const haversineDistance = (
  lat1: number,
  lng: number,
  lat2: number,
  lon2: number
): number => {
  const earthRadius = 6371;

  const toRadians = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };

  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lng);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  return distance;
};

const findNearestLocations = async (
  startLat: number,
  startLon: number,
  allLocations: { latitude: number; longitude: number }[],
  numResults: number = 2
): Promise<{ latitude: number; longitude: number }[]> => {
  const origin = { latitude: startLat, longitude: startLon };
  const distances: {
    location: { latitude: number; longitude: number };
    distance: number;
  }[] = [];

  for (const location of allLocations) {
    const destination = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    const distance = haversineDistance(
      origin.latitude,
      origin.longitude,
      destination.latitude,
      destination.longitude
    );
    distances.push({ location, distance });
  }

  distances.sort((a, b) => a.distance - b.distance);
  const nearestLocations = distances
    .slice(0, numResults)
    .map((item) => item.location);

  return nearestLocations;
};

export const example = async () => {
  // Example usage
  const startLatitude = 40.7128; // New York City
  const startLongitude = -74.006;
  const allLocations = [
    { latitude: 34.0522, longitude: -118.2437 }, // Los Angeles
    { latitude: 41.8781, longitude: -87.6298 }, // Chicago
    { latitude: 29.7604, longitude: -95.3698 }, // Houston
    { latitude: 33.749, longitude: -84.388 }, // Atlanta
  ];
  findNearestLocations(startLatitude, startLongitude, allLocations)
    .then((nearestLocations) => {
      console.log(nearestLocations);
    })
    .catch((error) => {
      console.error(error);
    });
};
