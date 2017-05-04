/// <reference path="../object-assign.d.ts" />
import {mapToReducer} from './map-to-reducer';
import {createStore} from 'redux';

const LOGIN = 'login';
const LOGIN_FAILS = 'login_fails';
const LOGIN_SUCCESS = 'login_success';

describe('Map to reducer', () => {
  const reducer = ({
    [LOGIN]: state => state.set('isLoading', true),
    [LOGIN_SUCCESS]: (state, { payload }) => state
          .set('isLoading', false)
          .set('user', payload.user),
    [LOGIN_FAILS]: (state, { payload }) => state
          .set('isLoading', false)
          .set('error', payload.error),
  });
  const state = {
    memo: {},
    set(key: string, value: any) {
      this.memo[key] = value;
      return this;
    },
    get(key: string) {
      return this.memo[key];
    },
  };
  const initState = {...state};
  it('should reduce initial state', () => {
    const action = {};
    const expected = state;
    const actual = Object.assign({}, state);
    expect(actual).toEqual(expected);
  });
  it('should reduce LOGIN', () => {
    const action = {
      type: LOGIN,
    };
    const currentReducer = mapToReducer(reducer)(initState);
    const acutal = currentReducer(state, action);
    const expected = true;
    expect(acutal.get('isLoading')).toEqual(expected);
  });
  it('should reduce LOGIN_SUCCESS', () => {
    const payload = {
      user: {
        name: 'John',
      },
    };
    const action = {
      type: LOGIN_SUCCESS,
      payload,
    };
    const currentReducer = mapToReducer(reducer)(initState);
    const acutal = currentReducer(state, action);
    const expectedPayload = {
      name: 'John',
    };
    const expectedIsLoading = false;
    expect(acutal.get('isLoading')).toEqual(expectedIsLoading);
    expect(acutal.get('user')).toEqual(expectedPayload);
  });
  it('should reduce LOGIN_FAILS', () => {
    const payload = {
      error: {
        message: 'Error',
      },
    };
    const action = {
      type: LOGIN_FAILS,
      payload,
    };
    const currentReducer = mapToReducer(reducer)(initState);
    const acutal = currentReducer(state, action);
    const expectedPayload = {
      message: 'Error',
    };
    const expectedIsLoading = false;
    expect(acutal.get('isLoading')).toEqual(expectedIsLoading);
    expect(acutal.get('error')).toEqual(expectedPayload);
  });

  it('should create store', () => {
    const currentReducer = mapToReducer(reducer)(initState);
    const store = createStore(currentReducer);
    expect(store).toBeDefined();
  });
  it('should dispatch proper action', () => {
    const currentReducer = mapToReducer(reducer)(initState);
    const actionCreator = () => ({
      type: LOGIN_SUCCESS,
      payload: {
        user: {
          name: 'John',
        },
      },
    });
    const store = createStore(currentReducer);
    store.dispatch(actionCreator());
    const actual = store.getState();
    const expected = {
      isLoading: false,
      user: {
          name: 'John',
      },
    };

    expect(actual.get('isLoading')).toEqual(expected.isLoading);
    expect(actual.get('user')).toEqual(expected.user);
  });
});

