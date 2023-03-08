import { OpenAI } from "./openai";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.openai.com/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: APIs for sampling from and fine-tuning language models*/
export class Gpt {
  public openAI: OpenAI;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.3.0";
  private _genVersion = "1.8.6";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.openAI = new OpenAI(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}