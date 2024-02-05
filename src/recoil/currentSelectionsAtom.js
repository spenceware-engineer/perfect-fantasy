import { atom } from 'recoil'

const currentSelectionsState = atom({
  key: 'currentSelections',
  default: {}
})

export default currentSelectionsState
