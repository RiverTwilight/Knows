import dynamic from 'next/dynamic'
export default window.innerWidth >= 640 ? dynamic(import('./DrawerLarge')) : dynamic(import('./DrawerSmall'))
