import test from "node:test"
import assert from "node:assert"
import findWords from "./tyler.js"


test("assert test case from redmine", () => {
    const board = [
  ['R', 'D', 'T', 'G'],
  ['W', 'C', 'A', 'T'],
  ['E', 'E', 'R', '*'],
  ['B', 'I', 'R', 'D']];

  const res = findWords(board, ["CAT", "BIRD", "TREE", "RAT"]);

  assert(res, {
  CAT: { type: "row", direction: "normal", beginsAt: [1, 1] },
  RAT: { type: "column", direction: "reverse", beginsAt: [2, 2] },
  BIRD: { type: "row", direction: "normal", beginsAt: [3, 0] }
})
})

test("assert complex test case", () => {
    const board = [
  ['Q', 'L', 'M', 'X', 'P', 'V', 'H', 'N', 'S', 'K'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'C', 'A', 'T', 'J'],
  ['Q', 'T', 'R', 'E', 'E', 'L', 'M', 'N', 'O', 'P'],
  ['B', 'W', 'M', 'Y', 'Z', 'L', 'Q', 'W', 'X', 'T'],
  ['I', 'X', 'A', 'U', 'V', 'C', 'D', 'E', 'F', 'A'],
  ['R', 'Y', 'T', 'G', 'H', 'I', 'J', 'K', 'L', 'R'],
  ['D', 'Z', 'H', 'N', 'O', 'P', 'Q', 'R', 'S', 'M'],
  ['E', 'F', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q']];

  const res = findWords(board, ["CAT", "TREE", "BIRD", "MATH", "RAT"]);

  assert.deepStrictEqual(res, {
    CAT: { type: "row", direction: "normal", beginsAt: [1, 6] },
    TREE: { type: "row", direction: "normal", beginsAt: [2, 1] },
    BIRD: { type: "column", direction: "normal", beginsAt: [3, 0] },
    MATH: { type: "column", direction: "normal", beginsAt: [3, 2] },
    RAT: { type: "column", direction: "reverse", beginsAt: [5, 9] }
  })
})

test("finds words in reverse columns", () => {
  const board = [
    ['Q', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'],
    ['D', 'E', 'F', 'G', 'H', 'I', 'T', 'J'],
    ['K', 'N', 'L', 'M', 'O', 'P', 'N', 'R'],
    ['S', 'O', 'U', 'V', 'W', 'X', 'A', 'Y'],
    ['Z', 'T', 'B', 'C', 'D', 'E', 'L', 'F'],
    ['G', 'S', 'H', 'I', 'J', 'K', 'P', 'Q']
  ]

  const res = findWords(board, ["STONE", "PLANT"])

  assert.deepStrictEqual(res, {
    STONE: { type: "column", direction: "reverse", beginsAt: [5, 1] },
    PLANT: { type: "column", direction: "reverse", beginsAt: [5, 6] }
  })
})

