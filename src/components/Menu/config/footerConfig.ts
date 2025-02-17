import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Buy SPC'),
        href: 'https://vindax.com/m-exchange-advanced.html?symbol=SPC_USDT',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://t.me/StarPacificGroup',
		target: '_blank',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/share/1BN5N3sGmr/?mibextid=wwXIfr',
		target: '_blank',
      },
    ],
  },
]
