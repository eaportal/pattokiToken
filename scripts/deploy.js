const hre = require("hardhat");

async function main() {
  const PattokiToken = await hre.ethers.getContractFactory("PattokiToken");
  const pattokiToken = await PattokiToken.deploy();

  await pattokiToken.deployed();

  console.log("pattokiToken with 1 ETH deployed to:", pattokiToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
