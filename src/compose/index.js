import { flowRight as compose } from 'lodash';

/**
 * Composes multiple higher-order components into a single higher-order component. Performs right-to-left function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * @param {...Function} hocs The HOC functions to invoke.
 *
 * @return {Function} Returns the new composite function.
 */
 export { compose };

 export { default as createHigherOrderComponent } from './createHigherOrderComponent';
 export { default as pure } from './pure';
 export { default as ifCondition } from './is-condition';
 export { default as useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';