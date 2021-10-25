const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Knight1", "Knight2", "Knight3"], // Names
    [
      "https://i.imgur.com/2GW4uxV.jpeg", // Images
      "https://i.imgur.com/Jr6QhfO.jpeg",
      "https://i.imgur.com/riDbTvX.jpeg",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Evil Sorcerer",
    "https://i.imgur.com/Ztx0MI5.jpeg",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done deploying and minting!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
