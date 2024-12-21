"use client";
import React from "react";
import { useContext } from "react";
import { ProfileBuilderContext } from "../Context/ContextProvider";

const Page = () => {
  const { context, getRequestHandler, module, creatNewModelHandler } =
    useContext(ProfileBuilderContext);
  console.log(context);
  console.log(`module :- ${module}`);
  return (
    <div className="h-screen bg-white text-black py-20">
      <h1>Get request </h1>
      <button onClick={getRequestHandler}>GET</button>
      <h1>
        {module
          ? module.map((item) => (
              <ul key={item.id}>
                <li>
                  <h1>{item.type}</h1>
                </li>
                {item.cards ? (
                  item.cards.map((card) => <li key={card.id}>{card.title}</li>)
                ) : (
                  <p>no cards yet</p>
                )}
              </ul>
            ))
          : context}
      </h1>
      <button onClick={creatNewModelHandler}>CreateNewModule</button>
    </div>
  );
};

export default Page;
