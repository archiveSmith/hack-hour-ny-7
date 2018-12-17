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

  function evaluateHand(hand) {
    let obj = {};
    hand.forEach(card => {
      if (!obj[card]) obj[card] = 1;
      else obj[card] += 1;
    })
    obj.counts = Object.values(obj).sort((a, b) => b - a);
    obj.order = Object.keys(obj).sort((a, b) => b - a);
    if (obj.counts[0] === 4) obj.score = 7;
    else if (obj.counts[0] === 3 && obj.counts[1] === 2) obj.score = 6;
    else if (obj.order.length === 6 && (Number(obj.order[0]) - Number(obj.order[4]) === 4)) obj.score = 5;
    else if (obj.counts[0] === 3) obj.score = 4;
    else if (obj.counts[0] === 2 && obj.counts[1] === 2) obj.score = 3;
    else if (obj.counts[0] === 2) obj.score = 2;
    else obj.score = 1;
    return obj;
  }
  const h1 = evaluateHand(hand1);
  const h2 = evaluateHand(hand2);

  if (h1.score < h2.score) return "Player 2 wins";
  else if (h1.score > h2.score) return "Player 1 wins";
  else {
    for(let i = 0; i < h1.order.length - 1; i++) {
      if (h1.order[0] > h2.order[0]) return "Player 1 wins";
      else if (h1.order[0] < h2.order[0]) return "Player 2 wins";
    }
    return "Draw"
  }
}

// console.log(poker([3,5,5,5,2], [2,5,5,5,6]))

module.exports = poker;
