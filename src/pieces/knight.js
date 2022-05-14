import Piece from './piece.js';
import { isSameRow } from '../helpers'

export default class Knight extends Piece {
  constructor(player) {
    super(player, (player === 1 ? "https://raw.githubusercontent.com/LoganHenn/40kchesspieces/main/Sentinel2.png" : "https://raw.githubusercontent.com/LoganHenn/40kchesspieces/main/ravener.png"));
  }

  isMovePossible(src, dest) {
    return ((src - 17 === dest && !isSameRow(src, dest)) ||
      (src - 10 === dest && !isSameRow(src, dest)) ||
      (src + 6 === dest && !isSameRow(src, dest)) ||
      (src + 15 === dest && !isSameRow(src, dest)) ||
      (src - 15 === dest && !isSameRow(src, dest)) ||
      (src - 6 === dest && !isSameRow(src, dest)) ||
      (src + 10 === dest && !isSameRow(src, dest)) ||
      (src + 17 === dest && !isSameRow(src, dest)))
  }

  /**
   * always returns empty array because of jumping
   * @return {[]}
   */
  getSrcToDestPath() {
    return [];
  }
}
