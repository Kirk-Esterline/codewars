/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
*/


// My Solution

// initilize a times variable 
// check all 3 conditions are met if not met times = -1 and return times
// while bounce is greater than 1 (random number -> lowered to .55 due to tests)
// if bounce height greater than window height times += 2
// if bounce height less than window height times += 1 and return times
// return final times

function bouncingBall(h,  bounce,  window) {
    let times = 0
    if (h <= 0 || window >= h) {
      times = -1
      return times
    } else if ( bounce <= 0 || bounce >= 1) {
      times = -1
      return times
    } else {
      let bHight = h * bounce
      while (bHight > 0.55) {
        if (bHight > window) {
          times += 2
        } else if (bHight <= window) {
          times += 1
          return times
        }
        bHight *= bounce
      }
    }
    return times
  }