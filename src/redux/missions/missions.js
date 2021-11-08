// Actions
const LOAD_MISSIONS = 'spaceTravelers/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelers/missions/LEAVE_MISSION';

// Reducer
export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    default: return state;
  }
};
// Action Creators
export const loadMissions = (missions) => ({ type: LOAD_MISSIONS, payload: missions });
export const joinMission = () => ({ type: JOIN_MISSION });
export const cancelMission = () => ({ type: LEAVE_MISSION });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const fetchMissions = () => async (dispatch) => {
  const data = [];
  dispatch(loadMissions(data));
  return data;
};
