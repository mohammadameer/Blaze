async function main() {
  const BlazeToken = await hre.ethers.getContractFactory('BlazeToken');
  const blazeToken = await BlazeToken.deploy('Hello, Hardhat!');

  await blazeToken.deployed();

  console.log('blazeToken contract deployed to:', blazeToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
