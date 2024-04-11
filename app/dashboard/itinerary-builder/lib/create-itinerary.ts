export type CompanyWithAddress = {
  uuid: string;
  address: string;
  latitude: number;
  longitude: number;
};

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

export const findNearestLocations = async (
  startLat: number,
  startLng: number,
  allLocations: CompanyWithAddress[],
  numResults: number = 5
): Promise<CompanyWithAddress[]> => {
  const distances: {
    company: CompanyWithAddress;
    distance: number;
  }[] = [];

  allLocations.forEach((company) => {
    const distance = haversineDistance(
      startLat,
      startLng,
      company.latitude,
      company.longitude
    );
    distances.push({ company, distance });
  });

  distances.sort((a, b) => a.distance - b.distance);
  const nearestLocations = distances
    .slice(0, numResults)
    .map((item) => item.company);

  return nearestLocations;
};
