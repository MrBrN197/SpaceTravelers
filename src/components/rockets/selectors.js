import { createSelector } from 'reselect';

export const getLoading = (state) => state.rockets.isLoading;
export const getRockets = (state) => state.rockets.data;
export const getReservedRockets = createSelector(
  [getRockets], (rockets) => rockets.filter((rocket) => rocket.reserved).map((rocket) => ({
    name: rocket.rocket_name,
    id: rocket.id,
  })),
);
