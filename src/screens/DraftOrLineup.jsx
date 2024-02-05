import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import currentScreenState from '../recoil/currentScreenAtom'
import currentSelectionsState from '../recoil/currentSelectionsAtom'

const DraftOrLineup = () => {
  const selections = useRecoilValue(currentSelectionsState)
  const setSelections = useSetRecoilState(currentSelectionsState)
  const setCurrentScreen = useSetRecoilState(currentScreenState)

  const setLineup = () => {
    setSelections({ ...selections, draftOrLineup: 'lineup' })
    setCurrentScreen('draftStyle')
  }

  const draft = () => {
    setSelections({ ...selections, draftOrLineup: 'draft' })
    setCurrentScreen('draftStyle')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Are you drafting for the season or setting a lineup?
      </Text>
      <View style={styles.buttonArea}>
        <Pressable
          onPress={draft}
          style={styles.button}
        >
          <Text>
            Drafting for Season
          </Text>
        </Pressable>
        <Pressable
          onPress={setLineup}
          style={styles.button}
        >
          <Text>
            Setting Lineup
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFF',
    width: '80%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWieght: 'bold',
    marginBottom: 10,
  },
  buttonArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 15,
    backgroundColor: 'dodgerblue',
    borderRadius: 15,
    width: '100%',
  },
})

export default DraftOrLineup
