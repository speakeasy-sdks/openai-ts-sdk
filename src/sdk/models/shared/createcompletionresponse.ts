/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompletionUsage } from "./completionusage";
import { Expose, Type } from "class-transformer";

/**
 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
 *
 * @remarks
 * `length` if the maximum number of tokens specified in the request was reached,
 * or `content_filter` if content was omitted due to a flag from our content filters.
 *
 */
export enum CreateCompletionResponseFinishReason {
    Stop = "stop",
    Length = "length",
    ContentFilter = "content_filter",
}

export class Logprobs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "text_offset" })
    textOffset?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "token_logprobs" })
    tokenLogprobs?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "tokens" })
    tokens?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "top_logprobs" })
    topLogprobs?: Record<string, number>[];
}

export class CreateCompletionResponseChoices extends SpeakeasyBase {
    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
     *
     * @remarks
     * `length` if the maximum number of tokens specified in the request was reached,
     * or `content_filter` if content was omitted due to a flag from our content filters.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "finish_reason" })
    finishReason: CreateCompletionResponseFinishReason;

    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index: number;

    @SpeakeasyMetadata()
    @Expose({ name: "logprobs" })
    @Type(() => Logprobs)
    logprobs: Logprobs;

    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text: string;
}

/**
 * The object type, which is always "text_completion"
 */
export enum CreateCompletionResponseObject {
    TextCompletion = "text_completion",
}

/**
 * Represents a completion response from the API. Note: both the streamed and non-streamed response objects share the same shape (unlike the chat endpoint).
 *
 * @remarks
 *
 */
export class CreateCompletionResponse extends SpeakeasyBase {
    /**
     * The list of completion choices the model generated for the input prompt.
     */
    @SpeakeasyMetadata({ elemType: CreateCompletionResponseChoices })
    @Expose({ name: "choices" })
    @Type(() => CreateCompletionResponseChoices)
    choices: CreateCompletionResponseChoices[];

    /**
     * The Unix timestamp (in seconds) of when the completion was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created: number;

    /**
     * A unique identifier for the completion.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The model used for completion.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: string;

    /**
     * The object type, which is always "text_completion"
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: CreateCompletionResponseObject;

    /**
     * This fingerprint represents the backend configuration that the model runs with.
     *
     * @remarks
     *
     * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "system_fingerprint" })
    systemFingerprint?: string;

    /**
     * Usage statistics for the completion request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usage" })
    @Type(() => CompletionUsage)
    usage?: CompletionUsage;
}
