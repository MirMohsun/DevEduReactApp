import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2

  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },


  button: {

    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

});

export const stylesForNav = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D2020',
  },
  btnStl:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8A5992',
    marginBottom: 5,
    paddingHorizontal: 4
  },
  btntxt: {
    fontSize: 25,
    fontFamily: 'lucida grande',
    color: '#8A5992',
  },
  headerStyle:{backgroundColor: 'red'},
  headerTitleStyle:{color: 'black'},
})

export const stylesForTodo = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})