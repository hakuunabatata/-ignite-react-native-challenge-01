import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 20,
    position: 'absolute',
    height: 247,
    left: 24,
    right: 24,
    top: 228,
  },
  emptyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 20,
    gap: 16,
    width: 327,
    height: 208,
    borderTopColor: '#333333',
    borderTopWidth: 1,
  },
  emptyText: {
    width: 287,
    height: 40,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#808080',
  },
})

// /* Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer */

// width: 287px;
// height: 40px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 700;
// font-size: 14px;
// line-height: 140%;
// /* or 20px */
// text-align: center;

// /* Gray 300 */
// color: #808080;

// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 0;
