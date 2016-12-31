import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateDatasetName, updateBackupName, updateAppId } from '../actions';
import { Header, Card, LineInput } from '../components';

class App extends Component {
  constructor(props) {
    super(props);
  }

  createBackupObject() {
    return {
      [`${this.props.datasetName}_Register`]: {
        action: "sfdcRegister",
        parameters: {
          name: this.props.backupName,
          alias: this.props.backupName,
          source: `Extract_${this.props.datasetName}`,
          folderid: this.props.appId
        }
      },
      [`Extract_${this.props.datasetName}`]: {
        action: "edgemart",
        parameters: {
          alias: this.props.datasetName
        }
      }
    }
  }

  render() {
    return (
        <div>
          <Header>Wave Analytics Dataset Backup Tool</Header>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Card>
              <LineInput label="Dataset System Name: " name="datasetName" placeholder="sw_co_prime" value={this.props.datasetName} onChange={(e) => {this.props.updateDatasetName(e.target.value)}} />
              <LineInput label="Backup Dataset Name: " name="backupName" placeholder="sw_co_prime_12242016" value={this.props.backupName} onChange={(e) => {this.props.updateBackupName(e.target.value)}} />
              <LineInput label="Destination App ID: " name="appId" placeholder="0XXXXXXXXX" value={this.props.appId} onChange={(e) => {this.props.updateAppId(e.target.value)}} />
            </Card>
            <div style={{flex: 2, borderWidth: 3, borderColor: 'green', borderStyle: 'solid'}}>
              <pre>
                {JSON.stringify(this.createBackupObject(), null, 4)}
              </pre>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps({ backupInfo }) {
  return {
    datasetName: backupInfo.datasetName,
    backupName: backupInfo.backupName,
    appId: backupInfo.appId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateDatasetName,
    updateBackupName,
    updateAppId
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
