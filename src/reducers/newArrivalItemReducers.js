import {
  NEWARRIVALITEMS_DETAILS_FAIL,
  NEWARRIVALITEMS_DETAILS_REQUEST,
  NEWARRIVALITEMS_DETAILS_SUCCESS,
} from '../constants/newArrivalConstants'

export const newArrivalItemDetailsReducer = (
  state = { newArrivalItem: {} },
  action
) => {
  switch (action.type) {
    case NEWARRIVALITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case NEWARRIVALITEMS_DETAILS_SUCCESS:
      return { loading: false, newArrivalItem: action.payload }
    case NEWARRIVALITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
