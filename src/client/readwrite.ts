import TwitterApiBase from '../client.base';
import { TwitterApiError } from '../types';
import TwitterApiv1ReadWrite from '../v1/client.v1.write';
import TwitterApiv2ReadWrite from '../v2/client.v2.write';

/**
 * Twitter v1.1 and v2 API client.
 */
export default class TwitterApiReadWrite extends TwitterApiBase {
  protected _v1?: TwitterApiv1ReadWrite;
  protected _v2?: TwitterApiv2ReadWrite;

  /* Direct access to subclients */
  public get v1() {
    if (this._v1) return this._v1;
    
    return this._v1 = new TwitterApiv1ReadWrite(this);
  }

  public get v2() {
    if (this._v2) return this._v2;
    
    return this._v2 = new TwitterApiv2ReadWrite(this);
  }
}