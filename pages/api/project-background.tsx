/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  /*
    'linear-gradient(to bottom right, #127adc 25%, #2d88de 50%, #4197e8 75%)',
    'linear-gradient(to bottom right, #ffa07a 25%, #ff753d 50%, #ff4500 75%)',
    'linear-gradient(to bottom right, #020004 25%, #0d001b 50%, #100020 75%)',
    'linear-gradient(to bottom right, #26293f 25%, #304758 50%, #37777d 75%)',
    'linear-gradient(to bottom right, #28d9bc 25%, #30d9be 50%, #7de7d6 75%)',
    'linear-gradient(to bottom right, #ff9e2d 25%, #ff782d 50%, #ff642d 75%)',
    'linear-gradient(75deg, #8e52a1 0%, #1015e4 60%, #020770 95%)',
    
  */

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundImage:
            'linear-gradient(to top right, #fffdf3 0%, #fffdf3 60%, #fffdf3 95%)',
        }}
      ></div>
    ),
    {
      width: 2880,
      height: 600,
    },
  )
}
