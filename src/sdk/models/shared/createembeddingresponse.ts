/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Embedding } from "./embedding";
import { Expose, Type } from "class-transformer";

/**
 * The object type, which is always "list".
 */
export enum CreateEmbeddingResponseObject {
    List = "list",
}

/**
 * The usage information for the request.
 */
export class Usage extends SpeakeasyBase {
    /**
     * The number of tokens used by the prompt.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt_tokens" })
    promptTokens: number;

    /**
     * The total number of tokens used by the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_tokens" })
    totalTokens: number;
}

export class CreateEmbeddingResponse extends SpeakeasyBase {
    /**
     * The list of embeddings generated by the model.
     */
    @SpeakeasyMetadata({ elemType: Embedding })
    @Expose({ name: "data" })
    @Type(() => Embedding)
    data: Embedding[];

    /**
     * The name of the model used to generate the embedding.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: string;

    /**
     * The object type, which is always "list".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: CreateEmbeddingResponseObject;

    /**
     * The usage information for the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "usage" })
    @Type(() => Usage)
    usage: Usage;
}
