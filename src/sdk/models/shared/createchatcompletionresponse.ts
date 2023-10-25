/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChatCompletionResponseMessage } from "./chatcompletionresponsemessage";
import { CompletionUsage } from "./completionusage";
import { Expose, Type } from "class-transformer";

/**
 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
 *
 * @remarks
 * `length` if the maximum number of tokens specified in the request was reached,
 * `content_filter` if content was omitted due to a flag from our content filters,
 * or `function_call` if the model called a function.
 *
 */
export enum CreateChatCompletionResponseChoicesFinishReason {
    Stop = "stop",
    Length = "length",
    FunctionCall = "function_call",
    ContentFilter = "content_filter",
}

export class CreateChatCompletionResponseChoices extends SpeakeasyBase {
    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
     *
     * @remarks
     * `length` if the maximum number of tokens specified in the request was reached,
     * `content_filter` if content was omitted due to a flag from our content filters,
     * or `function_call` if the model called a function.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "finish_reason" })
    finishReason: CreateChatCompletionResponseChoicesFinishReason;

    /**
     * The index of the choice in the list of choices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index: number;

    /**
     * A chat completion message generated by the model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    @Type(() => ChatCompletionResponseMessage)
    message: ChatCompletionResponseMessage;
}

/**
 * Represents a chat completion response returned by model, based on the provided input.
 */
export class CreateChatCompletionResponse extends SpeakeasyBase {
    /**
     * A list of chat completion choices. Can be more than one if `n` is greater than 1.
     */
    @SpeakeasyMetadata({ elemType: CreateChatCompletionResponseChoices })
    @Expose({ name: "choices" })
    @Type(() => CreateChatCompletionResponseChoices)
    choices: CreateChatCompletionResponseChoices[];

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
    object: string;

    /**
     * Usage statistics for the completion request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usage" })
    @Type(() => CompletionUsage)
    usage?: CompletionUsage;
}
