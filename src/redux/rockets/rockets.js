/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Actions
const TOGGLE_ROCKET = 'RESERVE_ROCKET';
const LOAD_ROCKETS_IN_PROGRESS = 'LOAD_ROCKETS_IN_PROGRESS';
const LOAD_ROCKETS_SUCCESS = 'LOAD_ROCKETS_SUCCESS';
const LOAD_ROCKETS_FAILURE = 'LOAD_ROCKETS_FAILURE';

// Reducer
const InitialData = [];

const initialState = { isLoading: false, data: InitialData };
export const rocketsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ROCKETS_SUCCESS: {
      const { rockets } = payload;
      return { ...state, isLoading: false, data: rockets };
    }
    case LOAD_ROCKETS_IN_PROGRESS:
      return {
        ...state, isLoading: true,
      };
    case LOAD_ROCKETS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case TOGGLE_ROCKET:
    {
      const toggleReserved = (rocket) => (rocket.id === payload ? {
        ...rocket,
        reserved:
          !rocket.reserved,
      } : rocket);
      return {
        ...state, data: state.data.map(toggleReserved),
      };
    }
    // do reducer stuff
    default: return state;
  }
};
// Action Creators
export const toggleRocket = (id) => ({ type: TOGGLE_ROCKET, payload: id });

const loadRocketsInProgress = () => ({ type: LOAD_ROCKETS_IN_PROGRESS });

const loadRocketsSuccess = (rockets) => ({ type: LOAD_ROCKETS_SUCCESS, payload: { rockets } });

const loadRocketsFailure = () => ({ type: LOAD_ROCKETS_FAILURE });

// side effects, only as applicable
// e.g. thunks, epics, etc

export const displayAlert = (text) => () => {
  alert(`${text}`);
};

export const loadRockets = () => (
  async (dispatch) => {
    try {
      dispatch(loadRocketsInProgress());
      const response = await fetch('https://api.spacexdata.com/v3/rockets');
      const rockets = await response.json();

      dispatch(loadRocketsSuccess(rockets));
    } catch (e) {
      dispatch(loadRocketsFailure());
      dispatch(displayAlert(e));
    }
  }
);
