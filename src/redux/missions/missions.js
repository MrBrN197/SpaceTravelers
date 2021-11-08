// Actions
const LOAD_MISSIONS = 'spaceTravelers/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelers/missions/LEAVE_MISSION';

// Reducer
export default (state = [], action = {}) => {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
};
// Action Creators
export const loadMissions = () => ({ type: LOAD_MISSIONS });
export const joinMission = () => ({ type: JOIN_MISSION });
export const cancelMission = () => ({ type: LEAVE_MISSION });
