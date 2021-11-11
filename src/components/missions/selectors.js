import { createSelector } from 'reselect';

export const getMissions = (state) => state.missions.data;
export const getLoaded = (state) => state.missions.loaded;

export const getReservedMissions = createSelector(
  getMissions,
  (missions) => missions
    .filter((m) => m.reserved)
    .map((m) => ({
      name: m.mission_name,
      id: m.mission_id,
    })),
);
