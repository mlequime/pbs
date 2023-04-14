import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import LinearProgressWithLabel from "../components/linear-progress-with-label";


const pokeball = require("../assets/img/pokeball.png");

export default function Root() {

    const [value, setValue] = useState(1);
    const [progress, setProgress] = useState(10);
    const [loaded, setLoaded] = useState(true);

    const navLinks = [
        {
            name: "Pokemon",
            path: "/pokemon",
        },
        {
            name: "Abilities",
            path: "/abilities",
        },
        {
            name: "Moves",
            path: "/moves",
        },
        {
            name: "Trainers",
            path: "/trainers",
        },
        {
            name: "Encounters",
            path: "/encounters",
        },
        {
            name: "Types",
            path: "/types",
        },
        {
            name: "Items",
            path: "/items",
        },
    ];

    const navLinkList = navLinks.map((link) => {
        return (
            <li key={link.name}>
                {
                    loaded ? (
                        <NavLink to={link.path} className={
                            ({ isActive }) => isActive ? "active" : ""
                        }>{link.name}</NavLink>
                    ) : (
                        <Box>
                            <span>{link.name}</span>
                        </Box>
                    )
                }

            </li>
        );
    });

    return (
        <>
            <div id="sidebar">
                <h1>
                    <Box sx={{ display: "inline-block", mr: 1 }}>
                        <img src={pokeball} width="32" height="32" />
                    </Box>
                    <span>Boon's PBS Editor</span>
                </h1>
                <nav>
                    <ul>
                        {navLinkList}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                {
                    loaded ? (
                        <Outlet></Outlet>
                    ) : (
                        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '1' }}>
                            <LinearProgressWithLabel value={progress} sx={{ flex: '1' }} />
                            <div>
                                <h1>Loading...</h1>
                            </div>
                        </Container>
                    )
                }
            </div>
        </>
    );
}