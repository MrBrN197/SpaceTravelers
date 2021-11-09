/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Actions
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const LOAD_ROCKETS_IN_PROGRESS = 'LOAD_ROCKETS_IN_PROGRESS';
const LOAD_ROCKETS_SUCCESS = 'LOAD_ROCKETS_SUCCESS';
const LOAD_ROCKETS_FAILURE = 'LOAD_ROCKETS_FAILURE';

// Reducer
const InitialData = [{
  id: 1,
  active: true,
  stages: 2,
  boosters: 0,
  cost_per_launch: 6700000,
  success_rate_pct: 40,
  first_flight: '2006-03-24',
  country: 'Republic of the Marshall Islands',
  company: 'SpaceX',
  height: { meters: 22.25, feet: 73 },
  diameter: { meters: 1.68, feet: 5.5 },
  mass: { kg: 30146, lb: 66460 },
  payload_weights: [{
    id: 'leo', name: 'Low Earth Orbit', kg: 450, lb: 992,
  }],
  first_stage: {
    // eslint-disable-next-line max-len
    reusable: false, engines: 1, fuel_amount_tons: 44.3, burn_time_sec: 169, thrust_sea_level: { kN: 420, lbf: 94000 }, thrust_vacuum: { kN: 480, lbf: 110000 },
  },
  second_stage: {
    reusable: false, engines: 1, fuel_amount_tons: 3.38, burn_time_sec: 378, thrust: { kN: 31, lbf: 7000 }, payloads: { option_1: 'composite fairing', composite_fairing: { height: { meters: 3.5, feet: 11.5 }, diameter: { meters: 1.5, feet: 4.9 } } },
  },
  engines: {
    number: 1, type: 'merlin', version: '1C', layout: 'single', isp: { sea_level: 267, vacuum: 304 }, engine_loss_max: 0, propellant_1: 'liquid oxygen', propellant_2: 'RP-1 kerosene', thrust_sea_level: { kN: 420, lbf: 94000 }, thrust_vacuum: { kN: 480, lbf: 110000 }, thrust_to_weight: 96,
  },
  landing_legs: { number: 0, material: null },
  flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
  wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
  description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  rocket_id: 'falcon1',
  rocket_name: 'Falcon 1',
  rocket_type: 'rocket',
}];

const initialState = { isLoading: false, data: InitialData };
export const rocketsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    // do reducer stuff
    default: return state;
  }
};
// Action Creators
export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const loadRocketsInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const loadRocketsSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const loadRocketsFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
// side effects, only as applicable
// e.g. thunks, epics, etc
export const effect = () => {
};
