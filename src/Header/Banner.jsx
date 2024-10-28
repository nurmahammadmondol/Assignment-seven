import BannerLogo from '../assets/image/banner-main.png';
import './Header.css';
import PropTypes from 'prop-types';

const Banner = ({ accountsAddMoney }) => {
  const money = 30000000;
  return (
    <div className="Banner text-center space-y-5  border py-14 rounded-2xl">
      <img className="w-[300px] mx-auto" src={BannerLogo} alt="" />
      <h2 className="text-[38px] font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="text-[18px]">Beyond Boundaries Beyond Limits</p>

      <button
        onClick={() => accountsAddMoney(money)}
        className="text-[14px] bg-[#E7FE29]  text-black btn px-8"
      >
        Claim Free Credit
      </button>
    </div>
  );
};

Banner.propTypes = {
  accountsAddMoney: PropTypes.func,
};
export default Banner;
