import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Available from './Available';
import Selected from './Selected';
import MoreButton from './MoreButton';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AvailablePlayers = ({ PlayerPrice, addMoney }) => {
  // Fetch All Data :
  // console.log(addMoney);
  const [Players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('Player.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  // Items Name :
  const [itemsName, setItemsName] = useState('Available Players');
  // Selected All Players :
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Available Button Items :
  const AvailableButton = () => {
    const AvailablePlayer = 'Available Players';
    setItemsName(AvailablePlayer);
  };

  // Selected Button Items :
  const SelectedButton = () => {
    const SelectedPlayers = `Selected Only (6) Player`;
    setItemsName(SelectedPlayers);
  };

  // Remove Player
  const RemovePlayer = id => {
    const Remove = selectedPlayers.filter(player => player.id !== id);
    setSelectedPlayers(Remove);
    toast.error(
      <div className="flex items-cente">
        <span className="mr-3"></span>
        <span>Player removed successfully!</span>
      </div>
    );
  };

  // Disabled Button
  const [isDisabled, setIsDisabled] = useState([]);
  const SelectedPlayersFunc = id => {
    const newSelectedPlayers = [...selectedPlayers, id];
    const ThisPlayerPrice = id.price;
    if (ThisPlayerPrice <= addMoney) {
      if (selectedPlayers.length < 6) {
        setSelectedPlayers(newSelectedPlayers);

        toast.success(
          <div className="flex items-center  font-bold">
            <span className="mr-3 "></span>
            <span>Player Added Successfully!</span>
          </div>
        );
      } else {
        toast.warn(
          <div className="flex items-center py-4 text-yellow-500 font-bold">
            <span className="mr-3"></span>
            <span>You have already 6 players!</span>
          </div>
        );
      }
      setIsDisabled([...isDisabled, id.id]);
    } else {
      toast.warn(
        <div className="flex items-center ">
          <span className="mr-3"></span>
          <span>Your Balance Not Available!</span>
        </div>
      );
    }

    const PlayerID = Players.find(Man => Man.id === id.id);
    PlayerPrice(PlayerID);
  };

  return (
    <div>
      <div className="flex justify-between my-20">
        <h3 className="text-[28px] font-semibold">{`${itemsName}`}</h3>
        <div className="border rounded-lg flex">
          <button
            onClick={AvailableButton}
            className={` py-2 px-7  ${
              itemsName === 'Available Players' && 'bg-[#E7FE29] font-bold'
            }`}
          >
            Available
          </button>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
          />
          {/* ${selectedPlayers.length} */}
          <button
            onClick={SelectedButton}
            className={`border-l py-2 px-5  ${
              itemsName === `Selected Only (6) Player` &&
              'bg-[#E7FE29] font-bold'
            }`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* <Available></Available> */}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 ${
          itemsName === `Selected Only (6) Player` ? 'hidden' : 'grid'
        }`}
      >
        {Players.map(player => (
          <Available
            key={player.id}
            Player={player}
            SelectedPlayersFunc={SelectedPlayersFunc}
            DisabledPlayerButton={isDisabled}
          ></Available>
        ))}
      </div>

      {/* *********************** */}
      <div
        className={`min-h-screen ${
          itemsName === 'Available Players' && 'hidden'
        }`}
      >
        {selectedPlayers.map(selected => (
          <Selected
            key={selected.id}
            selectedPlayers={selected}
            RemovePlayer={RemovePlayer}
          ></Selected>
        ))}
        <MoreButton></MoreButton>
      </div>
    </div>
  );
};

PropTypes.propTypes = {
  Available: PropTypes.object,
  AvailableButton: PropTypes.func,
  SelectedButton: PropTypes.func,
  SelectedPlayersFunc: PropTypes.func,
  addMoney: PropTypes.func,
};

export default AvailablePlayers;
