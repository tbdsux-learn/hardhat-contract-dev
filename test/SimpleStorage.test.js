const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Simple Storage Contract", function () {
  async function deployContractFixture() {
    const contract = await ethers.deployContract("SimpleStorage");

    return { contract };
  }

  it("Deployment should store our favorite number", async function () {
    const { contract } = await loadFixture(deployContractFixture);

    const favoriteNumber = 24;

    await contract.store(favoriteNumber);
    expect(await contract.retrieve()).to.equal(favoriteNumber);
  });
});
