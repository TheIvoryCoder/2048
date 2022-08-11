const score = $(".current-score b");
let scoreCount = 0;
const moveLeft = () => {
  let l = 0;
  for (let x = 1; x < 17; x++) {
    j = x;
    let v = $("#c" + j).html();
    if (v != "") {
      v = parseInt(v);
      l = Math.floor((j - 1) / 4) * 4 + 1;
      l = j - l;
      if (l != 0) {
        for (let i = 0; i < l; i++) {
          if ($("#c" + (j - 1)).html() == "") {
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j - 1)).removeClass();
            $("#c" + (j - 1)).addClass("v" + v);
            $("#c" + (j - 1)).html(v);
          } else if ($("#c" + (j - 1)).html() == v) {
            v = v * 2;
            scoreCount += v;
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j - 1)).removeClass();
            $("#c" + (j - 1)).addClass("v" + v);
            $("#c" + (j - 1)).html(v);
            break;
          }
          j--;
        }
      }
    }
  }
};

const moveUp = () => {
  let l = 0;
  for (let x = 1; x < 17; x++) {
    j = x;
    let v = $("#c" + j).html();
    if (v != "") {
      v = parseInt(v);
      l = 4.0 * Math.ceil(j / 4.0);
      l = l / 4;
      l = l - 1;
      if (l != 0) {
        for (let i = 0; i < l; i++) {
          if ($("#c" + (j - 4)).html() == "") {
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j - 4)).removeClass();
            $("#c" + (j - 4)).addClass("v" + v);
            $("#c" + (j - 4)).html(v);
          } else if ($("#c" + (j - 4)).html() == v) {
            v = v * 2;
            scoreCount += v;
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j - 4)).removeClass();
            $("#c" + (j - 4)).addClass("v" + v);
            $("#c" + (j - 4)).html(v);
            break;
          }
          j -= 4;
        }
      }
    }
  }
};

const moveRight = () => {
  let l = 0;
  for (let x = 16; x > 0; x--) {
    j = x;
    let v = $("#c" + j).html();
    if (v != "") {
      v = parseInt(v);
      l = 4.0 * Math.ceil(j / 4.0);
      l = l - j;
      if (l != 0) {
        for (let i = 0; i < l; i++) {
          if ($("#c" + (j + 1)).html() == "") {
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j + 1)).removeClass();
            $("#c" + (j + 1)).addClass("v" + v);
            $("#c" + (j + 1)).html(v);
          } else if ($("#c" + (j + 1)).html() == v) {
            v = v * 2;
            scoreCount += v;
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j + 1)).removeClass();
            $("#c" + (j + 1)).addClass("v" + v);
            $("#c" + (j + 1)).html(v);
            break;
          }
          j++;
        }
      }
    }
  }
};

const moveDown = () => {
  let l = 0;
  for (let x = 16; x > 0; x--) {
    j = x;
    let v = $("#c" + j).html();
    if (v != "") {
      v = parseInt(v);
      l = 4.0 * Math.ceil(j / 4.0);
      l = l / 4;
      l = 4 - l;
      if (l != 0) {
        for (let i = 0; i < l; i++) {
          if ($("#c" + (j + 4)).html() == "") {
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j + 4)).removeClass();
            $("#c" + (j + 4)).addClass("v" + v);
            $("#c" + (j + 4)).html(v);
          } else if ($("#c" + (j + 4)).html() == v) {
            v = v * 2;
            scoreCount += v;
            $("#c" + j).removeClass();
            $("#c" + j).addClass("v0");
            $("#c" + j).html("");
            $("#c" + (j + 4)).removeClass();
            $("#c" + (j + 4)).addClass("v" + v);
            $("#c" + (j + 4)).html(v);
            break;
          }
          j += 4;
        }
      }
    }
  }
};

const newCell = () => {
  let cellId;
  let tryCount = 0;
  let cellFound = false;
  while (!cellFound) {
    if (tryCount < 16) {
      cellId = Math.floor(Math.random() * 16);
      if ($("#c" + cellId).html() == "") {
        $("#c" + cellId).removeClass();
        $("#c" + cellId).addClass("v2");
        $("#c" + cellId).html("2");
        cellFound = true;
      }
      tryCount++;
    } else {
      break;
    }
  }
  scoreCount += 2;
};

$(document).ready(function () {
  newCell();
  newCell();
  score.html(scoreCount);
});

$(document).on("keydown", function (e) {
  if (e.keyCode == 37) {
    moveLeft();
  } else if (e.keyCode == 38) {
    moveUp();
  } else if (e.keyCode == 39) {
    moveRight();
  } else if (e.keyCode == 40) {
    moveDown();
  }
  newCell();
  score.html(scoreCount);
});