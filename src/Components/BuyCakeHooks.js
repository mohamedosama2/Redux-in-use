import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function BuyCakeHooks(props) {
  const cakes = useSelector((state) => state.cakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>cakes: {cakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Add cake</button>
    </div>
  );
}

export default BuyCakeHooks;
