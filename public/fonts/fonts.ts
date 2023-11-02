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

export const spaceMono = localFont({
  src: [
    {
      style: 'normal',
      weight: '400',
      path: './SpaceMono/SpaceMono-Regular-webfont.woff'
    },
    {
      style: 'normal',
      weight: '700',
      path: './SpaceMono/SpaceMono-Bold-webfont.woff'
    }
  ],
  variable: '--font-space-mono'
});
