export const selectAllChampions = () => {
  return {type: 'FETCH_ALL_CHAMPS'}
};

export const selectChampionDetails = (name) => {
  return {
    type: 'FETCH_CHAMP_DETAILS',
    payload: name,
  };
};

export const toggleChampionVisibility = (params) => {
  return {
    type: 'SET_CHAMP_VISIBILITY',
    payload:{
      id: params.id,
      isVisible: params.isVisible,
    }
  };
};