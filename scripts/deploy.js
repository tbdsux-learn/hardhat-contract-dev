const { ethers } = require("hardhat");

async function main() {
  const simpleStorage = await ethers.deployContract("SimpleStorage");
  await simpleStorage.waitForDeployment();

  console.log(`Contract has been deployed to ${simpleStorage.target}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
