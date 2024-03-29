import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 0,
    gap: 100,
    width: 327,
    height: 40,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    margin: 0,
    width: 100,
    height: 40,
  },
  text: {
    width: 74,
    height: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
  number: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 10,
    width: 24,
    height: 25,
    backgroundColor: '#333333',
    borderRadius: 999,
  },
})
