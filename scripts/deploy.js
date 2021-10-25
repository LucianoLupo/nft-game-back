const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Knight1", "Knight2", "Knight3"], // Names
    [
      "Qme1dUuFK4hb4Q4WZosbqPM5GYvpbb9WHhgsQAqF5sCWZ9", // Images
      "QmPoMM9RrwS8SSPdirJUntBPKwfJRdpMc9MVtZ8siAYcmo",
      "QmaiCw8PpkrcT5tqrJnTAvAHM85MhXBAPnjGP7UQXmkgeC",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Evil Sorcerer",
    "QmZj9b6K1SLVuRYZHyiDdYbkiJnos9AUeaiLAYdA9ogqed",
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
