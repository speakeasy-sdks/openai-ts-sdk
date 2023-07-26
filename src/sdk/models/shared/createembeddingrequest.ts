/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
 *
 * @remarks
 *
 */
export enum CreateEmbeddingRequestModel2 {
    TextEmbeddingAda002 = "text-embedding-ada-002",
}

export class CreateEmbeddingRequest extends SpeakeasyBase {
    /**
     * Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. Each input must not exceed the max input tokens for the model (8191 tokens for `text-embedding-ada-002`). [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "input" })
    input: any;

    /**
     * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: any;

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: string;
}
