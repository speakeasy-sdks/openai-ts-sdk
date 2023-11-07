/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The object type, which is always `assistant.file`.
 */
export enum ObjectT {
    AssistantFile = "assistant.file",
}

/**
 * A list of [Files](/docs/api-reference/files) attached to an `assistant`.
 */
export class AssistantFileObject extends SpeakeasyBase {
    /**
     * The assistant ID that the file is attached to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assistant_id" })
    assistantId: string;

    /**
     * The Unix timestamp (in seconds) for when the assistant file was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: number;

    /**
     * The identifier, which can be referenced in API endpoints.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The object type, which is always `assistant.file`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: ObjectT;
}