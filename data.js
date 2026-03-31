/* 
  Environmental Statistics Dashboard
  data.js 
*/

/* 
  Environmental Statistics Dashboard
  data.js 

  This file acts as a simple database. 
  You can manually update these values with recent data (e.g., from NASA or NOAA).
*/

window.dashboardData = {
  "2025": {
    "Global": {
      stats: { co2: "424.5", temp: "+1.35", aqi: 62, seaLevel: "103.1" },
      trends: { co2: "+2.5 ppm y/y", temp: "+0.05 °C y/y", aqi: "-4% y/y", seaLevel: "+3.4 mm y/y" },
      charts: {
        lineSeries: [1.22, 1.25, 1.28, 1.30, 1.33, 1.35],
        lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        barSeries: [14.5, 8.2, 6.4, 5.1],
        barLabels: ['Asia', 'Americas', 'Europe', 'Rest of World'],
        pieSeries: [40, 35, 15, 10],
        pieLabels: ['Energy Production', 'Transportation', 'Industrial', 'Agriculture/Other']
      }
    },
    "Asia": {
      stats: { co2: "430.1", temp: "+1.42", aqi: 115, seaLevel: "N/A" },
      trends: { co2: "+3.1 ppm y/y", temp: "+0.07 °C y/y", aqi: "+5% y/y", seaLevel: "-" },
      charts: {
        lineSeries: [1.30, 1.32, 1.35, 1.38, 1.40, 1.42],
        lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        barSeries: [14.5, 1.0, 0, 0], // Focusing strictly on this region vs rest would be custom
        barLabels: ['Asia Data Pipeline 1', 'Pipeline 2', 'Pipeline 3', 'Other'],
        pieSeries: [45, 30, 20, 5],
        pieLabels: ['Energy Production', 'Transportation', 'Industrial', 'Agriculture/Other']
      }
    },
    "Europe": {
      stats: { co2: "419.0", temp: "+1.30", aqi: 48, seaLevel: "N/A" },
      trends: { co2: "+1.5 ppm y/y", temp: "+0.03 °C y/y", aqi: "-8% y/y", seaLevel: "-" },
      charts: {
        lineSeries: [1.18, 1.20, 1.25, 1.26, 1.28, 1.30],
        lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        barSeries: [4.0, 1.4, 0.6, 0.4],
        barLabels: ['Germany', 'UK', 'France', 'Other'],
        pieSeries: [35, 40, 15, 10],
        pieLabels: ['Energy Production', 'Transportation', 'Industrial', 'Agriculture/Other']
      }
    },
    "Americas": {
        stats: { co2: "422.3", temp: "+1.32", aqi: 54, seaLevel: "N/A" },
        trends: { co2: "+2.0 ppm y/y", temp: "+0.04 °C y/y", aqi: "-2% y/y", seaLevel: "-" },
        charts: {
          lineSeries: [1.20, 1.23, 1.26, 1.29, 1.30, 1.32],
          lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          barSeries: [5.2, 1.2, 0.8, 1.0],
          barLabels: ['USA', 'Canada', 'Brazil', 'Other'],
          pieSeries: [42, 38, 12, 8],
          pieLabels: ['Energy Production', 'Transportation', 'Industrial', 'Agriculture/Other']
        }
    }
  },
  "2024": {
    "Global": {
      stats: { co2: "422.0", temp: "+1.30", aqi: 65, seaLevel: "99.7" },
      trends: { co2: "+2.4 ppm y/y", temp: "+0.05 °C y/y", aqi: "-3% y/y", seaLevel: "+3.2 mm y/y" },
      charts: {
        lineSeries: [1.15, 1.18, 1.20, 1.22, 1.25, 1.30],
        lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        barSeries: [14.2, 8.0, 6.5, 5.0],
        barLabels: ['Asia', 'Americas', 'Europe', 'Rest of World'],
        pieSeries: [41, 34, 15, 10],
        pieLabels: ['Energy Production', 'Transportation', 'Industrial', 'Agriculture/Other']
      }
    },
    "Asia": { stats: { co2: "427.0", temp: "+1.35", aqi: 110, seaLevel: "N/A" }, trends: { co2: "+3.0 ppm y/y", temp: "+0.06 °C y/y", aqi: "+4% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [1.25, 1.28, 1.30, 1.32, 1.34, 1.35], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } },
    "Europe": { stats: { co2: "417.5", temp: "+1.27", aqi: 52, seaLevel: "N/A" }, trends: { co2: "+1.6 ppm y/y", temp: "+0.03 °C y/y", aqi: "-5% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [1.15, 1.18, 1.20, 1.25, 1.26, 1.27], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } },
    "Americas": { stats: { co2: "420.3", temp: "+1.28", aqi: 55, seaLevel: "N/A" }, trends: { co2: "+2.1 ppm y/y", temp: "+0.04 °C y/y", aqi: "-1% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [1.18, 1.20, 1.22, 1.25, 1.26, 1.28], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } }
  },
  "2020": {
     "Global": {
      stats: { co2: "414.2", temp: "+1.10", aqi: 58, seaLevel: "86.5" },
      trends: { co2: "+2.1 ppm y/y", temp: "+0.04 °C y/y", aqi: "-12% y/y", seaLevel: "+3.0 mm y/y" },
      charts: {
        lineSeries: [1.02, 1.05, 1.08, 1.05, 1.08, 1.10],
        lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        barSeries: [13.1, 7.5, 6.1, 4.8],
        barLabels: ['Asia', 'Americas', 'Europe', 'Rest of World'],
        pieSeries: [38, 25, 27, 10], // Noticeable shift due to 2020 events
        pieLabels: ['Energy Production', 'Transportation', 'Industrial', 'Agriculture/Other']
      }
    },
    "Asia": { stats: { co2: "418.0", temp: "+1.15", aqi: 95, seaLevel: "N/A" }, trends: { co2: "+2.5 ppm y/y", temp: "+0.05 °C y/y", aqi: "-10% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [1.10, 1.12, 1.10, 1.08, 1.12, 1.15], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } },
    "Europe": { stats: { co2: "410.5", temp: "+1.05", aqi: 42, seaLevel: "N/A" }, trends: { co2: "+1.2 ppm y/y", temp: "+0.02 °C y/y", aqi: "-15% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [0.98, 1.00, 1.02, 0.95, 1.02, 1.05], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } },
    "Americas": { stats: { co2: "412.3", temp: "+1.08", aqi: 45, seaLevel: "N/A" }, trends: { co2: "+1.8 ppm y/y", temp: "+0.03 °C y/y", aqi: "-11% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [1.00, 1.02, 1.05, 1.01, 1.05, 1.08], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } }
  },
  "2015": {
    "Global": {
      stats: { co2: "400.8", temp: "+0.95", aqi: 75, seaLevel: "71.4" },
      trends: { co2: "+2.0 ppm y/y", temp: "+0.03 °C y/y", aqi: "+2% y/y", seaLevel: "+2.8 mm y/y" },
      charts: {
        lineSeries: [0.88, 0.90, 0.92, 0.93, 0.94, 0.95],
        lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        barSeries: [12.0, 7.8, 6.8, 4.5],
        barLabels: ['Asia', 'Americas', 'Europe', 'Rest of World'],
        pieSeries: [45, 30, 15, 10], 
        pieLabels: ['Energy Production', 'Transportation', 'Industrial', 'Agriculture/Other']
      }
    },
    "Asia": { stats: { co2: "404.0", temp: "+1.00", aqi: 120, seaLevel: "N/A" }, trends: { co2: "+2.8 ppm y/y", temp: "+0.04 °C y/y", aqi: "+5% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [0.92, 0.94, 0.96, 0.98, 1.00, 1.00], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } },
    "Europe": { stats: { co2: "398.5", temp: "+0.90", aqi: 65, seaLevel: "N/A" }, trends: { co2: "+1.5 ppm y/y", temp: "+0.02 °C y/y", aqi: "+1% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [0.85, 0.88, 0.89, 0.90, 0.90, 0.90], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } },
    "Americas": { stats: { co2: "399.3", temp: "+0.92", aqi: 70, seaLevel: "N/A" }, trends: { co2: "+1.9 ppm y/y", temp: "+0.03 °C y/y", aqi: "+2% y/y", seaLevel: "-" }, charts: { lineLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], lineSeries: [0.86, 0.88, 0.90, 0.92, 0.92, 0.92], barLabels: [], barSeries: [], pieLabels: [], pieSeries: [] } }
  }
};

// EVS System Facts for the Right Sidebar Widget
window.dashboardData.interestingFacts = [
  "Oceans absorb approximately 30% of the carbon dioxide produced by humans, buffering the impacts of global warming.",
  "Since 1993, global sea level has risen at an accelerating rate, currently averaging 3.4 millimeters per year.",
  "The 10 warmest years in the historical record have all occurred in the past decade.",
  "Over 1 million species are currently threatened with extinction due to accelerating habitat loss and climate shifts.",
  "Transitioning to renewable energy globally could reduce atmospheric pollution emissions by over 70% by 2050.",
  "Deforestation accounts for nearly 15% of global greenhouse gas emissions, comparable to the entire transportation sector."
];

// Live feed snippets for the Left Sidebar simulated stream
window.dashboardData.liveLogMessages = [
  { type: "info", msg: "Telemetry node 43-A syncing. Connection stable." },
  { type: "info", msg: "Updating global satellite carbon mapping..." },
  { type: "alert", msg: "Spike detected: Particulate matter PM2.5 in Eastern sector." },
  { type: "info", msg: "Analyzing oceanic temperature deviations in Pacific." },
  { type: "alert", msg: "Warning: Deforestation index in Amazon basin rising above baseline." },
  { type: "info", msg: "Recalibrating historical baseline aggregates..." },
  { type: "info", msg: "Sensor array 92 nominal. Data stream optimal." },
  { type: "alert", msg: "Anomaly detected in Arctic sea ice volume metrics." }
];
