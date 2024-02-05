import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import currentSelectionsState from '../recoil/currentSelectionsAtom'
import currentScreenState from '../recoil/currentScreenAtom'

const sports = [
  {
    value: 'NHL',
  },
  {
    value: 'NFL',
  },
  {
    value: 'MLB',
  },
  {
    value: 'NBA',
  }
]

const ChooseSport = () => {
  const selections = useRecoilValue(currentSelectionsState)
  const setSelections = useSetRecoilState(currentSelectionsState)
  const setCurrentScreen = useSetRecoilState(currentScreenState)
  const [ sport, setSport ] = useState('NHL')
  const [ open, setOpen ] = useState(false)

  const submitSelection = () => {
    setSelections({ ...selections, sport })
    setCurrentScreen('draftOrLineup')
  }

  const selectSport = (s) => {
    setSport(s)
    setOpen(false)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          What sport are you creating a lineup for?
        </Text>
        <Pressable
          onPress={() => setOpen(!open)}
          style={styles.sportSelector}
        >
          <Text style={{ fontWeight: 'bold' }}>{sport}</Text>
          <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
        </Pressable>
        {open ? (
          <View style={styles.selectionsContainer}>
            {sports.map((item, i) => (
              <Pressable
                key={item.value}
                onPress={() => selectSport(item.value)}
                style={(i === 0 && sport === item.value)
                  ? { ...styles.firstitem, ...styles.selectedItem }
                  : i === 0
                    ? { ...styles.item, ...styles.firstItem }
                    : sport === item.value
                      ? { ...styles.selectedItem, ...styles.item }
                      : styles.item}
              >
                <Text
                  style={sport === item.value ? styles.selectedItemText : {}}
                >{item.value}</Text>
              </Pressable>
            ))}
          </View>
        ) : (
          <Pressable
            onPress={submitSelection}
            style={styles.continueButton}
          >
            <Text style={styles.continueButtonText}>
              CONTINUE
            </Text>
          </Pressable>
        )}
      </View>
    </>
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
    fontWeight: 'bold',
  },
  modal: {
    height: '50%',
    width: '80%',
    overflowY: 'scroll',
    borderRadius: 9999,
  },
  sportSelector: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    marginTop: 20,
    justifyContent: 'space-between',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  selectionsContainer: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    width: '50%',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  firstItem: {
    borderTopWidth: 0,
    padding: 5,
  },
  item: {
    borderTopWidth: 1,
    borderTopColor: '#000',
    padding: 5,
  },
  selectedItem: {
    backgroundColor: 'dodgerblue',
    padding: 5,
  },
  selectedItemText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  continueButton: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'dodgerblue'
  },
  continueButtonText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
})

export default ChooseSport
