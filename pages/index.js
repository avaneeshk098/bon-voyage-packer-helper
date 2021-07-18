import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
    const [wardrobe, setWardrobe] = useState([])
    const [wardrobeAPI, setWardrobeAPI] = useState([])
    const [recList, setRecList] = useState([])

    const addToWardrobe = e => {
        e.preventDefault()
        if (document.getElementById('wardrobe-field').value.trim() !== '') {
            const item = document
                .getElementById('wardrobe-field')
                .value.split(', ')
            setWardrobe([
                ...wardrobe,
                document.getElementById('wardrobe-field').value,
            ])
            setWardrobeAPI([
                ...wardrobeAPI,
                {
                    type: item[0],
                    brand: item[1],
                    thickness: item[2],
                    likeness: item[3],
                },
            ])
            document.getElementById('wardrobe-field').value = ''
        }
    }
    const generateResult = async e => {
        const city = document.getElementById('city').value
        const country = document.getElementById('country').value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=API_KEY`
        const response = await fetch(url).catch(e => {
            console.error(e)
            alert(
                'The destination must be wrong, kindly check your destination.',
            )
            return
        })
        const data = await response.json()
        const temp = Math.round(data['main'].feels_like - 273.15)
        let thick_max, thick_min
        if (temp >= 35) {
            thick_min = 1
            thick_max = 4
        } else if (temp >= 30) {
            thick_min = 2
            thick_max = 7
        } else if (temp >= 25) {
            thick_min = 4
            thick_max = 8
        } else if (temp >= 20) {
            thick_min = 5
            thick_max = 9
        } else if (temp >= 15) {
            thick_min = 6
            thick_max = 10
        } else if (t < 15) {
            thick_min = 7
            thick_max = 10
        }
        let tops = []
        let pants = []
        let extra_tops = []
        for (var i = 0; i < wardrobeAPI.length; i++) {
            if (
                wardrobeAPI[i].type === 'Coat' ||
                wardrobeAPI[i].type === 'Jacket' ||
                wardrobeAPI[i].type === 'Suit' ||
                wardrobeAPI[i].type === 'Tie' ||
                wardrobeAPI[i].type === 'Sweater'
            ) {
                extra_tops.push(wardrobeAPI[i])
            }
            if (
                wardrobeAPI[i].type === 'Pants' ||
                wardrobeAPI[i].type === 'Shorts' ||
                wardrobeAPI[i].type === 'Skirt' ||
                wardrobeAPI[i].type === 'Leggings' ||
                wardrobeAPI[i].type === 'Jumpsuit' ||
                wardrobeAPI[i].type === 'Jeans'
            ) {
                pants.push(wardrobeAPI[i])
            }
            if (
                wardrobeAPI[i].type === 'Top' ||
                wardrobeAPI[i].type === 'Shirt' ||
                wardrobeAPI[i].type === 'Tank Top' ||
                wardrobeAPI[i].type === 'T-Shirt' ||
                wardrobeAPI[i].type === 'Crop Top' ||
                wardrobeAPI[i].type === 'Tee' ||
                wardrobeAPI[i].type === 'Turtleneck'
            ) {
                tops.push(wardrobeAPI[i])
            }
        }
        if (duration.value <= 0) {
            alert('Not a valid duration')
            return
        }
        tops = tops.filter(
            top =>
                Number(top.thickness) >= thick_min &&
                Number(top.thickness) <= thick_max,
        )
        pants = pants.filter(
            pants =>
                Number(pants.thickness) >= thick_min &&
                Number(pants.thickness) <= thick_max,
        )
        if (tops.length < duration.value || pants.length < duration.value) {
            alert(
                'You do not have enough clothes for this trip. Please enter more clothings.',
            )
            return
        }
        tops.sort((a, b) => {
            return b.likeness - a.likeness
        })
        pants.sort((a, b) => {
            return b.likeness - a.likeness
        })
        extra_tops.sort((a, b) => {
            return b.likeness - a.likeness
        })
        const finalPairings = []
        for (var i = 0; i < Number(duration.value); i++) {
            finalPairings.push([])
        }
        for (var day = 0; day < Number(duration.value); day++) {
            finalPairings[day].push(tops.shift())
            finalPairings[day].push(pants.shift())
            finalPairings[day].push(day + 1)
        }
        setRecList(finalPairings)
    }
    return (
        <div className="container">
            <Head>
                <title>Packer Helper</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="main">
                <h1 className="title" style={{ marginTop: '3rem' }}>
                    <a style={{ textDecoration: 'none' }}>Packer Helper</a>
                </h1>
                <form
                    className="form"
                    onSubmit={e => {
                        e.preventDefault()
                    }}>
                    <label htmlFor="country" className="label">
                        Destination Country:
                    </label>
                    <select
                        name="country"
                        className="field"
                        id="country"
                        defaultValue="0">
                        <option
                            value="0"
                            label="Select destination country"
                            disabled>
                            Select a country ...{' '}
                        </option>
                        <optgroup id="country-optgroup-Africa" label="Africa">
                            <option value="DZ" label="Algeria">
                                Algeria
                            </option>
                            <option value="AO" label="Angola">
                                Angola
                            </option>
                            <option value="BJ" label="Benin">
                                Benin
                            </option>
                            <option value="BW" label="Botswana">
                                Botswana
                            </option>
                            <option value="BF" label="Burkina Faso">
                                Burkina Faso
                            </option>
                            <option value="BI" label="Burundi">
                                Burundi
                            </option>
                            <option value="CM" label="Cameroon">
                                Cameroon
                            </option>
                            <option value="CV" label="Cape Verde">
                                Cape Verde
                            </option>
                            <option value="CF" label="Central African Republic">
                                Central African Republic
                            </option>
                            <option value="TD" label="Chad">
                                Chad
                            </option>
                            <option value="KM" label="Comoros">
                                Comoros
                            </option>
                            <option value="CG" label="Congo - Brazzaville">
                                Congo - Brazzaville
                            </option>
                            <option value="CD" label="Congo - Kinshasa">
                                Congo - Kinshasa
                            </option>
                            <option value="CI" label="Côte d’Ivoire">
                                Côte d’Ivoire
                            </option>
                            <option value="DJ" label="Djibouti">
                                Djibouti
                            </option>
                            <option value="EG" label="Egypt">
                                Egypt
                            </option>
                            <option value="GQ" label="Equatorial Guinea">
                                Equatorial Guinea
                            </option>
                            <option value="ER" label="Eritrea">
                                Eritrea
                            </option>
                            <option value="ET" label="Ethiopia">
                                Ethiopia
                            </option>
                            <option value="GA" label="Gabon">
                                Gabon
                            </option>
                            <option value="GM" label="Gambia">
                                Gambia
                            </option>
                            <option value="GH" label="Ghana">
                                Ghana
                            </option>
                            <option value="GN" label="Guinea">
                                Guinea
                            </option>
                            <option value="GW" label="Guinea-Bissau">
                                Guinea-Bissau
                            </option>
                            <option value="KE" label="Kenya">
                                Kenya
                            </option>
                            <option value="LS" label="Lesotho">
                                Lesotho
                            </option>
                            <option value="LR" label="Liberia">
                                Liberia
                            </option>
                            <option value="LY" label="Libya">
                                Libya
                            </option>
                            <option value="MG" label="Madagascar">
                                Madagascar
                            </option>
                            <option value="MW" label="Malawi">
                                Malawi
                            </option>
                            <option value="ML" label="Mali">
                                Mali
                            </option>
                            <option value="MR" label="Mauritania">
                                Mauritania
                            </option>
                            <option value="MU" label="Mauritius">
                                Mauritius
                            </option>
                            <option value="YT" label="Mayotte">
                                Mayotte
                            </option>
                            <option value="MA" label="Morocco">
                                Morocco
                            </option>
                            <option value="MZ" label="Mozambique">
                                Mozambique
                            </option>
                            <option value="NA" label="Namibia">
                                Namibia
                            </option>
                            <option value="NE" label="Niger">
                                Niger
                            </option>
                            <option value="NG" label="Nigeria">
                                Nigeria
                            </option>
                            <option value="RW" label="Rwanda">
                                Rwanda
                            </option>
                            <option value="RE" label="Réunion">
                                Réunion
                            </option>
                            <option value="SH" label="Saint Helena">
                                Saint Helena
                            </option>
                            <option value="SN" label="Senegal">
                                Senegal
                            </option>
                            <option value="SC" label="Seychelles">
                                Seychelles
                            </option>
                            <option value="SL" label="Sierra Leone">
                                Sierra Leone
                            </option>
                            <option value="SO" label="Somalia">
                                Somalia
                            </option>
                            <option value="ZA" label="South Africa">
                                South Africa
                            </option>
                            <option value="SD" label="Sudan">
                                Sudan
                            </option>
                            <option value="SZ" label="Swaziland">
                                Swaziland
                            </option>
                            <option value="ST" label="São Tomé and Príncipe">
                                São Tomé and Príncipe
                            </option>
                            <option value="TZ" label="Tanzania">
                                Tanzania
                            </option>
                            <option value="TG" label="Togo">
                                Togo
                            </option>
                            <option value="TN" label="Tunisia">
                                Tunisia
                            </option>
                            <option value="UG" label="Uganda">
                                Uganda
                            </option>
                            <option value="EH" label="Western Sahara">
                                Western Sahara
                            </option>
                            <option value="ZM" label="Zambia">
                                Zambia
                            </option>
                            <option value="ZW" label="Zimbabwe">
                                Zimbabwe
                            </option>
                        </optgroup>
                        <optgroup
                            id="country-optgroup-Americas"
                            label="Americas">
                            <option value="AI" label="Anguilla">
                                Anguilla
                            </option>
                            <option value="AG" label="Antigua and Barbuda">
                                Antigua and Barbuda
                            </option>
                            <option value="AR" label="Argentina">
                                Argentina
                            </option>
                            <option value="AW" label="Aruba">
                                Aruba
                            </option>
                            <option value="BS" label="Bahamas">
                                Bahamas
                            </option>
                            <option value="BB" label="Barbados">
                                Barbados
                            </option>
                            <option value="BZ" label="Belize">
                                Belize
                            </option>
                            <option value="BM" label="Bermuda">
                                Bermuda
                            </option>
                            <option value="BO" label="Bolivia">
                                Bolivia
                            </option>
                            <option value="BR" label="Brazil">
                                Brazil
                            </option>
                            <option value="VG" label="British Virgin Islands">
                                British Virgin Islands
                            </option>
                            <option value="CA" label="Canada">
                                Canada
                            </option>
                            <option value="KY" label="Cayman Islands">
                                Cayman Islands
                            </option>
                            <option value="CL" label="Chile">
                                Chile
                            </option>
                            <option value="CO" label="Colombia">
                                Colombia
                            </option>
                            <option value="CR" label="Costa Rica">
                                Costa Rica
                            </option>
                            <option value="CU" label="Cuba">
                                Cuba
                            </option>
                            <option value="DM" label="Dominica">
                                Dominica
                            </option>
                            <option value="DO" label="Dominican Republic">
                                Dominican Republic
                            </option>
                            <option value="EC" label="Ecuador">
                                Ecuador
                            </option>
                            <option value="SV" label="El Salvador">
                                El Salvador
                            </option>
                            <option value="FK" label="Falkland Islands">
                                Falkland Islands
                            </option>
                            <option value="GF" label="French Guiana">
                                French Guiana
                            </option>
                            <option value="GL" label="Greenland">
                                Greenland
                            </option>
                            <option value="GD" label="Grenada">
                                Grenada
                            </option>
                            <option value="GP" label="Guadeloupe">
                                Guadeloupe
                            </option>
                            <option value="GT" label="Guatemala">
                                Guatemala
                            </option>
                            <option value="GY" label="Guyana">
                                Guyana
                            </option>
                            <option value="HT" label="Haiti">
                                Haiti
                            </option>
                            <option value="HN" label="Honduras">
                                Honduras
                            </option>
                            <option value="JM" label="Jamaica">
                                Jamaica
                            </option>
                            <option value="MQ" label="Martinique">
                                Martinique
                            </option>
                            <option value="MX" label="Mexico">
                                Mexico
                            </option>
                            <option value="MS" label="Montserrat">
                                Montserrat
                            </option>
                            <option value="AN" label="Netherlands Antilles">
                                Netherlands Antilles
                            </option>
                            <option value="NI" label="Nicaragua">
                                Nicaragua
                            </option>
                            <option value="PA" label="Panama">
                                Panama
                            </option>
                            <option value="PY" label="Paraguay">
                                Paraguay
                            </option>
                            <option value="PE" label="Peru">
                                Peru
                            </option>
                            <option value="PR" label="Puerto Rico">
                                Puerto Rico
                            </option>
                            <option value="BL" label="Saint Barthélemy">
                                Saint Barthélemy
                            </option>
                            <option value="KN" label="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                            </option>
                            <option value="LC" label="Saint Lucia">
                                Saint Lucia
                            </option>
                            <option value="MF" label="Saint Martin">
                                Saint Martin
                            </option>
                            <option
                                value="PM"
                                label="Saint Pierre and Miquelon">
                                Saint Pierre and Miquelon
                            </option>
                            <option
                                value="VC"
                                label="Saint Vincent and the Grenadines">
                                Saint Vincent and the Grenadines
                            </option>
                            <option value="SR" label="Suriname">
                                Suriname
                            </option>
                            <option value="TT" label="Trinidad and Tobago">
                                Trinidad and Tobago
                            </option>
                            <option value="TC" label="Turks and Caicos Islands">
                                Turks and Caicos Islands
                            </option>
                            <option value="VI" label="U.S. Virgin Islands">
                                U.S. Virgin Islands
                            </option>
                            <option value="US" label="United States">
                                United States
                            </option>
                            <option value="UY" label="Uruguay">
                                Uruguay
                            </option>
                            <option value="VE" label="Venezuela">
                                Venezuela
                            </option>
                        </optgroup>
                        <optgroup id="country-optgroup-Asia" label="Asia">
                            <option value="AF" label="Afghanistan">
                                Afghanistan
                            </option>
                            <option value="AM" label="Armenia">
                                Armenia
                            </option>
                            <option value="AZ" label="Azerbaijan">
                                Azerbaijan
                            </option>
                            <option value="BH" label="Bahrain">
                                Bahrain
                            </option>
                            <option value="BD" label="Bangladesh">
                                Bangladesh
                            </option>
                            <option value="BT" label="Bhutan">
                                Bhutan
                            </option>
                            <option value="BN" label="Brunei">
                                Brunei
                            </option>
                            <option value="KH" label="Cambodia">
                                Cambodia
                            </option>
                            <option value="CN" label="China">
                                China
                            </option>
                            <option value="GE" label="Georgia">
                                Georgia
                            </option>
                            <option value="HK" label="Hong Kong SAR China">
                                Hong Kong SAR China
                            </option>
                            <option value="IN" label="India">
                                India
                            </option>
                            <option value="ID" label="Indonesia">
                                Indonesia
                            </option>
                            <option value="IR" label="Iran">
                                Iran
                            </option>
                            <option value="IQ" label="Iraq">
                                Iraq
                            </option>
                            <option value="IL" label="Israel">
                                Israel
                            </option>
                            <option value="JP" label="Japan">
                                Japan
                            </option>
                            <option value="JO" label="Jordan">
                                Jordan
                            </option>
                            <option value="KZ" label="Kazakhstan">
                                Kazakhstan
                            </option>
                            <option value="KW" label="Kuwait">
                                Kuwait
                            </option>
                            <option value="KG" label="Kyrgyzstan">
                                Kyrgyzstan
                            </option>
                            <option value="LA" label="Laos">
                                Laos
                            </option>
                            <option value="LB" label="Lebanon">
                                Lebanon
                            </option>
                            <option value="MO" label="Macau SAR China">
                                Macau SAR China
                            </option>
                            <option value="MY" label="Malaysia">
                                Malaysia
                            </option>
                            <option value="MV" label="Maldives">
                                Maldives
                            </option>
                            <option value="MN" label="Mongolia">
                                Mongolia
                            </option>
                            <option value="MM" label="Myanmar [Burma]">
                                Myanmar [Burma]
                            </option>
                            <option value="NP" label="Nepal">
                                Nepal
                            </option>
                            <option value="NT" label="Neutral Zone">
                                Neutral Zone
                            </option>
                            <option value="KP" label="North Korea">
                                North Korea
                            </option>
                            <option value="OM" label="Oman">
                                Oman
                            </option>
                            <option value="PK" label="Pakistan">
                                Pakistan
                            </option>
                            <option value="PS" label="Palestinian Territories">
                                Palestinian Territories
                            </option>
                            <option
                                value="YD"
                                label="People's Democratic Republic of Yemen">
                                People's Democratic Republic of Yemen
                            </option>
                            <option value="PH" label="Philippines">
                                Philippines
                            </option>
                            <option value="QA" label="Qatar">
                                Qatar
                            </option>
                            <option value="SA" label="Saudi Arabia">
                                Saudi Arabia
                            </option>
                            <option value="SG" label="Singapore">
                                Singapore
                            </option>
                            <option value="KR" label="South Korea">
                                South Korea
                            </option>
                            <option value="LK" label="Sri Lanka">
                                Sri Lanka
                            </option>
                            <option value="SY" label="Syria">
                                Syria
                            </option>
                            <option value="TW" label="Taiwan">
                                Taiwan
                            </option>
                            <option value="TJ" label="Tajikistan">
                                Tajikistan
                            </option>
                            <option value="TH" label="Thailand">
                                Thailand
                            </option>
                            <option value="TL" label="Timor-Leste">
                                Timor-Leste
                            </option>
                            <option value="TR" label="Turkey">
                                Turkey
                            </option>
                            <option value="TM" label="Turkmenistan">
                                Turkmenistan
                            </option>
                            <option value="AE" label="United Arab Emirates">
                                United Arab Emirates
                            </option>
                            <option value="UZ" label="Uzbekistan">
                                Uzbekistan
                            </option>
                            <option value="VN" label="Vietnam">
                                Vietnam
                            </option>
                            <option value="YE" label="Yemen">
                                Yemen
                            </option>
                        </optgroup>
                        <optgroup id="country-optgroup-Europe" label="Europe">
                            <option value="AL" label="Albania">
                                Albania
                            </option>
                            <option value="AD" label="Andorra">
                                Andorra
                            </option>
                            <option value="AT" label="Austria">
                                Austria
                            </option>
                            <option value="BY" label="Belarus">
                                Belarus
                            </option>
                            <option value="BE" label="Belgium">
                                Belgium
                            </option>
                            <option value="BA" label="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                            </option>
                            <option value="BG" label="Bulgaria">
                                Bulgaria
                            </option>
                            <option value="HR" label="Croatia">
                                Croatia
                            </option>
                            <option value="CY" label="Cyprus">
                                Cyprus
                            </option>
                            <option value="CZ" label="Czech Republic">
                                Czech Republic
                            </option>
                            <option value="DK" label="Denmark">
                                Denmark
                            </option>
                            <option value="DD" label="East Germany">
                                East Germany
                            </option>
                            <option value="EE" label="Estonia">
                                Estonia
                            </option>
                            <option value="FO" label="Faroe Islands">
                                Faroe Islands
                            </option>
                            <option value="FI" label="Finland">
                                Finland
                            </option>
                            <option value="FR" label="France">
                                France
                            </option>
                            <option value="DE" label="Germany">
                                Germany
                            </option>
                            <option value="GI" label="Gibraltar">
                                Gibraltar
                            </option>
                            <option value="GR" label="Greece">
                                Greece
                            </option>
                            <option value="GG" label="Guernsey">
                                Guernsey
                            </option>
                            <option value="HU" label="Hungary">
                                Hungary
                            </option>
                            <option value="IS" label="Iceland">
                                Iceland
                            </option>
                            <option value="IE" label="Ireland">
                                Ireland
                            </option>
                            <option value="IM" label="Isle of Man">
                                Isle of Man
                            </option>
                            <option value="IT" label="Italy">
                                Italy
                            </option>
                            <option value="JE" label="Jersey">
                                Jersey
                            </option>
                            <option value="LV" label="Latvia">
                                Latvia
                            </option>
                            <option value="LI" label="Liechtenstein">
                                Liechtenstein
                            </option>
                            <option value="LT" label="Lithuania">
                                Lithuania
                            </option>
                            <option value="LU" label="Luxembourg">
                                Luxembourg
                            </option>
                            <option value="MK" label="Macedonia">
                                Macedonia
                            </option>
                            <option value="MT" label="Malta">
                                Malta
                            </option>
                            <option value="FX" label="Metropolitan France">
                                Metropolitan France
                            </option>
                            <option value="MD" label="Moldova">
                                Moldova
                            </option>
                            <option value="MC" label="Monaco">
                                Monaco
                            </option>
                            <option value="ME" label="Montenegro">
                                Montenegro
                            </option>
                            <option value="NL" label="Netherlands">
                                Netherlands
                            </option>
                            <option value="NO" label="Norway">
                                Norway
                            </option>
                            <option value="PL" label="Poland">
                                Poland
                            </option>
                            <option value="PT" label="Portugal">
                                Portugal
                            </option>
                            <option value="RO" label="Romania">
                                Romania
                            </option>
                            <option value="RU" label="Russia">
                                Russia
                            </option>
                            <option value="SM" label="San Marino">
                                San Marino
                            </option>
                            <option value="RS" label="Serbia">
                                Serbia
                            </option>
                            <option value="CS" label="Serbia and Montenegro">
                                Serbia and Montenegro
                            </option>
                            <option value="SK" label="Slovakia">
                                Slovakia
                            </option>
                            <option value="SI" label="Slovenia">
                                Slovenia
                            </option>
                            <option value="ES" label="Spain">
                                Spain
                            </option>
                            <option value="SJ" label="Svalbard and Jan Mayen">
                                Svalbard and Jan Mayen
                            </option>
                            <option value="SE" label="Sweden">
                                Sweden
                            </option>
                            <option value="CH" label="Switzerland">
                                Switzerland
                            </option>
                            <option value="UA" label="Ukraine">
                                Ukraine
                            </option>
                            <option
                                value="SU"
                                label="Union of Soviet Socialist Republics">
                                Union of Soviet Socialist Republics
                            </option>
                            <option value="GB" label="United Kingdom">
                                United Kingdom
                            </option>
                            <option value="VA" label="Vatican City">
                                Vatican City
                            </option>
                            <option value="AX" label="Åland Islands">
                                Åland Islands
                            </option>
                        </optgroup>
                        <optgroup id="country-optgroup-Oceania" label="Oceania">
                            <option value="AS" label="American Samoa">
                                American Samoa
                            </option>
                            <option value="AQ" label="Antarctica">
                                Antarctica
                            </option>
                            <option value="AU" label="Australia">
                                Australia
                            </option>
                            <option value="BV" label="Bouvet Island">
                                Bouvet Island
                            </option>
                            <option
                                value="IO"
                                label="British Indian Ocean Territory">
                                British Indian Ocean Territory
                            </option>
                            <option value="CX" label="Christmas Island">
                                Christmas Island
                            </option>
                            <option value="CC" label="Cocos [Keeling] Islands">
                                Cocos [Keeling] Islands
                            </option>
                            <option value="CK" label="Cook Islands">
                                Cook Islands
                            </option>
                            <option value="FJ" label="Fiji">
                                Fiji
                            </option>
                            <option value="PF" label="French Polynesia">
                                French Polynesia
                            </option>
                            <option
                                value="TF"
                                label="French Southern Territories">
                                French Southern Territories
                            </option>
                            <option value="GU" label="Guam">
                                Guam
                            </option>
                            <option
                                value="HM"
                                label="Heard Island and McDonald Islands">
                                Heard Island and McDonald Islands
                            </option>
                            <option value="KI" label="Kiribati">
                                Kiribati
                            </option>
                            <option value="MH" label="Marshall Islands">
                                Marshall Islands
                            </option>
                            <option value="FM" label="Micronesia">
                                Micronesia
                            </option>
                            <option value="NR" label="Nauru">
                                Nauru
                            </option>
                            <option value="NC" label="New Caledonia">
                                New Caledonia
                            </option>
                            <option value="NZ" label="New Zealand">
                                New Zealand
                            </option>
                            <option value="NU" label="Niue">
                                Niue
                            </option>
                            <option value="NF" label="Norfolk Island">
                                Norfolk Island
                            </option>
                            <option value="MP" label="Northern Mariana Islands">
                                Northern Mariana Islands
                            </option>
                            <option value="PW" label="Palau">
                                Palau
                            </option>
                            <option value="PG" label="Papua New Guinea">
                                Papua New Guinea
                            </option>
                            <option value="PN" label="Pitcairn Islands">
                                Pitcairn Islands
                            </option>
                            <option value="WS" label="Samoa">
                                Samoa
                            </option>
                            <option value="SB" label="Solomon Islands">
                                Solomon Islands
                            </option>
                            <option
                                value="GS"
                                label="South Georgia and the South Sandwich Islands">
                                South Georgia and the South Sandwich Islands
                            </option>
                            <option value="TK" label="Tokelau">
                                Tokelau
                            </option>
                            <option value="TO" label="Tonga">
                                Tonga
                            </option>
                            <option value="TV" label="Tuvalu">
                                Tuvalu
                            </option>
                            <option
                                value="UM"
                                label="U.S. Minor Outlying Islands">
                                U.S. Minor Outlying Islands
                            </option>
                            <option value="VU" label="Vanuatu">
                                Vanuatu
                            </option>
                            <option value="WF" label="Wallis and Futuna">
                                Wallis and Futuna
                            </option>
                        </optgroup>
                    </select>
                    <label htmlFor="city" className="label">
                        Destination City:
                    </label>
                    <input
                        name="city"
                        id="city"
                        placeholder="Enter your destination"
                        className="field"
                        type="text"></input>
                    <label htmlFor="wardrobe-field" className="label">
                        Wardrobe List:
                    </label>
                    <p
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            paddingLeft: '0.5rem',
                            fontWeight: 'bold',
                        }}>
                        <span style={{ color: '#0070f3' }}>Format:</span>{' '}
                        Clothing Type, Brand Name, Thickness(1 - 10),
                        Likeability(1 - 5){' '}
                    </p>
                    <p
                        style={{
                            width: '100%',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'left',
                            paddingLeft: '0.5rem',
                            fontWeight: 'bold',
                        }}>
                        <span style={{ color: '#0070f3' }}>Example:</span>{' '}
                        Jacket, Gucci, 7, 4.9{' '}
                    </p>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <input
                            name="wardrobe-field"
                            id="wardrobe-field"
                            className="field"
                            placeholder="Enter clothing item"
                            type="text"
                            style={{ width: '80%' }}></input>
                        <button
                            onClick={addToWardrobe}
                            style={{
                                width: '20%',
                                margin: '1rem',
                                marginRight: 'auto',
                                marginLeft: '1rem',
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                appearance: 'none',
                                outline: 'none',
                                border: 'none',
                                fontSize: '1.2em',
                                background: '#0070f3',
                                color: '#fff',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                borderRadius: '4px',
                            }}>
                            Add
                        </button>
                    </div>
                    <table className="table">
                        <tbody>
                            <tr className="table-row">
                                <th>Wardrobe Dresses</th>
                            </tr>
                            {wardrobe.map(dress => {
                                return (
                                    <tr key={dress} className="table-row">
                                        <td>{dress}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <label
                        htmlFor="duration"
                        className="label"
                        style={{ marginTop: '2rem' }}>
                        Duration of Vacation (in Days):
                    </label>
                    <input
                        name="duration"
                        id="duration"
                        className="field"
                        type="text"
                        placeholder="Enter duration of vacation in days"
                        style={{
                            marginBottom: '2rem',
                        }}></input>
                    <button
                        style={{
                            width: '80%',
                            WebkitAppearance: 'none',
                            marginBottom: '3rem',
                            MozAppearance: 'none',
                            appearance: 'none',
                            outline: 'none',
                            border: 'none',
                            padding: '0.7rem',
                            fontSize: '1.2em',
                            background: '#0070f3',
                            color: '#fff',

                            letterSpacing: '1.5px',
                            borderRadius: '4px',
                        }}
                        onClick={generateResult}>
                        Generate Packing
                    </button>
                </form>
                <table
                    className="table"
                    style={{ width: '100%', marginBottom: '3rem' }}>
                    <thead>
                        <tr className="table-row">
                            <th
                                style={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.1)',
                                }}>
                                Your Packing List
                            </th>
                        </tr>
                    </thead>
                    {recList.map(rec => {
                        return (
                            <tbody>
                                <tr className="table-row">
                                    <th>Day {rec[2]}</th>
                                </tr>
                                <tr className="table-row">
                                    <td>
                                        {rec[0].brand} {rec[0].type} -
                                        Thickness: {rec[0].thickness}
                                    </td>
                                </tr>
                                <tr className="table-row">
                                    <td
                                        style={{
                                            borderBottom:
                                                '1px solid rgba(0, 0, 0, 0.1)',
                                        }}>
                                        {rec[1].brand} {rec[1].type} -
                                        Thickness: {rec[1].thickness}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

            <footer>&copy; Made by Avaneesh Kumar</footer>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    background: #fafafa;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    margin-top: 0.5rem;
                }

                .field {
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    -webkit-appearance: none;
                    -mozilla-appearance: none;
                    appearance: none;
                    outline: none;
                    border: none;
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.1em;
                    border-radius: 6px;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
                }

                .label {
                    width: 100%;
                    text-align: left !important;
                    padding-left: 0.5rem;
                    margin-top: 1rem;
                    font-size: 1.1em;
                    font-weight: bold;
                }
                .main {
                    display: flex;
                    width: 100%;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    flex-direction: column;
                }

                .table {
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    width: 80%;
                    border-spacing: 0;
                    border-radius: 6px;
                    margin-top: 1.5rem;
                    border-radius: 6px;
                }

                .table-row {
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    border-spacing: 0;
                }
                .table-row td {
                    padding-top: 1rem;
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                    font-size: 1.1em;
                    text-align: center;
                    font-weight: 600;
                    padding-bottom: 1rem;
                }
                .table-row th {
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    color: #0070f3;
                    font-size: 1.2em;
                    font-weight: bold;
                }
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer img {
                    margin-left: 0.5rem;
                }

                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }

                .title {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                    text-align: left !important;
                    width: 100%;
                }

                .title,
                .description {
                    text-align: center;
                }

                .description {
                    line-height: 1.5;
                    font-size: 1.5rem;
                }

                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                        monospace;
                }

                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    max-width: 800px;
                    margin-top: 3rem;
                }

                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                .logo {
                    height: 1em;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}
