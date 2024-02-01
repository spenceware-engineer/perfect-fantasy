import {
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { useSetRecoilState } from 'recoil'
import currentScreenState from '../recoil/currentScreenAtom'

const SeasonOrRangeScreen = () => {
  const setCurrentScreen = useSetRecoilState(currentScreenState)

  const chooseDraft = () => {
    setCurrentScreen('salaryCap')
  }

  const chooseLineup = () => {
    setCurrentScreen('dates')
  }

  return (
    <View>
      <Text>Are you drafting a season lineup or setting a lineup for specific games?</Text>
      <Button onClick={chooseDraft}>Season Draft</Button>
      <Button onClick={chooseLineup}>Set Lineup</Button>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SeasonOrRangeScreen
