//Action Types
export const ADD_COUNT = "ADD_COUNT";
export const ADD_TODO = "ADD_TODO";

//Action Creator      its for dispatch
export const addCount = (data) => {
    return {
        type: ADD_COUNT,
        payload: data,
    };
};

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    };
};