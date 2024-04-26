import React from "react";

export default function RecipeCard() {
  return (
    <div className="w-[90%] flex flex-col mx-auto bg-[#8A2F02] text-[#F8F6C0]">
      <div className="flex flex-row">
        <div className="w-1/2">image</div>
        <div className="flex flex-row w-1/2">
          <div>
            <h4>rubrik</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              porro reprehenderit saepe dignissimos recusandae aliquid sit,
              asperiores natus harum provident.
            </p>
          </div>
          <hr className="ml-4 mr-4 w-[2px] h-full bg-[#F8F6C0]" />
          <div>
            <h4>rubrik</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              porro reprehenderit saepe dignissimos recusandae aliquid sit,
              asperiores natus harum provident.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <h4>rubrik</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            porro reprehenderit saepe dignissimos recusandae aliquid sit,
            asperiores natus harum provident.
          </p>
        </div>

        <div>
          <h4>rubrik</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            porro reprehenderit saepe dignissimos recusandae aliquid sit,
            asperiores natus harum provident.
          </p>
        </div>
      </div>
    </div>
  );
}
