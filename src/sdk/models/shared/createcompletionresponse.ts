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
export enum CreateCompletionResponseChoicesFinishReason {
    Stop = "stop",
    Length = "length",
    ContentFilter = "content_filter",
}

export class CreateCompletionResponseChoicesLogprobs extends SpeakeasyBase {
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
    finishReason: CreateCompletionResponseChoicesFinishReason;

    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index: number;

    @SpeakeasyMetadata()
    @Expose({ name: "logprobs" })
    @Type(() => CreateCompletionResponseChoicesLogprobs)
    logprobs: CreateCompletionResponseChoicesLogprobs;

    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text: string;
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
    object: string;

    /**
     * Usage statistics for the completion request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usage" })
    @Type(() => CompletionUsage)
    usage?: CompletionUsage;
}
