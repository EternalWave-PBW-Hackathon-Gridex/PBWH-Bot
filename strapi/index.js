require("dotenv").config();
const { GET, POST } = require("./fetch");
const { URL, PROJECT_ID } = require("./constants");
const { BASE_URL } = URL;

const requestInfo = {
  url: `${BASE_URL}/api/`,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_ADMIN}`
  }
};

/** Daily Staking Harvest */

const postDailyStakingHarvest = async (data) => {
  await POST({
    ...requestInfo,
    url: requestInfo.url + `${PROJECT_ID}-daily-staking-harvests`,
    body: {
      data
    }
  })
    .then((res) => {
      console.log(res);
      console.log("Shogun Daily Harvest Data is added");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

/** Daily Pool Voting Harvest */
const postDailyPoolVotingHarvest = async (data) => {
  await POST({
    ...requestInfo,
    url: requestInfo.url + `${PROJECT_ID}-daily-pool-voting-harvests`,
    body: {
      data
    }
  })
    .then((res) => {
      console.log(res);
      console.log("Shogun Daily Harvest Data is added");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

/** Mining Harvest */
const postMiningHarvest = (data) => {
  POST({
    ...requestInfo,
    url: requestInfo.url + `${PROJECT_ID}-mining-harvests`,
    body: {
      data
    }
  })
    .then((res) => {
      console.log(res);
      console.log("Shogun Mining Harvest Data is added");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

/** Stat */
const postStat = (data) => {
  POST({
    ...requestInfo,
    url: requestInfo.url + `${PROJECT_ID}-stats`,
    body: {
      data
    }
  })
    .then((res) => {
      console.log(res);
      console.log("Shogun Stat Data is added");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

const getDailyHarvest = async () => {
  GET({
    url: `${BASE_URL}/api/${PROJECT_ID}-daily-harvests/2`,
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_ADMIN}`
    }
  })
    .then((res) => {
      console.log("get res", res.data.attributes);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  postDailyStakingHarvest,
  postDailyPoolVotingHarvest,
  getDailyHarvest,
  postMiningHarvest,
  postStat
};
