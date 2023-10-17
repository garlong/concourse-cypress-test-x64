const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://dashboard.walktober.com",
        supportFile: false
    },
    env: {
        CYPRESS_VERIFY_TIMEOUT: 100000
    },
    video: false,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    }
  })
