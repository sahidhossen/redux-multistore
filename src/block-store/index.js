import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';

import { createReduxStore, register } from "../store";

const storeConfig = {
	reducer,
	actions: actions,
	selectors: selectors,
};

/**
 * Store definition for the code data namespace.
 *
 *
 * @type {Object}
 */
export const store = createReduxStore( 'prism-store/blocks', storeConfig );

register( store );
