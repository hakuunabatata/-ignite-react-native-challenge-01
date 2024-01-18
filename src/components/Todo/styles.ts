import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 8,
    width: 327,
    height: 64,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
  },
  check: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 235,
    height: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
