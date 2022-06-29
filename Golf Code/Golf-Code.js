/**
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
**/
  
  
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  }
  else if (strokes <= par -2) {
    return "Eagle";
  }
  else if (strokes == par -1) {
    return "Birdie";
  }
  else if (strokes == par) {
    return "Par";
  }
  else if (strokes == par + 1) {
    return "Bogey";
  }
  else if (strokes == par + 2) {
    return "Double Bogey";
  }
  else {
    return "Go Home!";
  }

  return "Change Me";
}

golfScore(5, 4);
