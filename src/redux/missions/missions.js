// Actions
const SET_ALL_BOOKS = 'spaceTravelers/missions/SET_ALL_BOOKS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const CANCEL_MISSION = 'spaceTravelers/missions/CANCEL_MISSION';

// Reducer
export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
};
// Action Creators
export const setAllBooks = () => ({ type: SET_ALL_BOOKS });
export const joinMission = () => ({ type: JOIN_MISSION });
export const cancelMission = () => ({ type: CANCEL_MISSION });
