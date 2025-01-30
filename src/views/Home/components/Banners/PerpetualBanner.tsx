import { ArrowForwardIcon, Button, Text, Link, useMatchBreakpoints, useIsomorphicEffect } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import { memo, useMemo, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { perpetualImage, perpetualMobileImage } from './images'
import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  right: 0;
  bottom: 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    bottom: 8.2px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    bottom: 9px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    bottom: -2px;
  }
`
const Header = styled(S.StyledHeading)`
  font-size: 20px;
  min-height: 44px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
    min-height: auto;
  }
`

const HEADING_ONE_LINE_HEIGHT = 27

const PerpetualBanner = () => {
  const {
    t,
    currentLanguage: { code },
  } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  const { isDark } = useTheme()

  const perpetualUrl = useMemo(
    () => `http://Polygon.devoswap.xyz/swap?outputCurrency=0xa9ed3637E6E804796363D1dF384bA2F56655bC3A${perpLangMap(code)}/futures/BTCUSDT?theme=${perpTheme(isDark)}`,
    [code, isDark],
  )
  const headerRef = useRef<HTMLDivElement>(null)

  useIsomorphicEffect(() => {
    const target = headerRef.current
    target.style.fontSize = '' // reset
    target.style.lineHeight = ''
    if (!target || !isMobile) return
    if (target.offsetHeight > HEADING_ONE_LINE_HEIGHT) {
      target.style.fontSize = '18px'
      target.style.lineHeight = `${HEADING_ONE_LINE_HEIGHT}px`
    }
  }, [isMobile, code])

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LeftWrapper>
          <S.StyledSubheading ref={headerRef}>{t('SPC Chain is an innovative solution to bring programmability and interoperability to SPC Chain.')}</S.StyledSubheading>
          <Header width={['160px', '160px', 'auto']}>{t('SpcSwap : DeFi for the Future.')}</Header>
          <Link href={perpetualUrl} external>
            <Button>
              <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                {t('Swap')}
              </Text>
              <ArrowForwardIcon color="invertedContrast" />
            </Button>
          </Link>
        </S.LeftWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(PerpetualBanner)
