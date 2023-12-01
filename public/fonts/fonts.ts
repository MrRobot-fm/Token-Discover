import localFont from 'next/font/local';

export const workSans = localFont({
  src: [
    {
      style: 'normal',
      weight: '400',
      path: './WorkSans/WorkSans-Regular.woff'
    },
    {
      style: 'normal',
      weight: '600',
      path: './WorkSans/WorkSans-SemiBold.woff'
    }
  ],
  variable: '--font-works-sans'
});





