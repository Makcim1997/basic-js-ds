const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(...listNumbers) {
    this.listNumbers = listNumbers;
  }

  root() {
    return this.listNumbers.length === 0 ? null : this.listNumbers[0]
  }

  add(data) {
    this.listNumbers.push(data);
  }

  has(data) {
    return this.listNumbers.includes(data);
  }

  find(data) {
    return this.listNumbers.includes(data) ? data : null;
  }

  remove(data) {
    this.listNumbers = this.listNumbers.filter((num) => num !== data);
  }

  min() {
    return Math.min(...this.listNumbers);
  }

  max() {
    return Math.max(...this.listNumbers);
  }
}

module.exports = {
  BinarySearchTree
};