import { useState } from "react";
import "./speakers.css";

function Speakers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="container mx-auto my-10 px-4 sm:px-6 md:my-22 lg:px-12">
        <div
          className="card group overflow-hidden cursor-pointer"
          onClick={openModal}
        >
          <div className="card-info">
            <img
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
              alt="Steve Jobs"
              className="card-avatar"
            />
            <div className="card-title">Steve Jobs</div>
            <div className="card-subtitle">CEO &amp; Co-Founder</div>
          </div>
          <div className="card-social">
            <button
              className="cssbuttons-io-button"
              onClick={(e) => {
                e.stopPropagation(); 
                openModal();
              }}
            >
              View Details
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-0 backdrop-blur-none transition-all duration-300"
          style={{
            pointerEvents: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(8px)",
          }}
          onClick={closeModal}
        >
          <div
            className="relative m-4 p-4 w-11/12 md:w-3/5 min-w-[90%] md:min-w-[60%] max-w-[90%] md:max-w-[60%] rounded-lg bg-white shadow-sm flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 p-2 text-slate-600 hover:text-slate-800 focus:outline-none cursor-pointer"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                alt="Steve Jobs"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            <div className="w-full md:w-2/3 md:pl-6 flex flex-col mt-4 md:mt-0">
              <div className="text-2xl px-3 text-slate-800">Steve Jobs</div>
              <div className="text-lg px-3 text-slate-600 mt-2">
                CEO & Co-Founder
              </div>
              <div className="mt-4 text-slate-600 font-light overflow-y-auto max-h-64 md:max-h-72 p-3 py-6">
                Steve Jobs was the co-founder, chairman, and CEO of Apple Inc.
                He was widely recognized as a pioneer of the personal computer
                revolution and for his influential career in the computer and
                consumer electronics fields. His vision and leadership helped
                shape the modern technology industry. Steve Jobs was known for
                his attention to detail, innovative thinking, and ability to
                inspire those around him. He played a key role in the
                development of iconic products such as the iPhone, iPad, and
                MacBook. His legacy continues to influence the world of
                technology and design.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Speakers;