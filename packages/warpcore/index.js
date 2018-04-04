var warpspeed = 0;

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
