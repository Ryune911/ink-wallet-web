// @flow
import * as React from "react";
import type {Dispatch} from "../../../types/redux";
// $FlowFixMe
import {connect} from "react-redux";
import {Col} from "react-bootstrap";
import {Translate} from "react-redux-i18n";
import recentIcon from "../../../images/recent-icon.png";
import {mapLastTransactions} from "../../../services/transaction-mapper";
import type {LastTransaction} from "../../../services/transaction-mapper";
import type {AmountState, State} from "../../../initial-state";
import {Address} from "@evercode-lab/qtumcore-lib";
import CurrencyIcon from "../../common/currency-icon";
import moment from "moment";
import {valueFilter} from "../../../services/amount-helper";

type Props = {
  amountState: AmountState,
  address: Address
};

class RecentTransactionsPanel extends React.Component<Props> {
  render(): React.Node {
    const lastestRawTransactions: Array<LastTransaction> = mapLastTransactions(
      this.props.amountState,
      this.props.address.toString());
    const lastestTransactions = lastestRawTransactions.map((transaction: LastTransaction,
                                                            indx: number): React.Node => {
      return (
        <div key={indx} className="transaction-block">
          <div className="transaction-image">
            <div className="line-up"/>
            <CurrencyIcon small={false} currencyName={transaction.currencyName}/>
            <div className="line-down"/>
          </div>
          <div className="transaction-info">
            <div className={`currency-label ${transaction.isIn ? "in" : "out"}`}>
              {`${transaction.currencyName} ${transaction.isIn ? "In" : "Out"}`}
            </div>
            <div className="time-label">
              {moment.unix(transaction.timestamp).format("YYYY.MM.DD HH:mm:ss")}
            </div>
            <div className={`amount-label ${transaction.isIn ? "in" : "out"}`}>
              {`${valueFilter(transaction.value)}
                ${transaction.currencyName}`}
            </div>
          </div>
        </div>
      );
    });

    return (
      <Col className="recent-transactions-panel" xs={12}>
        <div className="recent-transactions-inner">
          <div className="recent-transactions-title-block">
            <Translate value="mainPage.recentTitle"/>
          </div>
          <div className="recent-transactions-title-icon">
            <img width={25} height={25} src={recentIcon}/>
          </div>
        </div>
        <div className="transactions-block">
          {lastestTransactions.length > 0
            ? lastestTransactions
            : (<div className="not-found">
              <div>Transactions not found</div>
            </div>)
          }
        </div>
      </Col>
    );
  }
}

const mapStateToProps = (state: State): Object => {
  return {
    amountState: state.amountState,
    address: state.loginState.address
  };
};

// eslint-disable-next-line max-len
export default connect(mapStateToProps, (dispatch: Dispatch): Object => ({dispatch}))(RecentTransactionsPanel);
