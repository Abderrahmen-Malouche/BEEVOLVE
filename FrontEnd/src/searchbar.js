import React from "react";

export default function SearchBar(){

    return(
        <form class="search-bar">
        <label for="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required/>
        <span class="caret"></span>
        </form>
    )
}