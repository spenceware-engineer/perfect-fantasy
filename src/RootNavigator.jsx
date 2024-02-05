import { useRecoilValue } from 'recoil'
import currentScreenState from './recoil/currentScreenAtom'
import ChooseSport from './screens/ChooseSport'
import DraftOrLineup from './screens/DraftOrLineup'
import DraftStyle from './screens/DraftStyle'

const RootNavigator = () => {
  const currentScreen = useRecoilValue(currentScreenState)
  switch (currentScreen) {
    case 'draftOrLineup':
      return <DraftOrLineup />
    case 'draftStyle':
      return <DraftStyle />
    case 'pickDates':
    case 'selectGames':
    case 'salaryCap':
    case 'scoring':
    case 'salaries':
    case 'teamStructure':
    case 'bestTeam':
    default:
      return <ChooseSport />
  }
}

export default RootNavigator
