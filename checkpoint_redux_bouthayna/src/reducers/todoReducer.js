const initialState = {
    data: [],
}

const todoReducer = ( state = initialState, action ) =>
{
    switch ( action.type ) {
        case 'ADD_TODO':
            return {
                ...state,
                data: [
                    ...state.data, {
                        id: action.id,
                        description: action.description,
                        isDone: action.isDone,
                },
                ],
              
            };
            
        case 'DELETE_TODO':
            return {
                ...state,
                data:  state.data.filter( el => el.id !== action.id ),
            };
        
        
        case 'EDIT_TODO':
            return {
                ...state,
                data: state.data.map( el => el.id === action.id ?
                    { ...el, description: action.description } : el ),
            };

        case 'COMPLITE_TODO':
            return {
                ...state,
                data: state.data.map( el => el.id === action.id ?
                    { ...el, isDone: !action.isDone } : el ),
            };
        default:
            return state;
    }
};

export default todoReducer;
