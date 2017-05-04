# Redux helpers for action creators and reducer

## Allow to use object instead of switch case statement
## Simplify creating action creators
```
import {mapToReducer, createAction} from 'redux0-helpers';

const initState = {
  isLoading: false,
  user: undefined,
};

reducer = mapToReducer({
    [LOGIN]: state => state.set('isLoading', true),
    [LOGIN_SUCCESS]: (state, { payload }) => state
          .set('isLoading', false)
          .set('user', payload.user),
    [LOGIN_FAILS]: (state, { payload }) => state
          .set('isLoading', false)
          .set('error', payload.error),
  })(initState);

const store = createStore(currentReducer);
```
**Server response**
```
{
  user: {
	name: 'John' 
  }
}
```

```
const actionCreator = createAction(LOGIN_SUCCESS)(serverResponse);
store.dispatch(actionCreator());
```
