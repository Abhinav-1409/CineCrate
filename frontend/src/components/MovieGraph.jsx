import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

// --- Fake DB: 10 interconnected movies ---
const mockDB = [
  {
    id: "movie1",
    label: "Inception",
    year: "2010",
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Thriller"],
    actors: ["Leonardo DiCaprio", "Ellen Page"],
  },
  {
    id: "movie2",
    label: "Titanic",
    year: "1997",
    director: "James Cameron",
    genres: ["Romance", "Drama"],
    actors: ["Leonardo DiCaprio", "Kate Winslet"],
  },
  {
    id: "movie3",
    label: "The Dark Knight",
    year: "2008",
    director: "Christopher Nolan",
    genres: ["Action", "Crime"],
    actors: ["Christian Bale", "Heath Ledger"],
  },
  {
    id: "movie4",
    label: "Avatar",
    year: "2009",
    director: "James Cameron",
    genres: ["Sci-Fi", "Adventure"],
    actors: ["Sam Worthington", "Zoe Saldana"],
  },
  {
    id: "movie5",
    label: "Interstellar",
    year: "2014",
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Drama"],
    actors: ["Matthew McConaughey", "Anne Hathaway"],
  },
  {
    id: "movie6",
    label: "The Revenant",
    year: "2015",
    director: "Alejandro G. Iñárritu",
    genres: ["Adventure", "Drama"],
    actors: ["Leonardo DiCaprio", "Tom Hardy"],
  },
  {
    id: "movie7",
    label: "Dunkirk",
    year: "2017",
    director: "Christopher Nolan",
    genres: ["War", "Drama"],
    actors: ["Fionn Whitehead", "Tom Hardy"],
  },
  {
    id: "movie8",
    label: "Aliens",
    year: "1986",
    director: "James Cameron",
    genres: ["Sci-Fi", "Action"],
    actors: ["Sigourney Weaver", "Michael Biehn"],
  },
  {
    id: "movie9",
    label: "Juno",
    year: "2007",
    director: "Jason Reitman",
    genres: ["Comedy", "Drama"],
    actors: ["Ellen Page", "Michael Cera"],
  },
  {
    id: "movie10",
    label: "Les Misérables",
    year: "2012",
    director: "Tom Hooper",
    genres: ["Drama", "Musical"],
    actors: ["Hugh Jackman", "Anne Hathaway"],
  },
];

// Helper to get unique metadata nodes for a movie
function getMetaNodes(movie) {
  return [
    { id: `director:${movie.director}`, label: movie.director, type: "director" },
    { id: `year:${movie.year}`, label: movie.year, type: "year" },
    ...movie.genres.map((g) => ({
      id: `genre:${g}`,
      label: g,
      type: "genre",
    })),
    ...movie.actors.map((a) => ({
      id: `actor:${a}`,
      label: a,
      type: "actor",
    })),
  ];
}

