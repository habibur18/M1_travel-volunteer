import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Events = () => {
  const [locations] = useState([
    {
      id: 1,
      name: "Event 1",
      location: [40.7128, -74.006],
      date: "2023-12-10",
      state: "Los Angeles",
    },
    {
      id: 2,
      name: "Event 2",
      location: [34.0522, -118.2437],
      date: "2023-12-15",
      state: "New York",
    },
    // Add more events with real-world locations
  ]);

  return (
    <div className="container mx-auto mt-8 p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Donation Event Information</h2>
        {/* Add your donation event information fields here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-600 mb-2">Location: {event.state}</p>
              {/* Add more event details as needed */}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Map</h2>
        <MapContainer
          center={[40.7128, -74.006]}
          zoom={4}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((event) => (
            <Marker key={event.id} position={event.location}>
              <Popup>{event.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </div>
  );
};

export default Events;
