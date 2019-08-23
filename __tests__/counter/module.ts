import reducer, { initialState, ActionNames } from '../../src/counter/module';

test('ActionNames.INC', () => {
  expect(reducer(initialState, { type: ActionNames.INC, plusAmount: 10 })).toMatchObject({
    num: 10
  });
});

test('ActionNames.DEC', () => {
  expect(reducer(initialState, { type: ActionNames.DEC, minusAmount: 10 })).toMatchObject({
    num: -10
  });
});
