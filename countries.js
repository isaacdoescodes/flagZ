var countries = [
    {
        Code: "AF",
        Name: "Afghanistan",
        Easy: false,
    }, //
    {
        Code: "AL",
        Name: "Albania",
        Easy: false,
    },
    {
        Code: "DZ",
        Name: "Algeria",
        Easy: false,
    },
    {
        Code: "AD",
        Name: "Andorra",
        Easy: false,
    },
    {
        Code: "AO",
        Name: "Angola",
        Easy: false,
    },
    {
        Code: "AG",
        Name: "Antigua and Barbuda",
        Easy: false,
    },
    {
        Code: "AR",
        Name: "Argentina",
        Easy: true,
    },
    {
        Code: "AM",
        Name: "Armenia",
        Easy: false,
    },
    {
        Code: "AU",
        Name: "Australia",
        Easy: true,
    },
    {
        Code: "AT",
        Name: "Austria",
        Easy: false,
    },
    {
        Code: "AZ",
        Name: "Azerbaijan",
        Easy: false,
    },
    {
        Code: "BS",
        Name: "Bahamas",
        Easy: false,
    },
    {
        Code: "BH",
        Name: "Bahrain",
        Easy: false,
    },
    {
        Code: "BD",
        Name: "Bangladesh",
        Easy: false,
    },
    {
        Code: "BB",
        Name: "Barbados",
        Easy: false,
    },
    {
        Code: "BY",
        Name: "Belarus",
        Easy: false,
    },
    {
        Code: "BE",
        Name: "Belgium",
        Easy: true,
    },
    {
        Code: "BZ",
        Name: "Belize",
        Easy: false,
    },
    {
        Code: "BJ",
        Name: "Benin",
        Easy: false,
    },
    {
        Code: "BT",
        Name: "Bhutan",
        Easy: false,
    },
    {
        Code: "BO",
        Name: "Bolivia",
        Easy: false,
    },
    {
        Code: "BA",
        Name: "Bosnia and Herzegovina",
        Easy: false,
    },
    {
        Code: "BW",
        Name: "Botswana",
        Easy: false,
    },
    {
        Code: "BR",
        Name: "Brazil",
        Easy: true,
    },
    {
        Code: "BN",
        Name: "Brunei",
        Easy: false,
    },
    {
        Code: "BG",
        Name: "Bulgaria",
        Easy: true,
    },
    {
        Code: "BF",
        Name: "Burkina Faso",
        Easy: false,
    },
    {
        Code: "BI",
        Name: "Burundi",
        Easy: false,
    },
    {
        Code: "KH",
        Name: "Cambodia",
        Easy: false,
    },
    {
        Code: "CM",
        Name: "Cameroon",
        Easy: false,
    },
    {
        Code: "CA",
        Name: "Canada",
        Easy: true,
    },
    {
        Code: "CV",
        Name: "Cape Verde",
        Easy: false,
    },
    {
        Code: "CF",
        Name: "Central African Republic",
        Easy: false,
    },
    {
        Code: "TD",
        Name: "Chad",
        Easy: false,
    },
    {
        Code: "CL",
        Name: "Chile",
        Easy: false,
    },
    {
        Code: "CN",
        Name: "China",
        Easy: true,
    },
    {
        Code: "CO",
        Name: "Colombia",
        Easy: false,
    },
    {
        Code: "KM",
        Name: "Comoros",
        Easy: false,
    },
    {
        Code: "CG",
        Name: "Congo",
        Easy: false,
    },
    {
        Code: "CD",
        Name: "Congo, the Democratic Republic of the",
        Easy: false,
    },
    {
        Code: "CR",
        Name: "Costa Rica",
        Easy: false,
    },
    {
        Code: "CI",
        Name: "C??te d'Ivoire",
        Easy: false,
    },
    {
        Code: "HR",
        Name: "Croatia",
        Easy: false,
    },
    {
        Code: "CU",
        Name: "Cuba",
        Easy: false,
    },
    {
        Code: "CY",
        Name: "Cyprus",
        Easy: true,
    },
    {
        Code: "CZ",
        Name: "Czech Republic",
        Easy: true,
    },
    {
        Code: "DK",
        Name: "Denmark",
        Easy: true,
    },
    {
        Code: "DJ",
        Name: "Djibouti",
        Easy: false,
    },
    {
        Code: "DM",
        Name: "Dominica",
        Easy: false,
    },
    {
        Code: "DO",
        Name: "Dominican Republic",
        Easy: false,
    },
    {
        Code: "EC",
        Name: "Ecuador",
        Easy: false,
    },
    {
        Code: "EG",
        Name: "Egypt",
        Easy: true,
    },
    {
        Code: "SV",
        Name: "El Salvador",
        Easy: false,
    },
    {
        Code: "GQ",
        Name: "Equatorial Guinea",
        Easy: false,
    },
    {
        Code: "ER",
        Name: "Eritrea",
        Easy: false,
    },
    {
        Code: "EE",
        Name: "Estonia",
        Easy: false,
    },
    {
        Code: "ET",
        Name: "Ethiopia",
        Easy: false,
    },
    {
        Code: "FJ",
        Name: "Fiji",
        Easy: false,
    },
    {
        Code: "FI",
        Name: "Finland",
        Easy: false,
    },
    {
        Code: "FR",
        Name: "France",
        Easy: true,
    },
    {
        Code: "GA",
        Name: "Gabon",
        Easy: false,
    },
    {
        Code: "GM",
        Name: "Gambia",
        Easy: false,
    },
    {
        Code: "GE",
        Name: "Georgia",
        Easy: false,
    },
    {
        Code: "DE",
        Name: "Germany",
        Easy: true,
    },
    {
        Code: "GH",
        Name: "Ghana",
        Easy: false,
    },
    {
        Code: "GR",
        Name: "Greece",
        Easy: true,
    },
    {
        Code: "GD",
        Name: "Grenada",
        Easy: false,
    },
    {
        Code: "GT",
        Name: "Guatemala",
        Easy: false,
    },
    {
        Code: "GN",
        Name: "Guinea",
        Easy: false,
    },
    {
        Code: "GW",
        Name: "Guinea-Bissau",
        Easy: false,
    },
    {
        Code: "GY",
        Name: "Guyana",
        Easy: false,
    },
    {
        Code: "HT",
        Name: "Haiti",
        Easy: false,
    },
    {
        Code: "HN",
        Name: "Honduras",
        Easy: false,
    },
    {
        Code: "HK",
        Name: "Hong Kong",
        Easy: false,
    },
    {
        Code: "HU",
        Name: "Hungary",
        Easy: false,
    },
    {
        Code: "IS",
        Name: "Iceland",
        Easy: false,
    },
    {
        Code: "IN",
        Name: "India",
        Easy: true,
    },
    {
        Code: "ID",
        Name: "Indonesia",
        Easy: false,
    },
    {
        Code: "IR",
        Name: "Iran, Islamic Republic of",
        Easy: false,
    },
    {
        Code: "IQ",
        Name: "Iraq",
        Easy: false,
    },
    {
        Code: "IE",
        Name: "Ireland",
        Easy: true,
    },
    {
        Code: "IM",
        Name: "Isle of Man",
        Easy: false,
    },
    {
        Code: "IL",
        Name: "Israel",
        Easy: false,
    },
    {
        Code: "IT",
        Name: "Italy",
        Easy: true,
    },
    {
        Code: "JM",
        Name: "Jamaica",
        Easy: false,
    },
    {
        Code: "JP",
        Name: "Japan",
        Easy: true,
    },
    {
        Code: "JO",
        Name: "Jordan",
        Easy: false,
    },
    {
        Code: "KZ",
        Name: "Kazakhstan",
        Easy: false,
    },
    {
        Code: "KE",
        Name: "Kenya",
        Easy: true,
    },
    {
        Code: "KI",
        Name: "Kiribati",
        Easy: false,
    },
    {
        Code: "KP",
        Name: "North Korea",
        Easy: true,
    },
    {
        Code: "KR",
        Name: "South Korea",
        Easy: true,
    },
    {
        Code: "KW",
        Name: "Kuwait",
        Easy: false,
    },
    {
        Code: "KG",
        Name: "Kyrgyzstan",
        Easy: false,
    },
    {
        Code: "LA",
        Name: "Laos",
        Easy: false,
    },
    {
        Code: "LV",
        Name: "Latvia",
        Easy: false,
    },
    {
        Code: "LB",
        Name: "Lebanon",
        Easy: false,
    },
    {
        Code: "LS",
        Name: "Lesotho",
        Easy: false,
    },
    {
        Code: "LR",
        Name: "Liberia",
        Easy: false,
    },
    {
        Code: "LY",
        Name: "Libya",
        Easy: false,
    },
    {
        Code: "LI",
        Name: "Liechtenstein",
        Easy: false,
    },
    {
        Code: "LT",
        Name: "Lithuania",
        Easy: false,
    },
    {
        Code: "LU",
        Name: "Luxembourg",
        Easy: false,
    },
    {
        Code: "MK",
        Name: "North Macedonia",
        Easy: true,
    },
    {
        Code: "MG",
        Name: "Madagascar",
        Easy: false,
    },
    {
        Code: "MW",
        Name: "Malawi",
        Easy: false,
    },
    {
        Code: "MY",
        Name: "Malaysia",
        Easy: false,
    },
    {
        Code: "MV",
        Name: "Maldives",
        Easy: false,
    },
    {
        Code: "ML",
        Name: "Mali",
        Easy: false,
    },
    {
        Code: "MT",
        Name: "Malta",
        Easy: false,
    },
    {
        Code: "MH",
        Name: "Marshall Islands",
        Easy: false,
    },
    {
        Code: "MQ",
        Name: "Martinique",
        Easy: false,
    },
    {
        Code: "MR",
        Name: "Mauritania",
        Easy: false,
    },
    {
        Code: "MU",
        Name: "Mauritius",
        Easy: false,
    },
    {
        Code: "YT",
        Name: "Mayotte",
        Easy: false,
    },
    {
        Code: "MX",
        Name: "Mexico",
        Easy: true,
    },
    {
        Code: "FM",
        Name: "Micronesia",
        Easy: false,
    },
    {
        Code: "MD",
        Name: "Moldova",
        Easy: false,
    },
    {
        Code: "MC",
        Name: "Monaco",
        Easy: false,
    },
    {
        Code: "MN",
        Name: "Mongolia",
        Easy: false,
    },
    {
        Code: "ME",
        Name: "Montenegro",
        Easy: false,
    },
    {
        Code: "MA",
        Name: "Morocco",
        Easy: false,
    },
    {
        Code: "MZ",
        Name: "Mozambique",
        Easy: false,
    },
    {
        Code: "MM",
        Name: "Myanmar",
        Easy: false,
    },
    {
        Code: "NA",
        Name: "Namibia",
        Easy: false,
    },
    {
        Code: "NR",
        Name: "Nauru",
        Easy: false,
    },
    {
        Code: "NP",
        Name: "Nepal",
        Easy: true,
    },
    {
        Code: "NL",
        Name: "Netherlands",
        Easy: true,
    },
    {
        Code: "NZ",
        Name: "New Zealand",
        Easy: true,
    },
    {
        Code: "NI",
        Name: "Nicaragua",
        Easy: false,
    },
    {
        Code: "NE",
        Name: "Niger",
        Easy: false,
    },
    {
        Code: "NG",
        Name: "Nigeria",
        Easy: false,
    },
    {
        Code: "NO",
        Name: "Norway",
        Easy: true,
    },
    {
        Code: "OM",
        Name: "Oman",
        Easy: false,
    },
    {
        Code: "PK",
        Name: "Pakistan",
        Easy: true,
    },
    {
        Code: "PW",
        Name: "Palau",
        Easy: false,
    },
    {
        Code: "PS",
        Name: "Palestine",
        Easy: false,
    },
    {
        Code: "PA",
        Name: "Panama",
        Easy: false,
    },
    {
        Code: "PG",
        Name: "Papua New Guinea",
        Easy: false,
    },
    {
        Code: "PY",
        Name: "Paraguay",
        Easy: false,
    },
    {
        Code: "PE",
        Name: "Peru",
        Easy: false,
    },
    {
        Code: "PH",
        Name: "Philippines",
        Easy: false,
    },
    {
        Code: "PL",
        Name: "Poland",
        Easy: true,
    },
    {
        Code: "PT",
        Name: "Portugal",
        Easy: true,
    },
    {
        Code: "QA",
        Name: "Qatar",
        Easy: false,
    },
    {
        Code: "RO",
        Name: "Romania",
        Easy: false,
    },
    {
        Code: "RU",
        Name: "Russia",
        Easy: true,
    },
    {
        Code: "RW",
        Name: "Rwanda",
        Easy: false,
    },
    {
        Code: "KN",
        Name: "Saint Kitts and Nevis",
        Easy: false,
    },
    {
        Code: "LC",
        Name: "Saint Lucia",
        Easy: false,
    },
    {
        Code: "VC",
        Name: "Saint Vincent and the Grenadines",
        Easy: false,
    },
    {
        Code: "WS",
        Name: "Samoa",
        Easy: false,
    },
    {
        Code: "SM",
        Name: "San Marino",
        Easy: false,
    },
    {
        Code: "ST",
        Name: "Sao Tome and Principe",
        Easy: false,
    },
    {
        Code: "SA",
        Name: "Saudi Arabia",
        Easy: false,
    },
    {
        Code: "SN",
        Name: "Senegal",
        Easy: false,
    },
    {
        Code: "RS",
        Name: "Serbia",
        Easy: false,
    },
    {
        Code: "SC",
        Name: "Seychelles",
        Easy: false,
    },
    {
        Code: "SL",
        Name: "Sierra Leone",
        Easy: false,
    },
    {
        Code: "SG",
        Name: "Singapore",
        Easy: false,
    },
    {
        Code: "SK",
        Name: "Slovakia",
        Easy: false,
    },
    {
        Code: "SI",
        Name: "Slovenia",
        Easy: false,
    },
    {
        Code: "SB",
        Name: "Solomon Islands",
        Easy: false,
    },
    {
        Code: "SO",
        Name: "Somalia",
        Easy: false,
    },
    {
        Code: "ZA",
        Name: "South Africa",
        Easy: true,
    },
    {
        Code: "SS",
        Name: "South Sudan",
        Easy: false,
    },
    {
        Code: "ES",
        Name: "Spain",
        Easy: true,
    },
    {
        Code: "LK",
        Name: "Sri Lanka",
        Easy: false,
    },
    {
        Code: "SD",
        Name: "Sudan",
        Easy: false,
    },
    {
        Code: "SR",
        Name: "Suriname",
        Easy: false,
    },
    {
        Code: "SE",
        Name: "Sweden",
        Easy: true,
    },
    {
        Code: "CH",
        Name: "Switzerland",
        Easy: true,
    },
    {
        Code: "SY",
        Name: "Syria",
        Easy: false,
    },
    {
        Code: "TW",
        Name: "Taiwan",
        Easy: false,
    },
    {
        Code: "TJ",
        Name: "Tajikistan",
        Easy: false,
    },
    {
        Code: "TZ",
        Name: "Tanzania",
        Easy: false,
    },
    {
        Code: "TH",
        Name: "Thailand",
        Easy: false,
    },
    {
        Code: "TL",
        Name: "Timor-Leste",
        Easy: false,
    },
    {
        Code: "TG",
        Name: "Togo",
        Easy: false,
    },
    {
        Code: "TO",
        Name: "Tonga",
        Easy: false,
    },
    {
        Code: "TT",
        Name: "Trinidad and Tobago",
        Easy: false,
    },
    {
        Code: "TN",
        Name: "Tunisia",
        Easy: false,
    },
    {
        Code: "TR",
        Name: "Turkey",
        Easy: true,
    },
    {
        Code: "TM",
        Name: "Turkmenistan",
        Easy: false,
    },
    {
        Code: "TC",
        Name: "Turks and Caicos Islands",
        Easy: false,
    },
    {
        Code: "TV",
        Name: "Tuvalu",
        Easy: false,
    },
    {
        Code: "UG",
        Name: "Uganda",
        Easy: false,
    },
    {
        Code: "UA",
        Name: "Ukraine",
        Easy: true,
    },
    {
        Code: "AE",
        Name: "United Arab Emirates",
        Easy: false,
    },
    {
        Code: "GB",
        Name: "United Kingdom",
        Easy: true,
    },
    {
        Code: "US",
        Name: "United States of America",
        Easy: true,
    },
    {
        Code: "UY",
        Name: "Uruguay",
        Easy: false,
    },
    {
        Code: "UZ",
        Name: "Uzbekistan",
        Easy: false,
    },
    {
        Code: "VU",
        Name: "Vanuatu",
        Easy: false,
    },
    {
        Code: "VE",
        Name: "Venezuela",
        Easy: false,
    },
    {
        Code: "VN",
        Name: "Vietnam",
        Easy: false,
    },
    {
        Code: "YE",
        Name: "Yemen",
        Easy: false,
    },
    {
        Code: "ZM",
        Name: "Zambia",
        Easy: false,
    },
    {
        Code: "ZW",
        Name: "Zimbabwe",
        Easy: false,
    },
];
