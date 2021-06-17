import combineReducers from 'turbo-combine-reducers';

/**
 * Reducer managing authors state. Keyed by id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
 export function blocks( state = { '001': {} }, action ) {
	switch ( action.type ) {
		case 'ADD_BLOCK':
			return  state
        default: 
            return state;
	}
}



export default combineReducers({
    blocks
})