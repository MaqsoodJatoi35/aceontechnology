import Profile from "../../assets/images/profile.jpeg";
import NFTImage1 from "../../assets/images/nft_img_1.jpeg";
import NFTImage2 from "../../assets/images/nft_img_2.jpeg";
import NFTImage3 from "../../assets/images/nft_img_3.jpeg";
import { useEffect } from "react";

// Metaplex
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  PublicKey,
} from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

import "./style.css";

const Dashboard = (props) => {
  const nfts = [
    {
      name: "zombies #7919",
      image: NFTImage1,
      owner: "72UGr...YdD",
      mint_address: "72UGr...YdD",
      token_address: "72UGr...YdD",
    },
    {
      name: "Cyberlinx #551",
      image: NFTImage2,
      owner: "72UGr...YdD",
      mint_address: "72UGr...YdD",
      token_address: "72UGr...YdD",
    },
    {
      name: "The Eyedeas #1029",
      image: NFTImage3,
      owner: "72UGr...YdD",
      mint_address: "72UGr...YdD",
      token_address: "72UGr...YdD",
    },
  ];

  useEffect(() => {
    const getNfts = async () => {
      const connection = new Connection(clusterApiUrl("mainnet-beta"));
      const wallet = Keypair.generate();

      const metaplex = Metaplex.make(connection)
        .use(keypairIdentity(wallet))
        .use(bundlrStorage());

      const myNfts = await metaplex.nfts().findAllByOwner({
        owner: new PublicKey("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X"),
      });

      console.log(myNfts);
    };

    getNfts();
  }, []);

  return (
    <div className="dashboard text-[#FFFFFF]">
      <div className="first-section justify-between hidden sm:flex">
        <div className="flex justify-center items-center gap-2 bg-[#000000] rounded-2xl px-4 py-2 text-xs">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#ECEFF0" />
              <path
                d="M11.9979 0L11.8369 0.546932V16.4162L11.9979 16.5769L19.3641 12.2226L11.9979 0Z"
                fill="#343434"
              />
              <path
                d="M11.9979 0L4.63147 12.2226L11.9979 16.5769V8.87435V0Z"
                fill="#8C8C8C"
              />
              <path
                d="M11.9979 17.9716L11.9071 18.0823V23.7351L11.9979 24.0001L19.3686 13.6196L11.9979 17.9716Z"
                fill="#3C3C3B"
              />
              <path
                d="M11.9979 24.0001V17.9716L4.63147 13.6196L11.9979 24.0001Z"
                fill="#8C8C8C"
              />
              <path
                d="M11.9979 16.5769L19.3641 12.2227L11.9979 8.87439V16.5769Z"
                fill="#141414"
              />
              <path
                d="M4.63147 12.2227L11.9979 16.5769V8.87439L4.63147 12.2227Z"
                fill="#393939"
              />
            </svg>
          </span>
          <span className="uppercase">Eth/Usdt</span>{" "}
          <span className="text-[#0AC18E]">1137.62</span>{" "}
          <span className="text-[#0AC18E]">+2.62%↑</span>
        </div>
        <div className="flex justify-center items-center gap-2 bg-[#000000] rounded-2xl px-4 py-2 text-xs">
          <span className="w-[27px] h-[25px]">
            <img
              src={Profile}
              className="rounded-full w-full h-full object-cover"
            />
          </span>
          <span>zash</span>
          <span className="text-[#808287]">|</span>
          <span>User ID: 11026666</span>
        </div>
      </div>
      <div className="second-section flex justify-between my-10">
        <h1 className="text-3xl">Dashboard</h1>
        <button className="bg-[#000000] rounded-xl p-1.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2202)">
              <path
                d="M4.04999 10.9999C4.30287 9.07068 5.25021 7.29972 6.71467 6.01856C8.17912 4.73741 10.0603 4.03389 12.0061 4.03971C13.9518 4.04553 15.8287 4.76028 17.2855 6.05017C18.7423 7.34006 19.679 9.11666 19.9204 11.0474C20.1617 12.9781 19.6911 14.9306 18.5967 16.5394C17.5022 18.1482 15.859 19.303 13.9745 19.7876C12.0901 20.2722 10.0936 20.0534 8.35886 19.1721C6.6241 18.2909 5.26999 16.8076 4.54999 14.9999M4.04999 19.9999V14.9999H9.04999"
                stroke="#FFFFFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.9212 11.0474C20.1625 12.9781 19.6919 14.9306 18.5975 16.5394C17.503 18.1482 15.8598 19.303 13.9753 19.7876C12.0909 20.2722 10.0944 20.0533 8.35966 19.1721C6.6249 18.2908 5.27078 16.8076 4.55078 14.9999M4.05078 19.9999V14.9999H9.05078"
                stroke="FFFFFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2202">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {nfts && (
        <div className="third-section nfts-cards my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-sm">
          {nfts.map((el, i) => {
            return (
              <div
                key={i}
                className="bg-[#000000] rounded-xl shadow justify-center items-center px-3 pt-3 pb-2"
              >
                <div className="flex justify-between items-center">
                  <p className="p-0 m-0">{el.name}</p>
                  <button className="text-[#808287] font-bold tracking-[2px]">
                    ...
                  </button>
                </div>
                <div className="nft-img w-full rounded-lg my-1 h-[350px]">
                  <img src={el.image} className="w-full h-full rounded-lg" />
                </div>
                <div className="bg-[#18191D] px-2 py-2 mt-4 rounded-lg">
                  <div className="flex justify-between bg-[#131417] px-2 py-2 rounded-md mb-2">
                    <span>Owner</span>
                    <span className="text-[#808287]">
                      <span className="mx-3 text-[#666666]">|</span>
                      {el.owner}
                    </span>
                  </div>
                  <div className="flex justify-between bg-[#131417] px-2 py-2 rounded-md mb-2">
                    <span>Mind address</span>
                    <span className="text-[#808287]">
                      <span className="mx-3 text-[#666666]">|</span>
                      {el.mint_address}
                    </span>
                  </div>
                  <div className="flex justify-between bg-[#131417] px-2 py-2 rounded-md mb-2">
                    <span>Token address</span>
                    <span className="text-[#808287]">
                      <span className="mx-3 text-[#666666]">|</span>
                      {el.token_address}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-center">
        <div className="flex md:w-[25%] sm:w-[50%] w-[70%] bg-[#000000] rounded-full px-2 py-2 justify-between items-center">
          <button className="bg-[#18191D] px-2 py-2 rounded-full">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.24081 14.1768L21.1167 0.33925C21.5713 -0.113854 22.3074 -0.113092 22.7612 0.341594C23.2148 0.796221 23.2136 1.53268 22.7589 1.98614L9.70894 15.0001L22.7594 28.0139C23.214 28.4674 23.2152 29.2034 22.7617 29.6581C22.5342 29.886 22.2361 30 21.9381 30C21.6408 30 21.3439 29.8868 21.1168 29.6604L7.24081 15.8233C7.02184 15.6054 6.89897 15.309 6.89897 15.0001C6.89897 14.6911 7.0222 14.395 7.24081 14.1768Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="bg-[#18191D] px-2 py-2 rounded-full">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7592 14.1768L8.88331 0.33925C8.42868 -0.113854 7.69263 -0.113092 7.23876 0.341594C6.78525 0.796221 6.78642 1.53268 7.24111 1.98614L20.2911 15.0001L7.24064 28.0139C6.78601 28.4674 6.78484 29.2034 7.23829 29.6581C7.46581 29.886 7.76388 30 8.06194 30C8.35925 30 8.65614 29.8868 8.88325 29.6604L22.7592 15.8233C22.9782 15.6054 23.101 15.309 23.101 15.0001C23.101 14.6911 22.9778 14.395 22.7592 14.1768Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
