import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const pokeball = require("../assets/img/pokeball.png");

export default function Root() {

    const [value, setValue] = useState(1);

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
                <NavLink to={link.path} className={
                    ({ isActive }) => isActive ? "active" : ""
                }>{link.name}</NavLink>
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
                <Outlet></Outlet>
            </div>
        </>
    );
}