
import React, { useState, useEffect, createContext } from 'react';
import { createGroups, formatData } from './functions';
export const AppContext = createContext([
	{},
	() => {}
]);

export const AppProvider = ( props ) => {

	const [ data, setData ] = useState( null );

	function setWithExpiry(key, value, ttl) {
		const now = new Date()
	
		// `item` is an object which contains the original value
		// as well as the time when it's supposed to expire
		const item = {
			value: value,
			expiry: now.getTime() + ttl,
		}
		localStorage.setItem(key, JSON.stringify(item))
	}

	function getWithExpiry(key) {
		const itemStr = localStorage.getItem(key)
		// if the item doesn't exist, return null
		if (!itemStr) {
			return null
		}
		const item = JSON.parse(itemStr)
		const now = new Date()
		// compare the expiry time of the item with the current time
		if (now.getTime() > item.expiry) {
			// If the item is expired, delete the item from storage
			// and return null
			localStorage.removeItem(key)
			return null
		}
		return item.value
	}

	useEffect( () => {

		

		// make sure window object is availabe (Client)
		if (typeof window) {


			const localdata = getWithExpiry("vstech")



			//if localstorage data exists, set data to localstorage & skip api call, reducing api requests.
			if (localdata) {
				const loc = JSON.parse(localdata)
				return setData(loc)
			}
		}
		console.log("making api request")
		// if the data does not exist in localstorage, make api call.
		fetch('https://vstechtest.azurewebsites.net/api/GetData', {
			headers: {
				"Authorization": "Bearer e5a81f8c-8aa7-4bc5-a75e-cd7ea8c85968",
			},
		})
		.then((response) => response.json())
		.then((data) => {
			const formattedData = createGroups(data);
			const test = formatData(formattedData);
			setData(test);
			setWithExpiry("vstech", JSON.stringify(test), 60000);
		}
			 //store api data in localstorage for next reload.
		)
		


	}, [] );

	return (
		<AppContext.Provider value={ [ data, setData ] }>
			{ props.children }
		</AppContext.Provider>
	);
};