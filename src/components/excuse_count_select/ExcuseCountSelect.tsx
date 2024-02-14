import React from "react"
import { FormControl, InputLabel, MenuItem, Select, Typography, Box } from "@mui/material"

interface ExcuseCountSelectProps {
    excusesPerPage: number;
    setExcusesPerPage: React.Dispatch<React.SetStateAction<number>>;
    excusesPerPageOptions: number[];
    totalExcuses: number;
    currentPage: number;
}



const ExcuseCountSelect: React.FC<ExcuseCountSelectProps> = ({ excusesPerPage, setExcusesPerPage, excusesPerPageOptions, totalExcuses, currentPage }) => {

    const indexStart = (currentPage - 1) * excusesPerPage + 1;
    const indexEnd = excusesPerPage === 0 ? totalExcuses : (indexStart + excusesPerPage - 1);
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", margin: "3vh auto 0" }}>
            <Typography sx={{ gridColumn: "2 / 3" }}>
                Showing {indexStart}-{indexEnd} out of {totalExcuses} excuses.
            </Typography>
            <FormControl sx={{ margin: "0 auto", width: "10vw", }}>
                <InputLabel>Excuse count</InputLabel>
                <Select
                    sx={{ height: "6vh", gridColumn: "3 / 4" }}
                    value={excusesPerPage}
                    label="Excuse count"
                    onChange={(e) => setExcusesPerPage(e.target.value as number)}

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
