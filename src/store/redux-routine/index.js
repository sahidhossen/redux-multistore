/**
 * Internal dependencies
 */
 import createRuntime from './runtime';

 function isGenerator(object) {
     // Check that iterator (next) and iterable (Symbol.iterator) interfaces are satisfied.
     // These checks seem to be compatible with several generator helpers as well as the native implementation.
     return !!object && typeof object[Symbol.iterator] === 'function' && typeof object.next === 'function';
 }
 
 /**
  * Creates a Redux middleware, given an object of controls where each key is an
  * action type for which to act upon, the value a function which returns either
  * a promise which is to resolve when evaluation of the action should continue,
  * or a value. The value or resolved promise value is assigned on the return
  * value of the yield assignment. If the control handler returns undefined, the
  * execution is not continued.
  *
  * @param {Object} controls Object of control handlers.
  *
  * @return {Function} Co-routine runtime
  */
 export default function createMiddleware(controls = {}) {
     return (store) => {
         const runtime = createRuntime(controls, store.dispatch);
         return (next) => (action) => {
             if (!isGenerator(action)) {
                 return next(action);
             }
             return runtime(action);
         };
     };
 }
 