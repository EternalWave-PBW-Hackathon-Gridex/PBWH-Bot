const grindex = require("./grindex_contract");
const cron = require("node-cron");
const { rebalance } = require("./grindex_contract");

// 1. Daily vxSHO Snapshot
cron.schedule(
  "20,50 * * * * * ",
  function () {
    grindex
      .checkForTheRebalance()
      .then((object) => {
        console.log("Let's rebalance. GMX --> WETH ")
        grindex.rebalance()
      })
      .catch((e) => {
        errorJob(e, "Scheduled Another Try After 5 Minutes.");
      });
  }
);


