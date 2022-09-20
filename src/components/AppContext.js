
import React, { useState, useEffect } from 'react';
export const AppContext = React.createContext([
	{},
	() => {}
]);

export const AppProvider = ( props ) => {

	const [ data, setData ] = useState( null );

	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
			fetch('https://vstechtest.azurewebsites.net/api/GetData', {
                headers: {
                    "Authorization": "Bearer e5a81f8c-8aa7-4bc5-a75e-cd7ea8c85968",
                },
            })
            .then((response) => response.json())
            .then((data) => setData(data))

		

	}, [] );

	return (
		<AppContext.Provider value={ [ data, setData ] }>
			{ props.children }
		</AppContext.Provider>
	);
};