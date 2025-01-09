module.exports = {
    default: {
      require: ['features/step_definitions/steps.js'], // Update with the path to your step definitions
      format: ['json:reports/cucumber_report.json'], // Generate JSON report
      paths: ['features/sampleTest.feature'], // Path to your feature files
    //  publishQuiet: true, // Suppress public reports (optional)
    },
  };
  
  