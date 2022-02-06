//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0 <0.9.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract BlazeToken is ERC20 {
  constructor() ERC20('Blaze', 'BLAZE') {
    _mint(msg.sender, 100000000 * 10**18);
  }
}
