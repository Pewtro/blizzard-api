import type { ResponseBase } from '../base';

export interface WowTokenResponse extends ResponseBase {
  last_updated_timestamp: number;
  price: number;
}
