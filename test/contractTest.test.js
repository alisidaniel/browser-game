const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

describe("MyEpicGame contract", function () {
    it("Deployment test should pass effortlessly and check ownership is correct.", async function () {
        const [owner] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory("MyEpicGame");
        const contract = await Contract.deploy();
        expect(owner.address).to.eqls(contract.address);
    });
});