import { useState } from "react";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  
const DatePicker = () => {
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    console.log(dateRange,"dateRange");
    
  return (
    <div>
        <DateRange
            rangeColors={["#262626"]}
            ranges={[dateRange]}
            date={new Date()}
            onChange={(value) => setDateRange(value)}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
          />
    </div>
  )
}

export default DatePicker