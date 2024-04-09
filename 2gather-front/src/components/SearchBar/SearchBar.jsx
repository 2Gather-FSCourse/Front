import React, { useState } from "react";
import {_Input} from "./SearchBar.styled.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import CampaignContainer from "../CampaignsContainer/CampaignContainer.jsx"; // Updated import statement

const SearchBar = ({ refresh, setRefresh }) => {
    const [search, setSearch] = useState("");
    const campaignProps = { search: search, refresh: refresh, setRefresh: setRefresh , placeholder: "Search campaign" };
    console.log( "searchProps, campaignProps");
    return (
        <section>
            <div>
                <_Input
                    type="text"
                    placeholder="Search Campaign"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                ></_Input>
            </div>
            <CampaignContainer
                search={search}
                refresh={refresh}
                setRefresh={setRefresh}
            ></CampaignContainer>
        </section>
    );
}
export default SearchBar;
