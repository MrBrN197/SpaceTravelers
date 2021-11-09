// Actions
const LOAD_MISSIONS = 'spaceTravelers/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelers/missions/LEAVE_MISSION';

const setReserved = (state = {}, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      if (state.mission_id === action.payload) {
        return { ...state, reserved: true };
      }
      return state;
    case LEAVE_MISSION:
      if (state.mission_id === action.payload) {
        return { ...state, reserved: false };
      }
      return state;
    default:
      return state;
  }
};

// Reducer
export default (state = { loaded: false, data: [] }, action = {}) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return { loaded: true, data: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        data: state.data.map((m) => setReserved(m, action)),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        data: state.data.map((m) => setReserved(m, action)),
      };
    default: return state;
  }
};
// Action Creators
export const loadMissions = (missions) => ({ type: LOAD_MISSIONS, payload: missions });
export const joinMission = (id) => ({ type: JOIN_MISSION, payload: id });
export const cancelMission = () => ({ type: LEAVE_MISSION });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const fetchMissions = () => async (dispatch) => {
  const resp = await fetch('https://api.spacexdata.com/v3/missions');
  let data = await resp.json();
  data = data.map((m) => ({
    mission_id: m.mission_id,
    mission_name: m.mission_name,
    description: m.description,
  }));
  dispatch(loadMissions(data));
  return data;
};
