import * as actionType from "../actions/action";
import { updateObject } from "./utility";

const initialState = {
  tokenId: null,
  userId: null,
  error: null,
  loading: false,
  authRedirect: "/"
};
const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};
const authFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};
const authLogout = (state, action) => {
  return updateObject(state, { tokenId: null, userId: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    tokenId: action.tokenId,
    userId: action.userId
  });
};
const authRedirectPath = (state, action) => {
  return updateObject(state, { authRedirect: action.path });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionType.AUTH_START:
      return authStart(state, action);
    case actionType.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionType.SET_AUTH_REDIRECT_PATH:
      return authRedirectPath(state, action);
    case actionType.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
