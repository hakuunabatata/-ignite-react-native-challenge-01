import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    gap: 4,
    position: 'absolute',
    height: 54,
    left: 24,
    right: 24,
    top: 142,
  },
  input: {
    width: 271,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    color: '#808080',
  },
})

/*

/* 

box-sizing: border-box;


display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 8px;

width: 271px;
height: 54px;


background: #262626;

border: 1px solid #0D0D0D;
border-radius: 6px;


flex: none;
order: 0;
flex-grow: 1;




width: 192px;
height: 22px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;



color: #808080;



flex: none;
order: 0;
flex-grow: 0;


*/
