
import Button from "../Button/Button";
import DatePicker from "./DatePicker";

const RoomReservation = ({ room }) => {
 
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white ">
      <div className="flex items-center gap-1 p-4">
        <h1 className="text-2xl font-semibold">$ {room?.price}</h1>
        <h3 className="font-light text-neutral-600">night</h3>
      </div>
      <hr />
      <div className="flex justify-center">
        <DatePicker />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="text-lg p-4 flex justify-between items-center font-semibold">
        <h1>Total</h1>
        <h3>$ {room?.price}</h3>
      </div>
    </div>
  );
};

export default RoomReservation;
