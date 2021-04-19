const getState = ({ getStore, setStore, getActions }) => {
  return {
    store: {
      players: {},
    },

    actions: {
      setPlayer: (players) => {
        setStore({ players });
      },
    },
  };
};
export default getState;
