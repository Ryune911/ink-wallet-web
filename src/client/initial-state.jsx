// @flow
import Mnemonic from "bitcore-mnemonic";
import {HDPrivateKey, PrivateKey, Address, PublicKey, Transaction} from "@evercode-lab/qtumcore-lib";

export type LoginState = {
  isLoggedIn: boolean,
  seed: ?Uint8Array,
  passwordHash: ?string,
  pubKey: ?PublicKey,
  prKey: ?PrivateKey,
  address: Address,
  backupFile: ?File,
  inputPassword: string,
  invalidData: boolean,
  isFileUploaded: boolean,
  mnemonic: ?Mnemonic,
  dontShowConfirmExit: boolean,
  isExitModalOpen: boolean,
  isExit: boolean,
  lastTransactionTimeStamp: number,
  unconfirmedTransactionsIds: Array<string>,
  isRequestFailModalOpen: boolean,
  requestErrorsCount: number,
  isNewTransactionsModalOpen: boolean,
  blockHeight: number
};

export type NewsState = {
  news: Array<Object>
};

export type ConfigState = {
  defaultLocale: string,
  derivePath: string,
  qtumExplorerPath: string,
  encryptSalt: string,
  INKcontractAddress: string,
  refreshTime: number,
  playMarketDownloadLink: string,
  newsUrl: string
};

export type ReceiveState = {
  isModalOpen: boolean
};

export type SendTransactionState = {
  tokenType: string,
  toAddress: string,
  amount: number,
  description: string,
  fee: number,
  stakingBalance: number,
  isRecommendedFeeFetching: boolean,
  recommendedFee: number,
  tokenRecommendedFee: number,
  isModalOpen: boolean,
  conformationalPassword: string,
  rawUtxos: ?Array<Transaction.UnspentOutput>,
  areRawUtxosFetching: boolean,
  isSucceed: boolean,
  availableAmount: number,
  transactionSendFail: boolean,
  isTransactionIsSending: boolean,
  step: number
};

export const SUPPORTED_CURRENCIES = {
  INK: "INK",
  QTUM: "QTUM"
};

export type TokenDesc = {
  txId: string,
  desc: string
};

export type WalletAmount = {
  balance: number,
  label: string,
  isAmountFetching: boolean,
  areTxsFetching: boolean,
  txs: Array<Object>,
  isFirstFetchComplete: boolean,
  tokenDescs: Array<TokenDesc>,
  totalItems: number,
  isTokenTxPending: boolean,
  pendigTxs: Array<string>
};

export type AmountState = {
  QTUM: WalletAmount,
  INK: WalletAmount
};

export type SecurityCenterState = {
  isErrorModalOpen: boolean,
  isMnemonicModalOpen: boolean,
  inputPassword: string
};

export type CreationState = {
  step: number,
  password: string,
  inputPassword: string,
  areInputPasswordsEqual: boolean,
  arePasswordsValid: boolean,
  isAgreed: boolean,
  isPasswordShort: boolean,
  inputRepeatPassword: string,
  mnemonic: ?Mnemonic,
  hdPrivateKey: ?HDPrivateKey,
  privateKey: ?PrivateKey,
  seed: ?Uint8Array,
  address: ?Address,
  inputMnemonic: string,
  isInputMnemonicEmpty: boolean,
  isInputMnemonicValid: boolean
};

export type I18n = {
  locale: string,
  translations: Object
};

export type State = {
  +loginState: LoginState,
  +creationState: CreationState,
  i18n: I18n,
  +newsState: NewsState,
  +amountState: AmountState,
  +config: ConfigState,
  +sendTransactionState: SendTransactionState,
  +receiveState: ReceiveState,
  +securityCenterState: SecurityCenterState
};

export const initialState: State = {
  loginState: {
    isLoggedIn: false,
    seed: null,
    passwordHash: "",
    pubKey: {},
    prKey: {},
    address: {},
    backupFile: null,
    inputPassword: "",
    isFileUploaded: false,
    invalidData: false,
    mnemonic: null,
    dontShowConfirmExit: false,
    isExitModalOpen: false,
    isExit: false,
    lastTransactionTimeStamp: 0,
    isRequestFailModalOpen: false,
    requestErrorsCount: 0,
    isNewTransactionsModalOpen: false,
    blockHeight: 0,
    unconfirmedTransactionsIds: [],
  },
  newsState: {
    news: []
  },
  creationState: {
    step: 1,
    password: "",
    inputPassword: "",
    inputRepeatPassword: "",
    areInputPasswordsEqual: true,
    arePasswordsValid: true,
    isPasswordShort: false,
    inputMnemonic: "",
    isInputMnemonicEmpty: false,
    isInputMnemonicValid: true,
    isAgreed: false,
    mnemonic: {},
    seed: null,
    hdPrivateKey: {},
    privateKey: {},
    address: {}
  },
  i18n: {
    locale: "en",
    translations: {}
  },
  amountState: {
    QTUM: {
      balance: 0,
      label: "Qtum",
      isAmountFetching: false,
      areTxsFetching: false,
      txs: [],
      isFirstFetchComplete: false,
      tokenDescs: [],
      totalItems: 0,
      isTokenTxPending: false,
      pendigTxs: []
    },
    INK: {
      balance: 0,
      label: "Ink",
      isAmountFetching: false,
      areTxsFetching: false,
      txs: [],
      isFirstFetchComplete: false,
      tokenDescs: [],
      totalItems: 0,
      isTokenTxPending: false,
      pendigTxs: []
    }
  },
  sendTransactionState: {
    tokenType: "",
    toAddress: "",
    amount: 0,
    description: "",
    fee: 0,
    isRecommendedFeeFetching: false,
    recommendedFee: 0,
    tokenRecommendedFee: 0.08,
    isModalOpen: false,
    conformationalPassword: "",
    rawUtxos: [],
    availableAmount: 0,
    stakingBalance: 0,
    areRawUtxosFetching: false,
    isSucceed: false,
    isTransactionIsSending: false,
    transactionSendFail: false,
    step: 0
  },
  securityCenterState: {
    isErrorModalOpen: false,
    isMnemonicModalOpen: false,
    inputPassword: ""
  },
  receiveState: {
    isModalOpen: false
  },
  config: {
    derivePath: "",
    defaultLocale: "",
    qtumExplorerPath: "",
    encryptSalt: "",
    INKcontractAddress: "",
    refreshTime: 0,
    playMarketDownloadLink: "",
    newsUrl: ""
  }
};
