module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all necessary files
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "#f5f5f5",
        "gray-700": "#374151",
        "gray-800": "#1f2937",
        "sidebar-bg": "#1e1e1e",
        "sidebar-hover-bg": "#2e2e2e",
        "explorer-bg": "#2E2E2E",
        "explorer-border": "#1E1E1E",
        "explorer-hover-bg": "#3A3A3A",
        "bottombar-bg": "#2E2E2E",
        "bottombar-border": "#1E1E1E",
        "bottombar-hover-bg": "#3A3A3A",
        "tabs-bg": "#2E2E2E",
        "tabs-hover-bg": "#3A3A3A",
        accent: "#ff5722", // Changed to match the common accent color
      },
    },
  },
  plugins: [],
};
