export const updateDatasetName = (datasetName) => {
  return {
    type: 'DATASET_NAME_CHANGE',
    payload: datasetName
  }
};

export const updateBackupName = (backupName) => {
  return {
    type: 'BACKUP_NAME_CHANGE',
    payload: backupName
  }
};

export const updateAppId = (appId) => {
  return {
    type: 'APP_ID_CHANGE',
    payload: appId
  }
};
