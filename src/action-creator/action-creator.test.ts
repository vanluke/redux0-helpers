import {createAction} from './action-creator';

describe('Action creator', () => {
  const LOGIN = 'login';

  it('should create a function', () => {
    const actual = createAction(LOGIN);
    expect(typeof actual).toEqual('function');
  });
  it('should create IAction', () => {
    const user = {
      name: 'John',
    };
    const response = {
      user,
    };
    const expected = {
      type: LOGIN,
      payload: {
        user,
      },
    };
    const actual = createAction(LOGIN)(response);
    expect(actual).toEqual(expected);
  });
});
