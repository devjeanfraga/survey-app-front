interface DeviceSizes {
  forMobile: string
  forTabletPortrait: string
  forTabletLandScape: string
  forDesktop: string
  forBigDesktop: string
}

type Device =
  | 'forMobile'
  | 'forTabletPortrait'
  | 'forTabletLandScape'
  | 'forDesktop'
  | 'forBigDesktop'

export const display = (device: Device) => {
  const sizes: DeviceSizes = {
    forMobile: 'max-width: 599px',
    forTabletPortrait: 'min-width: 600px',
    forTabletLandScape: 'min-width: 900px',
    forDesktop: 'min-width: 1200px',
    forBigDesktop: 'min-width: 1800px',
  }

  return `@media(${sizes[device]})`
}
