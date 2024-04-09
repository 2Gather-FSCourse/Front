import React, { useState } from "react";
import SearchBarContainer from "./SearchBar.styled.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import CampaignContainer from "../CampaignsContainer/CampaignContainer.jsx"; // Updated import statement

const SearchBar = ({ refresh, setRefresh }) => {
    const [search, setSearch] = useState("");
    const searchProps = { type: "text", value: search, onChange: (e) => setSearch(e.target.value) };
    const campaignProps = { search: search, refresh: refresh, setRefresh: setRefresh , placeholder: "Search campaign" };
    console.log( "searchProps, campaignProps");
    return (
        <section>
            <div>
                <TextInput
                    props={searchProps}
                ></TextInput>
            </div>
            <CampaignContainer
                props={campaignProps}
            ></CampaignContainer>
        </section>
    );
}
export default SearchBar;
