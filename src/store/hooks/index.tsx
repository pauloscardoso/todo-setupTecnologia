import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'src/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions } from 'src/store/actions';
import React from 'react';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppActions = () => {
  const dispatch = useDispatch();
  return React.useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
