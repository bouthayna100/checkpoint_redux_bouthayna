const initialState = {
    sow: "ALL_TODO",
}

const filterReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case "FILTER_TODO":
            return {
                ...state,
                sow: action.filter
            };
        default:
            return state;
    }
};

export default filterReducer;

