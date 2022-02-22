const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getEntity: (url, img, storeProperty) => {
				const store = getStore();
					fetch(url)
					.then(response => {
						if (!response.ok) {
							throw new Error('help');
						}
						return response.json();
					})
					.then(response => {
						response.results.forEach(entity => entity.imgURL = img)
						setStore({[storeProperty]: response.results});
			
					})
					.catch(e => {
						console.log(e);
					})
			},
			addFavorite: (cardData) => {
				const store = getStore();
				if (!store.favorites.includes(cardData.name)) {
					const favorites = [...store.favorites, cardData.name];
					setStore({favorites: favorites});
				}
			}
		}
	};
};

export default getState;
