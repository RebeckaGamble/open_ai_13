import React from "react";

export default function RecipeCards() {
  return (
    <div className="">
      <div>
        <h3>Du är bäst!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum
          maxime incidunt dicta perferendis cum minus nobis cumque et assumenda.
        </p>
      </div>
      <div className="flex flex-row gap-6 justify-center">
        <div>
          <div>image</div>
          <h4>rubrik</h4>
          <p>something</p>
          <button>Choose</button>
        </div>
        <div>
          <div>image</div>
          <h4>rubrik</h4>
          <p>something</p>
          <button>Choose</button>
        </div>
        <div>
          <div>image</div>
          <h4>rubrik</h4>
          <p>something</p>
          <button>Choose</button>
        </div>
      </div>
    </div>
  );
}
