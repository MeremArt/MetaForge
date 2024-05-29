import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <section className="container">
      <nav className="backdrop-blur-md bg-opacity-10 mb-20 p-4 mx-auto px-8 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold flex items-center font-geist">
            <h2 className="font-geist">METAFORGE</h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white text-xs font-geist "></span>
            <WalletMultiButton className="!bg-[#c2c2cccb] hover:!bg-black transition-all duration-200 !rounded-lg  " />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
