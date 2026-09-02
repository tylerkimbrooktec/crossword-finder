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

