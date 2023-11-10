/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateMessageRequest } from "./createmessagerequest";
import { Expose, Type } from "class-transformer";

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
 *
 * @remarks
 *
 */
export class CreateThreadRequestMetadata extends SpeakeasyBase {}

export class CreateThreadRequest extends SpeakeasyBase {
    /**
     * A list of [messages](/docs/api-reference/messages) to start the thread with.
     */
    @SpeakeasyMetadata({ elemType: CreateMessageRequest })
    @Expose({ name: "messages" })
    @Type(() => CreateMessageRequest)
    messages?: CreateMessageRequest[];

    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => CreateThreadRequestMetadata)
    metadata?: CreateThreadRequestMetadata;
}
