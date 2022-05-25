const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case 'DELETE_TODO':
      const updatedList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: updatedList,
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default todoReducers;
