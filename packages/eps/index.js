var warpcore = require('warpcore');

function getPowerLevel () {
  return Math.pow(warpcore.getWarpspeed(), 3);
}

module.exports = {
  getPowerLevel: getPowerLevel
};
