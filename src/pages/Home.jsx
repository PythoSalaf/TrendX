import { useState } from "react";
import { Helmet } from "react-helmet";
import { Modal } from "../components";
import { Cloud, Metamask } from "../assets";
import { Chat } from "../components";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [metaModalOpen, setMetaModalOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const handleContinue = () => {
    setIsModalOpen(false);
    setMetaModalOpen(true);
  };

  const handleConnectWallet = () => {
    // Here you'd add your actual wallet connect logic
    setWalletConnected(true);
    setMetaModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Bee-Assist | Home</title>
      </Helmet>

      {!walletConnected ? (
        <div className="w-full h-[88vh] flex items-center justify-center flex-col">
          <div className="w-full border py-2 border-gray-400 rounded-xl">
          <div className="w-[95%] mx-auto">
              <h2 className="text-[#27343C] py-2 text-center text-2xl md:text-3xl font-semibold">
                Welcome to TrendX.ai
              </h2>
              <p className="py-2 text-base md:text-lg">
                I'm BEE, your dedicated crypto AI buddy made to examine Twitter
                data. Driven by sophisticated language models, I assist you in
                making wise cryptocurrency market judgments through social media
                research.
              </p>
            </div>
          </div>

          <div className="mt-28 md:mt-36 w-full flex items-center justify-center">
            <button
              className="bg-[#F7D2BA] text-black cursor-pointer px-10 rounded-xl py-2"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </button>
          </div>

          {/* Intro Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            color={"white"}
          >
            <div className="flex items-center justify-center flex-col">
              <img
                src={Cloud}
                alt="img-cloud"
                className="w-[110px] md:w-[150px]"
              />
              <div className="">
                <h3 className="text-center text-base md:text-xl font-semibold">
                  Catch the trend. Trade the trend.
                </h3>
                <p className="text-xs text-center md:text-sm mt-2">
                  TrendX.ai is here to help discover trending crypto tokens in
                  real-time using AI, Twitter insights, and live trading data.
                </p>
                <div className="flex items-center justify-center pt-3">
                  <button
                    className="border border-[#FD6708] px-4 cursor-pointer rounded-lg py-1"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </Modal>

          {/* Metamask Modal */}
          <Modal
            isOpen={metaModalOpen}
            onClose={() => setMetaModalOpen(false)}
            color={"#F5841F"}
          >
            <div className="flex items-center justify-center flex-col py-4">
              <div className="bg-white flex items-center justify-center rounded-full w-[90px] h-[90px] md:w-[140px] md:h-[140px]">
                <img
                  src={Metamask}
                  alt="metamask"
                  className="w-[90%] h-[90%]"
                />
              </div>
              <h3 className="text-lg md:text-xl pt-1.5 font-semibold">
                Connect Wallet
              </h3>
              <button
                className="bg-white cursor-pointer mt-3 px-4 rounded-lg py-1 flex items-center justify-between gap-x-3"
                onClick={handleConnectWallet}
              >
                Connect metamask{" "}
                <img src={Metamask} alt="metamask" className="w-[20px]" />
              </button>
            </div>
          </Modal>
        </div>
      ) : (
        <Chat />
      )}
    </>
  );
};

export default Home;
