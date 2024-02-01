import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { RecoilRoot } from 'recoil'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import RootNavigator from './src/RootNavigator'

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <RootNavigator />
          <StatusBar translucent />
        </SafeAreaView>
      </SafeAreaProvider>
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#C20114',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
})
