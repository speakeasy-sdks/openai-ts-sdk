/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChatCompletionResponseMessage } from "./chatcompletionresponsemessage";
import { ChatCompletionTokenLogprob } from "./chatcompletiontokenlogprob";
import { CompletionUsage } from "./completionusage";
import { Expose, Type } from "class-transformer";

/**
 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
 *
 * @remarks
 * `length` if the maximum number of tokens specified in the request was reached,
 * `content_filter` if content was omitted due to a flag from our content filters,
 * `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
 *
 */
export enum FinishReason {
    Stop = "stop",
    Length = "length",
    ToolCalls = "tool_calls",
    ContentFilter = "content_filter",
    FunctionCall = "function_call",
}

/**
 * Log probability information for the choice.
 */
export class Logprobs extends SpeakeasyBase {
    /**
     * A list of message content tokens with log probability information.
     */
    @SpeakeasyMetadata({ elemType: ChatCompletionTokenLogprob })
    @Expose({ name: "content" })
    @Type(() => ChatCompletionTokenLogprob)
    content: ChatCompletionTokenLogprob[];
}

export class Choices extends SpeakeasyBase {
    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
     *
     * @remarks
     * `length` if the maximum number of tokens specified in the request was reached,
     * `content_filter` if content was omitted due to a flag from our content filters,
     * `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "finish_reason" })
    finishReason: FinishReason;

    /**
     * The index of the choice in the list of choices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index: number;

    /**
     * Log probability information for the choice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logprobs" })
    @Type(() => Logprobs)
    logprobs: Logprobs;

    /**
     * A chat completion message generated by the model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    @Type(() => ChatCompletionResponseMessage)
    message: ChatCompletionResponseMessage;
}

/**
 * The object type, which is always `chat.completion`.
 */
export enum CreateChatCompletionResponseObject {
    ChatCompletion = "chat.completion",
}

/**
 * Represents a chat completion response returned by model, based on the provided input.
 */
export class CreateChatCompletionResponse extends SpeakeasyBase {
    /**
     * A list of chat completion choices. Can be more than one if `n` is greater than 1.
     */
    @SpeakeasyMetadata({ elemType: Choices })
    @Expose({ name: "choices" })
    @Type(() => Choices)
    choices: Choices[];

    /**
     * The Unix timestamp (in seconds) of when the chat completion was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created: number;

    /**
     * A unique identifier for the chat completion.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The model used for the chat completion.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: string;

    /**
     * The object type, which is always `chat.completion`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: CreateChatCompletionResponseObject;

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
