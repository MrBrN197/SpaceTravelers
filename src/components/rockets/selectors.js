import { createSelector } from 'reselect';

export const getLoading = (state) => state.rockets.isLoading;
export const getRockets = (state) => state.rockets.data;
export const selectReservedRockets = createSelector(
  [getRockets], (rockets) => rockets.filter((rocket) => rocket.reserved),
);
