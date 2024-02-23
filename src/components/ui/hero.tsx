'use client'
import React from 'react'
import { ParallaxScroll } from './parallax-scroll'

export function Hero() {
  return (
    <>
      <ParallaxScroll images={images} />
    </>
  )
}

const images = [
  '/image01.jpeg',
  '/image02.jpeg',
  '/image03.jpeg',
  '/image04.jpeg',
  '/image05.jpeg',
  '/image06.jpeg',
  '/image07.jpeg',
  '/image08.jpeg',
  '/image09.jpeg',
  '/image10.jpeg',
  '/image11.jpeg',
  '/image12.jpeg',
  '/image13.jpeg',
  '/image14.jpeg',
  '/image15.jpeg',
]

// export function HeroAlternative() {
//   return <HeroParallax products={products} />
// }

// export const products = [
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image01.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image02.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image09.jpeg',
//   },

//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image04.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image05.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image03.jpeg',
//   },

//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image08.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image07.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image06.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image10.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image11.jpeg',
//   },

//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image12.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image13.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image14.jpeg',
//   },
//   {
//     title: '',
//     link: '#',
//     thumbnail: '/image01.jpeg',
//   },
// ]
