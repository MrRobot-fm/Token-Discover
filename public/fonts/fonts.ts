import localFont from 'next/font/local';

export const proximaNova = localFont({
  src: [
    {
      style: 'normal',
      weight: '400',
      path: './proxima-nova/ProximaNova-Regular.woff'
    },
    {
      style: 'normal',
      weight: '600',
      path: './proxima-nova/ProximaNova-SemiBold.woff'
    },
    {
      style: 'normal',
      weight: '700',
      path: './proxima-nova/ProximaNova-Bold.woff'
    }
  ],
  variable: '--proxima-nova'
});





