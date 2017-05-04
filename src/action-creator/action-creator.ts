/// <reference path="../object-assign.d.ts" />
import {IAction} from '../action.d';

export const createAction = (type: string) => (actionPayload: any): IAction =>
  ({
    type,
    payload: {
      ...actionPayload,
    },
  });
