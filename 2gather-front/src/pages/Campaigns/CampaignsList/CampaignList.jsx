import React, { useState } from 'react';
import {CampaignListWrapperStyled} from "./CampagnList.styled.jsx";
import {Breadcrumbs} from "@mui/material";
import SearchBar from "../../../components/SearchBar/SearchBar.jsx";

export const CampaignList = () => {
   const [refresh, setRefresh] = useState(false);

    return (
        <>
            <CampaignListWrapperStyled>
                <h1>Campaigns</h1>
                <SearchBar refresh={refresh} setRefresh={setRefresh} />
            </CampaignListWrapperStyled>
        </>
    )
}