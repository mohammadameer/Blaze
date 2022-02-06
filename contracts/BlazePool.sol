// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.8.0 <0.9.0;

import 'hardhat/console.sol';

import './BlazeToken.sol';

// import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
// import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';
// import '@uniswap/v3-core/contracts/libraries/TickMath.sol';
// import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
// import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
// import '@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol';
// import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
// import '@uniswap/v3-periphery/contracts/base/LiquidityManagement.sol';

// import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
// import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';

contract BlazePool {
  // AggregatorV3Interface internal USDTPriceFeed;

  // ISwapRouter public immutable swapRouter;

  BlazeToken public blazeToken;

  // address public constant WETH = 0x0715A7794a1dc8e42615F059dD6e406A6594651A;
  // address public constant USDT = 0x92C09849638959196E976289418e5973CC96d645;

  // uint24 public constant poolFee = 3000;

  // INonfungiblePositionManager public immutable nonfungiblePositionManager;

  // struct Deposit {
  //   address owner;
  //   uint128 liquidity;
  //   address token0;
  //   address token1;
  // }

  // mapping(uint256 => Deposit) public deposits;
  // mapping(address => uint256) balances;

  constructor(address blazeTokenAddress) {
    blazeToken = BlazeToken(blazeTokenAddress);

    // nonfungiblePositionManager = _nonfungiblePositionManager;

    // swapRouter = _swapRouter;

    // USDTPriceFeed = AggregatorV3Interface(0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0);
  }

  function invest() public {
    blazeToken.transfer(msg.sender, 100);
  }

  // function onERC721Received(
  //   address operator,
  //   address,
  //   uint256 tokenId,
  //   bytes calldata
  // ) external override returns (bytes4) {
  //   _createDeposit(operator, tokenId);

  //   return this.onERC721Received.selector;
  // }

  // function _createDeposit(address owner, uint256 tokenId) internal {
  //   (
  //     ,
  //     ,
  //     address token0,
  //     address token1,
  //     ,
  //     ,
  //     ,
  //     uint128 liquidity,
  //     ,
  //     ,
  //     ,

  //   ) = nonfungiblePositionManager.positions(tokenId);

  //   deposits[tokenId] = Deposit({
  //     owner: owner,
  //     liquidity: liquidity,
  //     token0: token0,
  //     token1: token1
  //   });
  // }

  // /// @notice Calls the mint function defined in periphery, mints the same amount of each token. For this example we are providing 1000 DAI and 1000 USDC in liquidity
  // /// @return tokenId The id of the newly minted ERC721
  // /// @return liquidity The amount of liquidity for the position
  // /// @return amount0 The amount of token0
  // /// @return amount1 The amount of token1
  // function mintNewPosition()
  //   external
  //   returns (
  //     uint256 tokenId,
  //     uint128 liquidity,
  //     uint256 amount0,
  //     uint256 amount1
  //   )
  // {
  //   // For this example, we will provide equal amounts of liquidity in both assets.
  //   // Providing liquidity in both assets means liquidity will be earning fees and is considered in-range.
  //   uint256 amount0ToMint = 1000;
  //   uint256 amount1ToMint = 1000;

  //   // Approve the position manager
  //   TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), amount0ToMint);
  //   TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), amount1ToMint);

  //   INonfungiblePositionManager.MintParams memory params = INonfungiblePositionManager.MintParams({
  //     token0: DAI,
  //     token1: USDC,
  //     fee: poolFee,
  //     tickLower: TickMath.MIN_TICK,
  //     tickUpper: TickMath.MAX_TICK,
  //     amount0Desired: amount0ToMint,
  //     amount1Desired: amount1ToMint,
  //     amount0Min: 0,
  //     amount1Min: 0,
  //     recipient: address(this),
  //     deadline: block.timestamp
  //   });

  //   // Note that the pool defined by DAI/USDC and fee tier 0.3% must already be created and initialized in order to mint
  //   (tokenId, liquidity, amount0, amount1) = nonfungiblePositionManager.mint(params);

  //   // Create a deposit
  //   _createDeposit(msg.sender, tokenId);

  //   // Remove allowance and refund in both assets.
  //   if (amount0 < amount0ToMint) {
  //     TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), 0);
  //     uint256 refund0 = amount0ToMint - amount0;
  //     TransferHelper.safeTransfer(DAI, msg.sender, refund0);
  //   }

  //   if (amount1 < amount1ToMint) {
  //     TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), 0);
  //     uint256 refund1 = amount1ToMint - amount1;
  //     TransferHelper.safeTransfer(USDC, msg.sender, refund1);
  //   }
  // }

  // function collectAllFees(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {
  //   // Caller must own the ERC721 position
  //   // Call to safeTransfer will trigger `onERC721Received` which must return the selector else transfer will fail
  //   nonfungiblePositionManager.safeTransferFrom(msg.sender, address(this), tokenId);

  //   // set amount0Max and amount1Max to uint256.max to collect all fees
  //   // alternatively can set recipient to msg.sender and avoid another transaction in `sendToOwner`
  //   INonfungiblePositionManager.CollectParams memory params = INonfungiblePositionManager
  //     .CollectParams({
  //       tokenId: tokenId,
  //       recipient: address(this),
  //       amount0Max: type(uint128).max,
  //       amount1Max: type(uint128).max
  //     });

  //   (amount0, amount1) = nonfungiblePositionManager.collect(params);

  //   // send collected feed back to owner
  //   _sendToOwner(tokenId, amount0, amount1);
  // }

  // function _sendToOwner(
  //   uint256 tokenId,
  //   uint256 amount0,
  //   uint256 amount1
  // ) internal {
  //   // get owner of contract
  //   address owner = deposits[tokenId].owner;

  //   address token0 = deposits[tokenId].token0;
  //   address token1 = deposits[tokenId].token1;
  //   // send collected fees to owner
  //   TransferHelper.safeTransfer(token0, owner, amount0);
  //   TransferHelper.safeTransfer(token1, owner, amount1);
  // }

  // function increaseLiquidityCurrentRange(
  //   uint256 tokenId,
  //   uint256 amountAdd0,
  //   uint256 amountAdd1
  // )
  //   external
  //   returns (
  //     uint128 liquidity,
  //     uint256 amount0,
  //     uint256 amount1
  //   )
  // {
  //   INonfungiblePositionManager.IncreaseLiquidityParams memory params = INonfungiblePositionManager
  //     .IncreaseLiquidityParams({
  //       tokenId: tokenId,
  //       amount0Desired: amountAdd0,
  //       amount1Desired: amountAdd1,
  //       amount0Min: 0,
  //       amount1Min: 0,
  //       deadline: block.timestamp
  //     });

  //   (liquidity, amount0, amount1) = nonfungiblePositionManager.increaseLiquidity(params);
  // }

  // function getLatestPrice() public view returns (int256) {
  //   (, int256 price, , , ) = USDTPriceFeed.latestRoundData();
  //   return price;
  // }
}
