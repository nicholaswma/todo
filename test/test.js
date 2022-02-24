const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Todo List", async () => {
  let Todo;
  let todo;
  beforeEach(async function () {
    Todo = await ethers.getContractFactory("Todo");
    todo = await Todo.deploy();
    await todo.deployed();
  });
  it("Should deploy a todo list eth database", async function () {
    expect(todo.address !== undefined).to.be.true;
  });

  it("Should accept an item in a todo list", async function () {
    let todoTxn = await todo.createTask("a sample task");
    await todoTxn.wait();

    expect(todoTxn.hash !== undefined).to.be.true;
  });
  it("Should accept return items", async function () {
    let todoTxn = await todo.createTask("a sample task");
    await todoTxn.wait();

    let test = await todo.getTasks(2);
    console.log(test);
    expect(await todo.getTasks(0)).to.be.above(0);
  });
});
