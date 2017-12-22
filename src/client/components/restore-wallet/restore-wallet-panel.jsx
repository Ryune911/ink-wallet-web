// @flow
import * as React from "react";
import {wrapWithWindow} from "../common/windowed";
import {Translate} from "react-redux-i18n";
import type {State} from "../../initial-state";
import type {Dispatch} from "../../types/redux";
// $FlowFixMe
import {connect} from "react-redux";
import {resetCreation, STEPS} from "../../actions/creation-actions";
import SetMnemonics from "./set-mnemonics/set-mnemonics";
import RestoreSuccess from "./restore-success/restore-success";
import ResetPassword from "./reset-password/reset-password";

type Props = {
  dispatch: Dispatch,
  step: number
}

class RestoreWalletPanel extends React.Component<Props> {
  componentDidMount(): void {
    this.props.dispatch(resetCreation());
  }

  componentWillUnmount(): void {
    this.props.dispatch(resetCreation());
  }

  render() {
    let stepPanel;
    switch (this.props.step) {
      case STEPS.FIRST:
        stepPanel = (<SetMnemonics/>);
        break;
      case STEPS.SECOND:
        stepPanel = (<ResetPassword/>);
        break;
      case STEPS.THIRD:
        stepPanel = (<RestoreSuccess/>);
        break;
    }

    return (
      <div className="main-page-form creation-form">
        <div className="creation-heading">
          <span className="heading">
            <Translate value="restoreWallet.title"/>
          </span>
          <div className="divider"/>
          {stepPanel}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): Object => {
  return {
    step: state.creationState.step
  };
};

// eslint-disable-next-line max-len
export default connect(mapStateToProps, (dispatch: Dispatch) => ({dispatch}))(wrapWithWindow(RestoreWalletPanel));
