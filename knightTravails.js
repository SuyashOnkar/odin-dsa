/**
 * Algorithm
 *
 * Generate the next moves of each position and add them to a queue
 * and traverse them in a bfs tree structure
 *
 * Suppose we have to go from [3,3] to [4,3]
 *
 * 1. Queue = [(3,3)]
 * 2. Repeat for Queue.length
 * 3. Queue.shift() and generate its children and add to list.
 *  (permissable moves = (+-1,+-2))
 *  Queue = [(4,5)(2,5)(4,1)(2,1)(5,4)(1,4)(5,2)(1,2)]
 * Repeat 2,3 till find Final
 */

const MOVES = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
];

const LIMIT = 8;

const squareObj = (current, prev = null) => {
  this.current = current;
  this.prev = prev;

  return { prev, current };
};

function KnightMoves(init, final) {
  let queue = [];

  queue.push(squareObj(init));

  while (queue.length !== 0) {
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let sq = queue.shift();

      if (sq.current[0] === final[0] && sq.current[1] === final[1]) {
        let arr = [];
        let nsq = sq;
        while (nsq.prev !== null) {
          arr.push(nsq.current);
          nsq = nsq.prev;
        }
        arr.push(nsq.current); //First Element
        console.log(
          `You made it in ${arr.length - 1} moves! Here's your path:`
        );
        return arr.reverse();
      }

      MOVES.forEach((i) => {
        let newNode = squareObj(
          [i[0] + sq.current[0], i[1] + sq.current[1]],
          sq
        );
        if (
          newNode.current[0] >= 0 &&
          newNode.current[0] <= 7 &&
          newNode.current[1] >= 0 &&
          newNode.current[1] <= 7
        ) {
          queue.push(newNode);
        }
      });
    }
  }
}

console.log(KnightMoves([0, 0], [0, 2]));

console.log(KnightMoves([0, 0], [0, 7]));
