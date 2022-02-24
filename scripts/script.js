const hre = require("hardhat");

async function main() {
  const Todo = await hre.ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();

  await todo.deployed();
  const addItem = await todo.createTask("learn solidity");
  await addItem.wait();
  const addItem2 = await todo.createTask("learn solidity twice?");
  await addItem2.wait();
  const getItem = await todo.getTasks(1);

  console.log(getItem);
  console.log(addItem.hash);
  console.log("Todo deployed to:", todo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
