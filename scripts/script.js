const hre = require("hardhat");

async function main() {
  const [owner, addr1, addr2] = await ethers.getSigners();

  const Todo = await hre.ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();

  await todo.deployed();
  const addItem = await todo.createTask("learn solidity");
  const addItem2 = await todo.createTask("learn solidity2");
  const addItem3 = await todo.createTask("learn solidity3");
  await addItem.wait();
  let getItem = await todo.getTasks();
  console.log(getItem);
  let completed = await todo.completeTask([0]);
  getItem = await todo.getTasks();
  console.log(getItem);

  console.log("Todo deployed to:", todo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
