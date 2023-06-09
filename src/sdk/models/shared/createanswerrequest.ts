/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateAnswerRequest extends SpeakeasyBase {
    /**
     * List of documents from which the answer for the input `question` should be derived. If this is an empty list, the question will be answered based on the question-answer examples.
     *
     * @remarks
     *
     * You should specify either `documents` or a `file`, but not both.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "documents" })
    documents?: string[];

    /**
     * List of (question, answer) pairs that will help steer the model towards the tone and answer format you'd like. We recommend adding 2 to 3 examples.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "examples" })
    examples: string[][];

    /**
     * A text snippet containing the contextual information used to generate the answers for the `examples` you provide.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "examples_context" })
    examplesContext: string;

    /**
     * If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object ID. Currently we support `completion` and `file` objects for expansion.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expand" })
    expand?: any[];

    /**
     * The ID of an uploaded file that contains documents to search over. See [upload file](/docs/api-reference/files/upload) for how to upload a file of the desired format and purpose.
     *
     * @remarks
     *
     * You should specify either `documents` or a `file`, but not both.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file" })
    file?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "logit_bias" })
    logitBias?: any;

    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
     *
     * @remarks
     *
     * The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case.
     *
     * When `logprobs` is set, `completion` will be automatically added into `expand` to get the logprobs.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logprobs" })
    logprobs?: number;

    /**
     * The maximum number of documents to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting it to a higher value leads to improved accuracy but with increased latency and cost.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_rerank" })
    maxRerank?: number;

    /**
     * The maximum number of tokens allowed for the generated answer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_tokens" })
    maxTokens?: number;

    /**
     * ID of the model to use for completion. You can select one of `ada`, `babbage`, `curie`, or `davinci`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: string;

    /**
     * How many answers to generate for each question.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "n" })
    n?: number;

    /**
     * Question to get answered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "question" })
    question: string;

    @SpeakeasyMetadata()
    @Expose({ name: "return_metadata" })
    returnMetadata?: any;

    /**
     * If set to `true`, the returned JSON will include a "prompt" field containing the final prompt that was used to request a completion. This is mainly useful for debugging purposes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "return_prompt" })
    returnPrompt?: boolean;

    /**
     * ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie`, or `davinci`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "search_model" })
    searchModel?: string;

    /**
     * completions_stop_description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stop" })
    stop?: any;

    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "temperature" })
    temperature?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: any;
}
