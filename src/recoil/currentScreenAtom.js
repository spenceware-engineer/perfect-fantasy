import { atom } from 'recoil'

const currentScreenState = atom({
  key: 'currentScreen',
  default: 'draftOrLineup'
})

export default currentScreenState
