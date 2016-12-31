const INITIAL = {
  datasetName: "",
  backupName: "",
  appId: ""
};

export default (state = INITIAL, action) => {
  switch(action.type) {
    case 'DATASET_NAME_CHANGE':
      return Object.assign({}, state, {
        datasetName: action.payload
      });
    case 'BACKUP_NAME_CHANGE':
      return Object.assign({}, state, {
        backupName: action.payload
      });
    case 'APP_ID_CHANGE':
      return Object.assign({}, state, {
        appId: action.payload
      });

    default: return state;
  }

};
