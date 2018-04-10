var warpspeed = 0;
var ejected = false;

function getWarpspeed () {
  return warpspeed;
}

function setWarpspeed (factor) {
  var good = factor >= 0 || factor < 10;
  if (good) {
    warpspeed = factor;
  }

  return good;
}

function eject () {
  setWarpspeed(0);
  ejected = true;
}

function coldstart () {
  if (warpspeed != 0) {
    return false;
  }

  setWarpspeed(Math.random() * 8 + 1);
}

module.exports = {
  getWarpspeed: getWarpspeed,
  setWarpspeed: setWarpspeed
};
