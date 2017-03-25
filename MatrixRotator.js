const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
    // this.arrOne = [];
    // this.arrTwo = [];
    // this.arrThree = [];
    // this.bigArr2 = [];
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction){
    // do work here

    if(direction === Direction.CW){
        let newMatrix = [];
        for(let i = 0; i < this.matrix.length; i ++){
            let newRow = [];
            for(let j = 0; j < this.matrix[i].length; j++){
                newRow.unshift(this.matrix[j][i]);
            }
            newMatrix.push(newRow)
        }
        this.matrix = newMatrix;

    }
    if(direction === Direction.CCW){
        let newMatrix = [];
        for(let i = 0; i < this.matrix.length; i ++){
            let newRow = [];
            for(let j = 0; j < this.matrix[i].length; j++){
                newRow.push(this.matrix[j][i]);
            }
            newMatrix.unshift(newRow)
        }
        this.matrix = newMatrix;

    }
    // must be a valid Direction, see Direction.js
  }

};
