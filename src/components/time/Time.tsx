import { useState } from 'react';
import { getTime } from '../../helpers/dateFormatting';
import { useInterval } from '../../hooks/useInterval';

interface Props {
    
}

// returns the current time in the specified timezone
export const Time = (props: Props) => {
    const [time, setTime]=useState(getTime);

      useInterval(() => {
            setTime(getTime);
      },1000);
    
    return (
        <span>
            {time}
        </span>
    )
}
