export enum Region {
    ALL = "All",
    AFRICA = "Africa",
    AMERICAS = "Americas",
    ASIA = "Asia",
    EUROPE = "Europe",
    OCEANIA = "Oceania"
}

interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
}

export interface AppState {
    countries: Country[];
    filteredCountries: Country[];
    filterRegion: Region;
    filterText: string;
}

export interface DetailsState {
    id: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
}

export interface AppProps {
}

