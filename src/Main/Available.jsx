import './Main.css';
import PropTypes from 'prop-types';

const Available = ({ Player, SelectedPlayersFunc, DisabledPlayerButton }) => {
  // console.log(Player);
  const {
    name,
    age,
    img,
    role,
    country,
    HandBat,
    battingAverage,
    bowlingAverage,
    price,
    isCaptain,
  } = Player;

  return (
    <div className="border rounded-lg  p-3 ">
      <img className="w-full h-[280px] rounded-lg mb-6" src={img} alt="" />
      <h2>{name}</h2>
      <small>Age :{age}</small>
      <div className="flex justify-between">
        <small>Country :{country}</small>
        <small className=" border px-4 rounded-md">{role}</small>
      </div>

      <br />
      <hr />
      <div className="my-4">
        <p className="Para">Hand-Bat : {HandBat}</p>
        <p className="Para">
          Batting Average :
          {battingAverage >= 9 ? battingAverage : 'Not Available'}
        </p>
        <p className="Para">
          Bowling Average :{' '}
          {bowlingAverage >= 9 ? bowlingAverage : 'Not Available'}{' '}
        </p>

        <p className="Para">Captain : {isCaptain ? 'Yes' : 'No'}</p>
        <div className="flex justify-between">
          <p className="Para">Price : ${price}</p>

          <button
            onClick={() => SelectedPlayersFunc(Player)}
            disabled={DisabledPlayerButton.includes(Player.id)}
            className="Para btn btn-sm btn-outline py-2 px-5 bg-[#dce2a289]"
          >
            {DisabledPlayerButton.includes(Player.id)
              ? 'Player Chosen'
              : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

Available.propTypes = {
  Player: PropTypes.object,
  SelectedPlayersFunc: PropTypes.func,
  PlayerPrice: PropTypes.func,
  DisabledPlayerButton: PropTypes.func,
};
export default Available;
