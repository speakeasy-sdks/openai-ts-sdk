/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
 *
 * @remarks
 *
 */
export class ModifyMessageRequestMetadata extends SpeakeasyBase {}

export class ModifyMessageRequest extends SpeakeasyBase {
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => ModifyMessageRequestMetadata)
    metadata?: ModifyMessageRequestMetadata;
}
