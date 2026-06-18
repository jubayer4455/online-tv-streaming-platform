/**
 * Vercel Speed Insights Initialization
 * This script initializes Vercel Speed Insights for the application
 */

import { injectSpeedInsights } from './speed-insights.js';

// Initialize Speed Insights when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSpeedInsights({
      debug: false // Set to true for debugging in development
    });
  });
} else {
  // DOM is already ready
  injectSpeedInsights({
    debug: false // Set to true for debugging in development
  });
}
