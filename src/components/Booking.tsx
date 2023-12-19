import DatePicker from "./Inputs/DatePicker";
const Booking = (props: any) => {
  return (
    <div className="bg-semiblueviolet shadow p-4 rounded-2xl">

      <input
        id="search"
        placeholder="No of guest"
        type="text"
        className={`
                      peer
                      w-full
                      p-4
                      pt-4
                      pl-5
                      font-light 
                      bg-white 
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      mb-3
                    `}
      />
      <DatePicker />
      <button className="text-Blueviolet text-lg font-medium ml-9 py-3 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet mt-3">
        Book this place
      </button>
    </div>
  );
};

export default Booking;
