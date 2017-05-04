import {IAction} from '../action.d';

export const mapToReducer = reducer => initState => (state: any = initState, action: IAction) =>
    (reducer[action.type] || function (s) { return s; })
      (state, action);
