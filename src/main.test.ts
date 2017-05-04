import {createAction} from './action-creator/action-creator';
import {mapToReducer} from './mapper/map-to-reducer';
import {createStore} from 'redux';

describe('Redux0 helpers', () => {
  const LOGIN_SUCCESS = 'login_success';
  const LOGIN_FAILS = 'login_fails';
  const initState = {
    isLoading: false,
    user: undefined,
  };

  const reducer = ({
    [LOGIN_SUCCESS]: (state, { payload }) => Object.assign({}, 
        state,
        { 
          isLoading: false,
          user: payload.user,
        },
      ),
    [LOGIN_FAILS]: (state, { payload }) => Object.assign({}, 
        state,
        {
          isLoading: false,
          error: payload.error,
        },
    ),
  });

  it('should reduce LOGIN_SUCCESS', () => {
    const currentReducer = mapToReducer(reducer)(initState);
    const store = createStore(currentReducer);
    const serverResponse = {
      user: {
        name: 'John',
      },
    };
    const action = createAction(LOGIN_SUCCESS)(serverResponse);
    store.dispatch(action);
    const actual = store.getState();
    const expected = {
      isLoading: false,
      user: {
        name: 'John',
      },
    };
    expect(actual).toEqual(expected);
  });
});
