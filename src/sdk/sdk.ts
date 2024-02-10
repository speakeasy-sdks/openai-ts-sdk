/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Assistants } from "./assistants";
import { Audio } from "./audio";
import { Chat } from "./chat";
import { Completions } from "./completions";
import { Embeddings } from "./embeddings";
import { Files } from "./files";
import { FineTuning } from "./finetuning";
import { Images } from "./images";
import { Models } from "./models";
import { Moderations } from "./moderations";
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
    apiKeyAuth?: string;

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
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2.0.0";
    sdkVersion = "4.0.1";
    genVersion = "2.252.2";
    userAgent = "speakeasy-sdk/typescript 4.0.1 2.252.2 2.0.0 @speakeasy-api/openai";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * OpenAI API: The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 */
export class Gpt {
    /**
     * Build Assistants that can call models and use tools.
     */
    public assistants: Assistants;
    /**
     * Learn how to turn audio into text or text into audio.
     */
    public audio: Audio;
    /**
     * Given a list of messages comprising a conversation, the model will return a response.
     */
    public chat: Chat;
    /**
     * Given a prompt, the model will return one or more predicted completions, and can also return the probabilities of alternative tokens at each position.
     */
    public completions: Completions;
    /**
     * Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms.
     */
    public embeddings: Embeddings;
    /**
     * Files are used to upload documents that can be used with features like Assistants and Fine-tuning.
     */
    public files: Files;
    /**
     * Manage fine-tuning jobs to tailor a model to your specific training data.
     */
    public fineTuning: FineTuning;
    /**
     * Given a prompt and/or an input image, the model will generate a new image.
     */
    public images: Images;
    /**
     * List and describe the various models available in the API.
     */
    public models: Models;
    /**
     * Given a input text, outputs if the model classifies it as violating OpenAI's content policy.
     */
    public moderations: Moderations;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ apiKeyAuth: props?.apiKeyAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.assistants = new Assistants(this.sdkConfiguration);
        this.audio = new Audio(this.sdkConfiguration);
        this.chat = new Chat(this.sdkConfiguration);
        this.completions = new Completions(this.sdkConfiguration);
        this.embeddings = new Embeddings(this.sdkConfiguration);
        this.files = new Files(this.sdkConfiguration);
        this.fineTuning = new FineTuning(this.sdkConfiguration);
        this.images = new Images(this.sdkConfiguration);
        this.models = new Models(this.sdkConfiguration);
        this.moderations = new Moderations(this.sdkConfiguration);
    }
}
