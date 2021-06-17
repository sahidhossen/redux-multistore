
import { useContext } from 'react';

 /**
  * Internal dependencies
  */
 import { Context } from './context';
 
 export default function useAsyncMode() {
     return useContext( Context );
 }
 