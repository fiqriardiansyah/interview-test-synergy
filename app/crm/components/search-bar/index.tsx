import React from "react";
import FilterButton from "./filter-button";
import FilterPopup from "./filter-popup";
import Search from "./search";
import { CrmContext } from "../../context/crm";

export default function SearchBar() {
    const { clients, genderSelected, maritalSelected, employmentSelected, setGenderSelected, setMaritalSelected, setEmploymentSelected } =
        React.useContext(CrmContext);

    return (
        <div className="flex items-starat md:items-center gap-5 flex-col md:flex-row">
            <Search clients={clients} />
            <div className="flex items-center gap-4 flex-wrap">
                <FilterPopup selected={genderSelected} setSelected={setGenderSelected} options={["Male", "Female"]}>
                    <FilterButton className={`${genderSelected?.length ? "!border-blue-200 !text-blue-500" : ""}`}>gender</FilterButton>
                </FilterPopup>
                <FilterPopup selected={maritalSelected} setSelected={setMaritalSelected} options={["Married", "Divorced", "Single"]}>
                    <FilterButton className={`${maritalSelected?.length ? "!border-blue-200 !text-blue-500" : ""}`}>marital</FilterButton>
                </FilterPopup>
                <FilterPopup selected={employmentSelected} setSelected={setEmploymentSelected} options={["Employed", "Unemployed"]}>
                    <FilterButton className={`${employmentSelected?.length ? "!border-blue-200 !text-blue-500" : ""}`}>employment</FilterButton>
                </FilterPopup>
            </div>
        </div>
    );
}
