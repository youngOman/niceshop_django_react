import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_DETAILS_RESET,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_RESET,
	// Admin 相關
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_LIST_RESET,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_FAIL,
	USER_UPDATE_RESET,
} from "../constants/userConstants.js";

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST: // 請求中
			return { loading: true };
		case USER_LOGIN_SUCCESS: // 成功
			return { loading: false, userInfo: action.payload }; // userInfo 是從後端回傳的資料
		case USER_LOGIN_FAIL: // 錯誤
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST: // 請求中
			return { loading: true };
		case USER_REGISTER_SUCCESS: // 成功
			return { loading: false, userInfo: action.payload }; // userInfo 是從後端回傳的資料
		case USER_REGISTER_FAIL: // 錯誤
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userDetailsReducer = (state = { user: {} }, action) => { // 預設 user 空物件，為了在後續的程式碼中方便地訪問該物件和其屬性。
	switch (action.type) {
		case USER_DETAILS_REQUEST: // 用 spread operator 保留原有的 state，遵循 immutable 原則的原則，不應該直接改變原始狀態
			return { ...state, loading: true };
		case USER_DETAILS_SUCCESS:
			// console.log("USER_DETAILS_SUCCESS payload:", action.payload);
			return { loading: false, user: action.payload }; // 這邊改 user Object，因為後端回傳的是 user Object
		case USER_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		case USER_DETAILS_RESET: // 要清空 user Object，因為在 ProfilePage.js 中，當 user 登出後，要清空 user Object
			return { user: {} };
		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return { loading: true };
		case USER_UPDATE_PROFILE_SUCCESS:
			return { loading: false, success: true, userInfo: action.payload }; // success 是為了在 ProfilePage.js output 判斷是否成功更新
		case USER_UPDATE_PROFILE_FAIL:
			return { loading: false, error: action.payload };
		case USER_UPDATE_PROFILE_RESET: // 這邊是為了在 ProfilePage.js 中的 useEffect 中，當 user 更新成功後，清空 state
			return {};
		default:
			return state;
	}
};

export const userListReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			return { loading: true };
		case USER_LIST_SUCCESS:
			return { loading: false, users: action.payload }; // success 是為了在 ProfilePage.js output 判斷是否成功更新
		case USER_LIST_FAIL:
			return { loading: false, error: action.payload };
		case USER_LIST_RESET: // 這邊是為了在 ProfilePage.js 中的 useEffect 中，當 user 更新成功後，清空 state
			return { users: [] };
		default:
			return state;
	}
};

export const userDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_DELETE_REQUEST:
			return { loading: true };
		case USER_DELETE_SUCCESS:
			return { loading: false, success: true };
		case USER_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userUpdateReducer = (state = { user: [] }, action) => {
	switch (action.type) {
		case USER_UPDATE_REQUEST:
			return { loading: true };
		case USER_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case USER_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case USER_UPDATE_RESET:
			return { user: [] }; // 重置 user 狀態，清空舊資料，避免影響下一次操作或導致錯誤的資料顯示
		default:
			return state;
	}
};
