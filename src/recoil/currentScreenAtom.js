import { atom } from 'recoil'

const currentScreenState = atom({
  key: 'currentScreen',
  default: 'chooseSport',
})

/*
chooseSport
draftOrLineup
draftStyle
pickDates
selectGames
salaryCap
scoring
salaries
teamStructure
bestTeam
*/

export default currentScreenState
