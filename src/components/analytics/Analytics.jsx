import { useEffect } from "react";
import ReactGA from "react-ga4";

// Replace with your Google Analytics Measurement ID
const TRACKING_ID = "G-DRGBWXVPHH"; 

function Analytics() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  return null;
}

export default Analytics;
