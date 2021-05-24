import React from "react";
import Box from '@material-ui/core/Box';

export default function Display ({ city}) {

const address = (address) => {
    if (address.vicinity !== undefined){
        return address.vicinity
    } else {
        return address.formatted_address
    } 
}
    return(
        <div className="display"  style={{ justifyContent:"center", alignItems: "center" }}> 
        {city.map((each)=> {
            return (
                <Box 
                display="flex" justifyContent="center" alignItems="center"
                height={150} width={650} border={1} m={2}
                borderRadius={1} boxShadow={3} bgcolor="white">
                <ul id="listed"><li><Box><h2 >{each.name}</h2></Box></li>
                <Box >{address(each)}</Box>
                <Box >Rating: {each.rating}</Box>
                <Box >Price: {each.price_level}</Box>
                </ul>
                </Box>
            );
        })}
        </div> 
    ) 
}