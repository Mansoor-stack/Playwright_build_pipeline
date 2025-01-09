const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
//   metadata: {
//     "App Version": "1.0.0",
//     "Test Environment": "STAGING",
//     Browser: "Chrome 114.0.5735.198",
//     Platform: "Windows 10",
//     Parallel: "Scenarios",
//     Executed: "Local",
//   },
};

reporter.generate(options);
