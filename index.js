// Code your solution in this file!

// Calculate distance from headquarters
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
  }
  
  // Calculate distance from headquarters
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
  }
  
  // Calculate distance travelled
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * 264;
  }
  
  // Function to calculate fare price based on distance travelled
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

