import { useEffect } from 'react'
import {
  Button,
  View,
  StyleSheet,
  TextInput,
} from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useSetRecoilState } from 'recoil'
import choicesState from '../recoil/choicesAtom'
import currentScreenState from '../recoil/currentScreenAtom'

const DateScreen = () => {
  const [ sdOpen, setSDOpen ] = useState(false)
  const [ edOpen, setEDOpen ] = useState(false)
  const [ startDate, setStartDate ] = useState(new Date())
  const [ endDate, setEndDate ] = useState(new Date())
  const recordChoices = useSetRecoilState(choicesState)
  const setCurrentScreen = useSetRecoilState(currentScreenState)

  useEffect(() => {
    recordChoices(choices => ({ ...choices, startDate, endDate }))
  }, [ startDate, endDate ])

  const goToPickGames = () => {
    setCurrentScreen('pickGames')
  }

  return (
    <View>
      <TextInput
        value={startDate}
      />
      <DatePicker
        modal
        open={sdOpen}
        date={startDate}
        onCancel={() => setSDOpen(false)}
        onConfirm={(dt) => {
          setStartDate(dt)
          setSDOpen(false)
        }}
      />
      <TextInput
        value={endDate}
      />
      <DatePicker
        modal
        open={edOpen}
        date={endDate}
        onCancel={() => setEDOpen(false)}
        onConfirm={(dt) => {
          setEndDate(dt)
          setEDOpen(false)
        }}
      />
      <Button onClick={goToPickGames}>NEXT</Button>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default DateScreen