export default function MovieGraph() {
  const cyRef = useRef(null);

  useEffect(() => {
    const centerX = 400;
    const centerY = 250;
    const metaRadius = 120;

    // Start with just the first movie node
    const initialMovie = mockDB[0];
    const cy = cytoscape({
      container: cyRef.current,
      elements: [
        {
          data: { id: initialMovie.id, label: initialMovie.label, type: "movie" },
          position: { x: centerX, y: centerY },
        },
      ],
      style: [
        {
          selector: 'node[type="movie"]',
          style: {
            "background-color": "#6366f1",
            label: "data(label)",
            "font-size": 16,
            "text-valign": "center",
            "text-halign": "center",
            "shape": "roundrectangle",
            "width": 120,
            "height": 40,
          },
        },
        {
          selector: 'node[type="actor"]',
          style: {
            "background-color": "#f59e42",
            label: "data(label)",
            "shape": "ellipse",
            "font-size": 13,
          },
        },
        {
          selector: 'node[type="director"]',
          style: {
            "background-color": "#10b981",
            label: "data(label)",
            "shape": "diamond",
            "font-size": 13,
          },
        },
        {
          selector: 'node[type="genre"]',
          style: {
            "background-color": "#f472b6",
            label: "data(label)",
            "shape": "hexagon",
            "font-size": 13,
          },
        },
        {
          selector: 'node[type="year"]',
          style: {
            "background-color": "#fbbf24",
            label: "data(label)",
            "shape": "rectangle",
            "font-size": 13,
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#888",
            "target-arrow-color": "#888",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],
      layout: {
        name: "preset",
        padding: 50,
      },
      userPanningEnabled: true,
      userZoomingEnabled: true,
    });

    // On click, expand nodes
    cy.on("tap", "node", (evt) => {
      const node = evt.target;
      const nodeId = node.id();
      const nodeType = node.data("type");

      // If movie node, add its metadata nodes
      if (nodeType === "movie") {
        const movie = mockDB.find((m) => m.id === nodeId);
        if (!movie) return;
        const meta = getMetaNodes(movie);
        meta.forEach((metaNode, j) => {
          if (!cy.getElementById(metaNode.id).length) {
            const angle = (2 * Math.PI * j) / meta.length;
            const mx = node.position("x") + metaRadius * Math.cos(angle);
            const my = node.position("y") + metaRadius * Math.sin(angle);
            cy.add({
              group: "nodes",
              data: { ...metaNode, parentMovie: movie.id },
              position: { x: mx, y: my },
            });
          }
          if (!cy.edges(`[source = "${movie.id}"][target = "${metaNode.id}"]`).length) {
            cy.add({
              group: "edges",
              data: { source: movie.id, target: metaNode.id },
            });
          }
        });
      }
      // If metadata node, add all movies connected to it (not already present)
      else {
        const label = node.data("label");
        let relatedMovies = [];
        if (nodeType === "actor") relatedMovies = mockDB.filter((m) => m.actors.includes(label));
        if (nodeType === "director") relatedMovies = mockDB.filter((m) => m.director === label);
        if (nodeType === "genre") relatedMovies = mockDB.filter((m) => m.genres.includes(label));
        if (nodeType === "year") relatedMovies = mockDB.filter((m) => m.year === label);

        relatedMovies.forEach((movie, idx) => {
          if (!cy.getElementById(movie.id).length) {
            // Place new movie node further out from the metadata node
            const angle = (2 * Math.PI * idx) / relatedMovies.length;
            const r = metaRadius + 160;
            const mx = node.position("x") + r * Math.cos(angle);
            const my = node.position("y") + r * Math.sin(angle);
            cy.add({
              group: "nodes",
              data: { id: movie.id, label: movie.label, type: "movie" },
              position: { x: mx, y: my },
            });
            cy.add({
              group: "edges",
              data: { source: movie.id, target: nodeId },
            });
          } else if (!cy.edges(`[source = "${movie.id}"][target = "${nodeId}"]`).length) {
            cy.add({
              group: "edges",
              data: { source: movie.id, target: nodeId },
            });
          }
        });
      }
    });

    // --- Make metadata nodes move with their movie node ---
    cy.on("dragfree", "node[type='movie']", (evt) => {
      const movieNode = evt.target;
      const movieId = movieNode.id();
      // Find all metadata nodes that have this movie as parent
      const metaNodes = cy.nodes().filter(
        (n) => n.data("parentMovie") === movieId
      );
      if (metaNodes.length > 0) {
        const meta = getMetaNodes(mockDB.find((m) => m.id === movieId));
        metaNodes.forEach((metaNode, j) => {
          const angle = (2 * Math.PI * j) / meta.length;
          const mx = movieNode.position("x") + metaRadius * Math.cos(angle);
          const my = movieNode.position("y") + metaRadius * Math.sin(angle);
          metaNode.position({ x: mx, y: my });
        });
      }
    });

    return () => cy.destroy();
  }, []);

  return (
    <div>
      <h2 style={{ color: "#fff", marginBottom: 8 }}>Movie Explorer</h2>
      <div
        ref={cyRef}
        style={{
          width: "100%",
          height: "500px",
          background: "#18181b",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
