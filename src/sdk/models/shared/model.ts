/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Describes an OpenAI model offering that can be used with the API.
 */
export class Model extends SpeakeasyBase {
    /**
     * The Unix timestamp (in seconds) when the model was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created: number;

    /**
     * The model identifier, which can be referenced in the API endpoints.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The object type, which is always "model".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: string;

    /**
     * The organization that owns the model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owned_by" })
    ownedBy: string;
}
