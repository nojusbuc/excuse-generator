import React from "react"
import { FormControl, InputLabel, MenuItem, Select, Typography, Box } from "@mui/material"

interface ExcuseCountSelectProps {
    excusesPerPage: number;
    setExcusesPerPage: React.Dispatch<React.SetStateAction<number>>;
    excusesPerPageOptions: number[];
    totalExcuses: number;
}



const ExcuseCountSelect: React.FC<ExcuseCountSelectProps> = ({ excusesPerPage, setExcusesPerPage, excusesPerPageOptions, totalExcuses }) => {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", margin: "3vh auto 0" }}>
            <Typography sx={{ gridColumn: "2 / 3" }}>
                Showing {excusesPerPage < totalExcuses ? excusesPerPage : totalExcuses} out of {totalExcuses} excuses.
            </Typography>
            <FormControl sx={{ margin: "0 auto", width: "10vw", }}>
                <InputLabel>Excuse count</InputLabel>
                <Select
                    sx={{ height: "6vh", gridColumn: "3 / 4" }}
                    value={excusesPerPage}
                    label="Excuse count"
                    onChange={(e) => setExcusesPerPage(e.target.value === 0 ? totalExcuses : e.target.value as number)}
                >
                    {excusesPerPageOptions.map((option, index) => (
                        option === 0 ? <MenuItem key={option} value={option}>All</MenuItem> : <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
};

export default ExcuseCountSelect;
