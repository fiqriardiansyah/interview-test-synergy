import FilterButton from "./filter-button";
import FilterPopup from "./filter-popup";
import Search from "./search";

export default function SearchBar() {
    return (
        <div className="flex items-center gap-5">
            <Search />
            <div className="flex items-center gap-4 flex-wrap">
                <FilterPopup options={["Male", "Female"]}>
                    <FilterButton>
                        gender
                    </FilterButton>
                </FilterPopup>
                <FilterPopup options={["Married", "Divorced", "Single"]}>
                    <FilterButton>
                        marital
                    </FilterButton>
                </FilterPopup>
                <FilterPopup options={["Employed", "Unemployed"]}>
                    <FilterButton>
                        employment
                    </FilterButton>
                </FilterPopup>
            </div>
        </div>
    )
}