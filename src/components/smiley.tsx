import { useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export enum SmileyType {
    HAPPY = "happy",
    BIT_HAPPY = "bithappy",
    MEH = "meh",
    BIT_SAD = "bitsad",
    SAD = "sad",
}

interface Props {
    color?: string,
    type?: SmileyType,
    onClick?: () => void,
    active?: boolean,
}

const Smiley = (props: Props) => {
    const [opacity, setOpacity] = useState(1);
    let icon = <div></div>;
    let color: string = "#CCCCCC";

    const onHover = (): void => {
        setOpacity(0.5);
    }

    const onLeave = (): void => {
        setOpacity(1);
    }

    if (props.active && props.color) {
        color = props.color;
    }

    switch (props.type) {
        case "happy":
            return <SentimentSatisfiedAltIcon sx={{ color: color, opacity: opacity, cursor: "pointer" }} 
                                              onMouseEnter={onHover} 
                                              onMouseLeave={onLeave}
                                              onClick={props.onClick}/>
            break;
        case "bithappy":
            return <SentimentSatisfiedIcon sx={{ color: color, opacity: opacity, cursor: "pointer" }} 
                                           onMouseEnter={onHover} 
                                           onMouseLeave={onLeave}
                                           onClick={props.onClick}/>
            break;
        case "meh":
            return <SentimentNeutralIcon sx={{ color: color, opacity: opacity, cursor: "pointer" }} 
                                         onMouseEnter={onHover} 
                                         onMouseLeave={onLeave}
                                         onClick={props.onClick}/>
            break;
        case "bitsad":
            return <SentimentDissatisfiedIcon sx={{ color: color, opacity: opacity, cursor: "pointer" }} 
                                              onMouseEnter={onHover} 
                                              onMouseLeave={onLeave}
                                              onClick={props.onClick}/>
            break;
        case "sad":
            return <SentimentVeryDissatisfiedIcon sx={{ color: color, opacity: opacity, cursor: "pointer" }} 
                                                  onMouseEnter={onHover} 
                                                  onMouseLeave={onLeave}
                                                  onClick={props.onClick}/>
            break;
    }
    
    return icon;
}

export default Smiley;