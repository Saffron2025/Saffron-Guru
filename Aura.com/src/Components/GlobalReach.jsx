// GlobalReach.jsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import "./GlobalReach.css";

// World GeoJSON (full world so that US & Canada appear fully)
const WORLD_GEOJSON =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

// Helper to check US or Canada
const isUSOrCanada = (name) => {
  if (!name) return false;
  const lower = name.toLowerCase();
  return (
    lower.includes("united states") || lower === "usa" || lower.includes("canada")
  );
};

const GlobalReach = () => {
  const [hoverName, setHoverName] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  // ✅ Safe marker builder
  const buildMarkers = (features) =>
    features
      .filter((f) => isUSOrCanada(f.properties.name))
      .map((f) => {
        try {
          if (!f.geometry || !f.geometry.coordinates) return null; // skip invalid
          const centroid = geoCentroid(f);
          if (!Array.isArray(centroid) || centroid.length !== 2) return null;
          const [lng, lat] = centroid;
          return { name: f.properties.name, coordinates: [lng, lat] };
        } catch {
          return null;
        }
      })
      .filter(Boolean);

  return (
    <section className="global-reach-section">
      <div className="global-bg-blobs" />
      <Container className="text-center">
        <h2 className="global-heading">Serving the US and Canada</h2>
        <p className="global-subtext">
          Protecting{" "}
          <span className="highlight">Over 100,000 Devices Secured.</span>
        </p>

        <div
          className="map-wrapper"
          onMouseMove={(e) =>
            setHoverPos({ x: e.clientX, y: e.clientY + window.scrollY })
          }
        >
          <ComposableMap
            projection="geoAlbers"
            projectionConfig={{
              scale: 800, // zoom level adjust
            }}
            style={{ width: "100%", height: "auto" }}
          >
            {/* ✅ Centered & zoomed for full view */}
            <ZoomableGroup
              center={[-95, 55]} // roughly center of US & Canada
              zoom={1} // 1 = full view, adjust if needed
              disablePanning // prevent manual move
            >
              <Geographies geography={WORLD_GEOJSON}>
                {({ geographies }) => {
                  const filtered = geographies.filter((geo) =>
                    isUSOrCanada(geo.properties.name)
                  );

                  const markers = buildMarkers(filtered);

                  return (
                    <>
                      {/* Country Shapes */}
                      {filtered.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => setHoverName(geo.properties.name)}
                          onMouseLeave={() => setHoverName(null)}
                          style={{
                            default: {
                              fill: geo.properties.name
                                .toLowerCase()
                                .includes("canada")
                                ? "#32CD32" // Canada green
                                : "#1E90FF", // US blue
                              stroke: "#fff",
                              strokeWidth: 0.5,
                              outline: "none",
                            },
                            hover: {
                              fill: "#FFD700",
                              stroke: "#fff",
                              strokeWidth: 0.8,
                              outline: "none",
                            },
                          }}
                        />
                      ))}

                      {/* Markers */}
                      {markers.map((m, idx) => (
                        <Marker key={idx} coordinates={m.coordinates}>
                          <g className="label-marker">
                            <circle className="dot dot-pulse" r={2.6} />
                            <text
                              className="geo-label"
                              y={-7}
                              textAnchor="middle"
                            >
                              {m.name}
                            </text>
                          </g>
                        </Marker>
                      ))}
                    </>
                  );
                }}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip */}
          {hoverName && (
            <div
              className="map-tooltip"
              style={{ left: hoverPos.x + 12, top: hoverPos.y + 12 }}
            >
              {hoverName}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default GlobalReach;
