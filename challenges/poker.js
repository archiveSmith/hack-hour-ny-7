/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  hand1.sort((a, b) => {return a - b});
  hand2.sort((a, b ) => {return a - b});
  
  const isFourOfKind = (hand) => {
    if ((hand[0] === hand[1] && hand[1] === hand[2] && hand[2] === hand[3]) || (hand[1] === hand[2] && hand[2] === hand[3] && hand[3] === hand[4])) {
      return true;
    } else {
      return false;
    }
  }
  const isFullHouse = (hand) => {
    if ((hand[0] === hand[1] && hand[1] === hand[2] && hand[3] === hand[4]) || (hand[0] === hand[1] && hand[2] === hand[3] && hand[3] === hand[4])) {
      return true;
    } else {
      return false;
    }
  }
  const isStraight = (hand) => {
    if ((hand[0] === hand[1] - 1) && (hand[0] === hand[2] - 2) && (hand[0] === hand[3] - 3) && (hand[0] === hand[4] - 4)) {
      return true;
    } else {
      return false;
    }
  }
  const isTriple = (hand) => {
    if ((hand[0] === hand[1] && hand[1] === hand[2]) || (hand[1] === hand[2] && hand[2] === hand[3]) || (hand[2] === hand[3] && hand[3] === hand[4])) {
      return true;
    } else{
      return false;
    }
  }
}

console.log(poker([4,5,3,2,1], [10,9,8,7,6]));
module.exports = poker;
