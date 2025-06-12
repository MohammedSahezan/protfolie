import React from "react";

const ProjetCard = () => {
  return (
    <div className="w-1vw h-1vh">
      <div
        class="w-[300px] h-[250px] p-8 m-2  max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center "
        href="#"
      >
        <img
          src="https://loremflickr.com/800/600/girl"
          class="sadow rounded-lg overflow-hidden border  w-[70%] h-[50%] "
        />
        <div class="mt-8">
          <h4 class="font-bold text-xl">Exercises</h4>
          <p class="mt-2 text-gray-600">
            Create Exercises for any subject with the topics you and your
            students care about.
          </p>
          <div class="mt-5">
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Git Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetCard;
