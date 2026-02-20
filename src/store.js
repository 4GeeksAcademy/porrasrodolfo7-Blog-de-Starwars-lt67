export const initialStore = () => ({
  favoritesNaves: [],
  favoritesPersonajes: [],
  favoritesPlanets: []
})

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "add_favoritesNaves":
      if (store.favoritesNaves.includes(action.payload)) {
        return store;
      }
      return {
        ...store,
        favoritesNaves: [...store.favoritesNaves, action.payload]
      };
    case "delete_favoriteNave":
      return {
        ...store,
        favoritesNaves: store.favoritesNaves.filter((naveFavorita) => naveFavorita !== action.payload)
      };

    case "add_favoritesPersonajes":
      if (store.favoritesPersonajes.includes(action.payload)) {
        return store;
      }
      return {
        ...store,
        favoritesPersonajes: [...store.favoritesPersonajes, action.payload]
      };
    case "delete_favoritePersonajes":
      return {
        ...store,
        favoritesPersonajes: store.favoritesPersonajes.filter((perFavorito) => perFavorito !== action.payload)
      };

    case "add_favoritesPlanets":
      if (store.favoritesPlanets.includes(action.payload)) {
        return store;
      }
      return {
        ...store,
        favoritesPlanets: [...store.favoritesPlanets, action.payload]
      };
    case "delete_favoritePlanet":
      return {
        ...store,
        favoritesPlanets: store.favoritesPlanets.filter((planetFavorito) => planetFavorito !== action.payload)
      };


    default:
      throw Error('Unknown action.');
  }
}
