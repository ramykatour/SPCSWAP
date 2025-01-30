import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI_ARBI, USDT_GOERLI_ARBI, CAKE_GOERLI_ARBI, BUSD_GOERLI_ARBI, SWAPP_GOERLI_ARBI } from './common'

export const goerliArbiTestnetTokens = {
  weth: WETH9[ChainId.GOERLI_ARBI],
  syrup: new Token(
    ChainId.GOERLI_ARBI,
    '0x8eEF21Df4688c97792AA2290E60373C492eF9BFD',
    18,
    'Devo',
    'DevoBar Token',
    '',
  ),
  usdc: USDC_GOERLI_ARBI,
  usdt: USDT_GOERLI_ARBI,
  busd: BUSD_GOERLI_ARBI,
  cake: CAKE_GOERLI_ARBI,
}
