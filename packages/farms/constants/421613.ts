import { SerializedFarmConfig } from '@pancakeswap/farms'
import { goerliArbiTestnetTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'GDL-TOMO LP',
    lpAddress: '0xf775A6D57DC600bC7dea791DCE084b896c3fe9EE',
    token: goerliArbiTestnetTokens.busd,
    quoteToken: goerliArbiTestnetTokens.cake,
  },
  {
    pid: 1,
    lpSymbol: 'TGOLD-GDL LP',
    lpAddress: '0x28DC2C674309Ec3617c44875825eD69DB5C9AdC9',
    token: goerliArbiTestnetTokens.busd,
    quoteToken: goerliArbiTestnetTokens.cake,
  },
  {
    pid: 2,
    lpSymbol: 'GDL-TOMO LP',
    lpAddress: '0xf775A6D57DC600bC7dea791DCE084b896c3fe9EE',
    token: goerliArbiTestnetTokens.cake,
    quoteToken: goerliArbiTestnetTokens.weth,
  },
  
]

export default farms
