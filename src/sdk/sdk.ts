/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OpenAI } from "./openai";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.openai.com/v1"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2.0.0";
    sdkVersion = "2.15.0";
    genVersion = "2.77.1";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * OpenAI API: APIs for sampling from and fine-tuning language models
 */
export class Gpt {
    /**
     * The OpenAI REST API
     */
    public openAI: OpenAI;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.openAI = new OpenAI(this.sdkConfiguration);
    }
}
