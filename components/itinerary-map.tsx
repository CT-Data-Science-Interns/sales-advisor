/* global google */

import React, { useEffect, useState, useMemo } from "react";
import { CompanyWithAddress } from "@/app/dashboard/itinerary-builder/lib/create-itinerary";

import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

const ItineraryMap = ({
  startLatLng,
  nearestCompanies,
}: {
  startLatLng: { lat: number; lng: number };
  nearestCompanies: CompanyWithAddress[];
}) => (
  <APIProvider apiKey={API_KEY}>
    <Map
      defaultCenter={{ lat: 43.65, lng: -79.38 }}
      defaultZoom={9}
      gestureHandling={"greedy"}
      fullscreenControl={false}
    >
      <Directions
        startLatLng={startLatLng}
        nearestCompanies={nearestCompanies}
      />
    </Map>
  </APIProvider>
);

const Directions = ({
  startLatLng,
  nearestCompanies,
}: {
  startLatLng: { lat: number; lng: number };
  nearestCompanies: CompanyWithAddress[];
}) => {
  console.log(startLatLng, nearestCompanies);
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [directionsMatrixService, setDirectionsMatrixService] =
    useState<google.maps.DistanceMatrixService>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    setDirectionsMatrixService(new routesLibrary.DistanceMatrixService());
  }, [routesLibrary, map]);

  const request = useMemo(() => {
    return {
      origins: [new google.maps.LatLng(startLatLng.lat, startLatLng.lng)],
      destinations: nearestCompanies.map((company) => {
        return new google.maps.LatLng(company.latitude, company.longitude);
      }),
      travelMode: google.maps.TravelMode.DRIVING,
    };
  }, [startLatLng, nearestCompanies]);

  // Use directions service
  useEffect(() => {
    if (
      !directionsService ||
      !directionsRenderer ||
      !directionsMatrixService ||
      nearestCompanies.length === 0
    )
      return;

    directionsMatrixService.getDistanceMatrix(request).then((response) => {
      console.log(response);
    });

    directionsService
      .route({
        origin: new google.maps.LatLng(startLatLng.lat, startLatLng.lng),
        destination: new google.maps.LatLng(
          nearestCompanies[nearestCompanies.length - 1].latitude,
          nearestCompanies[nearestCompanies.length - 1].longitude
        ),
        waypoints: nearestCompanies.slice(0, -1).map((company) => {
          return {
            location: new google.maps.LatLng(
              company.latitude,
              company.longitude
            ),
            stopover: true,
          };
        }),
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [
    directionsService,
    directionsRenderer,
    directionsMatrixService,
    request,
    nearestCompanies,
    startLatLng,
  ]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div>
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryMap;
