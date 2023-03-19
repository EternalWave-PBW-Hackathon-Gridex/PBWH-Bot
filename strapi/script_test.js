const {
  postDailyStakingHarvest,
  postDailyPoolVotingHarvest,
  getDailyHarvest,
  postMiningHarvest,
  postStat
} = require(".");
/** Strapi Test */

// getDailyHarvest();

// postDailyStakingHarvest({
//   MESH: {
//     stakingMESHReward: 0,
//     originalMESHStakingReward: 0
//   },
//   shoMESH: {
//     distributedShoMESH: 0
//   }
// });

// postDailyPoolVotingHarvest({
//   USDC: {
//     poolVotingEarnedUSDC: 0
//   },
//   SHO: {
//     shoToShoMESHStakingPool: 0,
//     shoToShoFarm: 0,
//     totalDistributedSHO: 0
//   },
//   SHO_USDC: {
//     distributedLPToTreasury: 0
//   }
// });

// postMiningHarvest({
//   to_SHO_USDC: 11.0115,
//   to_shoMESH_MESH: 78.49133
// });

// postStat({
//   SHO: {
//     inSHO_USDCLp: 3567392.5420967676,
//     inTreasury: 340733.4891104231,
//     inSHOFarm: 9030972.498142656
//   },
//   xSHO: {
//     SHOFarmExchangeRate: 1.0056843,
//     xSHOTotalSupply: 8980219.027725335,
//     inXSHOFarm: 8820710.883610934
//   },
//   shoMESH: {
//     inShoMESHLp: 95445.9889148778,
//     inShoMESHStaking: 159328.5354591616,
//     inShoMESHFarm: 78653.6197176665,
//     shoMESHTotalSupply: 336379
//   },
//   vMESH: {
//     vMESHPercentage: 0.9382549761849417,
//     vMESHInShogun: 2691032,
//     vMESHTotalSupply: 286812441
//   },
//   lpFarm: {
//     shoMESH_MESH_lp_deposit: 20364.9254649977,
//     shoMESH_MESH_lp_total_supply: 22792.3510749345,
//     SHO_USDC_lp_deposit: 776779.4035816293,
//     SHO_USDC_lp_total_supply: 859151.1264249552
//   },
//   tresury: { treasurySHO_USDC_LP: 81632.6482954174, SHO: 340733.4891104231 }
// });
