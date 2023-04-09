import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const pokeball = require("../assets/img/pokeball.png");

export default function Root() {

    const [value, setValue] = useState(1);

    return (
        <>
            <div id="sidebar">
                <h1>
                    <Box sx={{ display: "inline-block", mr: 1 }}>
                        <img src={pokeball} width="24" height="24" />
                    </Box>
                    <span>Boon's PBS Editor</span>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/pokemon`}>Pokemon</Link>
                        </li>
                        <li>
                            <Link to={`/abilities`}>Abilities</Link>
                        </li>
                        <li>
                            <Link to={`/moves`}>Moves</Link>
                        </li>
                        <li>
                            <Link to={`/trainers`}>Trainers</Link>
                        </li>
                        <li>
                            <Link to={`/encounters`}>Encounters</Link>
                        </li>
                        <li>
                            <Link to={`/types`}>Types</Link>
                        </li>
                        <li>
                            <Link to={`/items`}>Items</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet></Outlet>
            </div>
        </>
    );
}