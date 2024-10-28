import PhotoLogo from '../assets/image/logo.png';
import PhotoCoin from '../assets/image/coin.png';
import Banner from './Banner';
import PropTypes from 'prop-types';

const Navbar = ({ AddMoney, addMoney }) => {
  return (
    <div className="">
      <div className="w-full mx-auto py-6  fixed top-0 left-0 bg-gray-200 opacity-75 ">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div>
            <img className="w-[70px]" src={PhotoLogo} alt="Web page logo" />
          </div>

          <div className="flex items-center gap-8">
            <ul className="flex gap-5">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>

            <div className="border px-6 py-2 rounded-lg flex items-center gap-2">
              <p className="font-bold">{addMoney} Coin</p>
              <img className="w-[20px]" src={PhotoCoin} alt="Coin Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36">
        <Banner accountsAddMoney={AddMoney}></Banner>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  MinusMoney: PropTypes.func,
  accountsMinusMoney: PropTypes.func,
  addMoney: PropTypes.func,
  OwnerBlanca: PropTypes.func,
  NewBalance: PropTypes.func,
  AddMoney: PropTypes.object,
};
export default Navbar;
