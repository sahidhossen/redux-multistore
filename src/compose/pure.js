import { Component } from 'react';
import isShallowEqual from '../is-shallow-equal';
 
 /**
  * Internal dependencies
  */
 import createHigherOrderComponent from './createHigherOrderComponent';
 
 /**
  * Given a component returns the enhanced component augmented with a component
  * only rerendering when its props/state change
  *
  * @param {Function} mapComponentToEnhancedComponent Function mapping component
  *                                                   to enhanced component.
  * @param {string}   modifierName                    Seed name from which to
  *                                                   generated display name.
  *
  * @return {WPComponent} Component class with generated display name assigned.
  */
 const pure = createHigherOrderComponent( ( Wrapped ) => {
     if ( Wrapped.prototype instanceof Component ) {
         return class extends Wrapped {
             shouldComponentUpdate( nextProps, nextState ) {
                 return (
                     ! isShallowEqual( nextProps, this.props ) ||
                     ! isShallowEqual( nextState, this.state )
                 );
             }
         };
     }
 
     return class extends Component {
         shouldComponentUpdate( nextProps ) {
             return ! isShallowEqual( nextProps, this.props );
         }
 
         render() {
             return <Wrapped { ...this.props } />;
         }
     };
 }, 'pure' );
 
 export default pure;
 