async function main() {
  const BlazeToken = await hre.ethers.getContractFactory('BlazeToken');
  const blazeToken = await BlazeToken.deploy();

  await blazeToken.deployed();

  const BlazePool = await hre.ethers.getContractFactory('BlazePool');
  const blazePool = await BlazePool.deploy(blazeToken.address);

  await blazePool.deployed();

  blazeToken.transfer(blazePool.address, hre.ethers.utils.parseEther('10000000'));

  console.log('blazeToken contract deployed to:', blazeToken.address);
  console.log('blazePool contract deployed to:', blazePool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
