require("dotenv").config();
const isProduction = process.env.STRAPI_IS_PRODUCTION === "TRUE";
const PROJECT_ID = "shogun";
const URL = {
  BASE_URL: isProduction
    ? "https://cms.sigmaprotocol.app"
    : "http://localhost:1337"
};

module.exports = { isProduction, PROJECT_ID, URL };
