import { Connection, Transaction } from '@solana/web3.js';
import { BaseConfig } from '../../constants';
import BloctoProviderInterface from './blocto.d';

export declare interface SolanaProviderConfig extends BaseConfig {
  net: string | null;
  server?: string;
}

export declare interface SolanaProviderInterface extends BloctoProviderInterface {
  code: string | null;
  net: string;
  rpc: string;
  server: string;
  accounts: Array<string>;

  connect(): Promise<string[]>;
  disconnect(): void;
  request(params: { method: string }): Promise<any>;

  signAndSendTransaction(transaction: Transaction, connection?: Connection): Promise<string>;
  convertToProgramWalletTransaction(transaction: Transaction): Promise<Transaction>;
}
