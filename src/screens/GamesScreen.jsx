import { useState } from 'react'
import {
  Pressable,
  View,
} from 'react-native'

const GamesScreen = () => {
  const games = [ 'BOS@MTL', 'VGK@FLA', 'CAR@PHI' ]
  const [ chosenGames, setChosenGames ] = useState([])

  const gamePress = (game) => {
    setChosenGames(cg => {
      if (cg.includes(game)) {
        return cg.filter(g => g !== game)
      }
      return [ ...cg, game ]
    })
  }

  return (
    <View>
      {games.map(game => (
        <Pressable style={chosenGames.includes(game) ? styles.chosenGame : styles.game} onPress={() => gamePress(game)}>
          <Text>{game}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  game: {

  },
  chosenGame: {

  },
})

export default GamesScreen
