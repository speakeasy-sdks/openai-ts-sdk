/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateThreadRequest } from "./createthreadrequest";
import { Expose, Type } from "class-transformer";

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
 *
 * @remarks
 *
 */
export class CreateThreadAndRunRequestMetadata extends SpeakeasyBase {}

export class CreateThreadAndRunRequest extends SpeakeasyBase {
    /**
     * The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assistant_id" })
    assistantId: string;

    /**
     * Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "instructions" })
    instructions?: string;

    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => CreateThreadAndRunRequestMetadata)
    metadata?: CreateThreadAndRunRequestMetadata;

    /**
     * The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    /**
     * If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stream" })
    stream?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "thread" })
    @Type(() => CreateThreadRequest)
    thread?: CreateThreadRequest;

    /**
     * Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tools" })
    tools?: any[];
}
