/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * model_description
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
     * model_description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: any;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: any;
}
