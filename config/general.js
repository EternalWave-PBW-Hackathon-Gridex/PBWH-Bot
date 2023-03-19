const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;

const GENERAL_CONFIG = {
    REBALANCE_THRESHORLD: 10, // now 0.001 $ should be 10000000 (100$ for production),
    REINVESTMENT_THRESORLD : 100000
};

module.exports = GENERAL_CONFIG;
