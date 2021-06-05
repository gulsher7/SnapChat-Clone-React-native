import axios from "axios";
import { GOOGLE_MAP_KEY } from "../constants";

export const getAddressFromLatLong = (latlng, language = 'en') =>
    axios({
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        params: {
            latlng,
            key: GOOGLE_MAP_KEY,
            language,
        },
    })
        .then(response => {
            // console.log("success resp==>>", response)
            if (response.data.results && response.data.results.length > 0) {
                let filterData = response.data.results.filter(address => {
                    // console.log(address, 'the addres aofdjoi');
                    if (
                        address.types.includes('locality') ||
                        address.types.includes('sublocality') ||
                        address.types.includes('postal_code') ||
                        address.types.includes('administrative_area_level_2')
                    ) {
                        return true;
                    }
                });

                let dataToGetCity = {};
                if (filterData.length > 0) {

                    dataToGetCity = filterData[filterData.length - 1];
                } else {
                    dataToGetCity = [
                        response.data.results[response.data.results.length - 2],
                    ];
                }

                let cityText = dataToGetCity.address_components[0].long_name;
                const dataToSend = {
                    city: cityText,
                    address: response.data.results[0].formatted_address,
                };

                return dataToSend;
            }
            return '';
        })
        .catch(error => {
            error;
            console.log("error==>>>", error)
        });