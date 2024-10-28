import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
// import MoreButton from './MoreButton';

const Selected = ({ selectedPlayers, RemovePlayer }) => {
  // console.log(selectedPlayers);
  const { id, img, name, HandBat } = selectedPlayers;

  return (
    <div>
      <div className=" flex justify-between items-center my-5 p-5 shadow-lg rounded-xl">
        <div className="flex items-center gap-4 ">
          <div className="">
            <img className="w-[65px] h-[65px] rounded-full" src={img} alt="" />
          </div>
          <div>
            <h4 className="text-xl font-semibold">{name}</h4>
            <small className="text-gray-500">{HandBat}</small>
          </div>
        </div>

        <div className="text-3xl">
          <button onClick={() => RemovePlayer(id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.object,
  RemovePlayer: PropTypes.object,
};
export default Selected;
