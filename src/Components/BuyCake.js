// @flow
import React from 'react';
import { buyCake } from '../redux';
import {connect} from 'react-redux'

 function BuyCake({cakes,buyCake}) {
  return (
    <div>
      <h2>cakes: {cakes}</h2>
      <button onClick={()=>buyCake()}>Add cake</button>
    </div>
  );
};

const mapStateToProps=state=>{
    return{
        cakes:state.cakes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BuyCake)