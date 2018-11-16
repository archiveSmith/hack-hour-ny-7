/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  if(!array) {
    return;
  }

  let resultArr=[];

  array.forEach(meetingTime => {
    //loop through resultArr to find if meetingTime start point or end point falls in the middle of any of those in resultArr
    let overlapMeeting = resultArr.find(combinedMeetingTime => {
      return (combinedMeetingTime[0] <= meetingTime[0] && meetingTime[0] <= combinedMeetingTime[1]) 
      || (combinedMeetingTime[0] <= meetingTime[1] && meetingTime[1] <= combinedMeetingTime[1]);
    })

    if(!overlapMeeting) {
      resultArr.push(meetingTime);
    }

    else {
      overlapMeeting[0] = Math.min(overlapMeeting[0],meetingTime[0])
      overlapMeeting[1] = Math.max(overlapMeeting[1],meetingTime[1]);
    }
  });

  return resultArr;
};

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
