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
export enum CreateCompletionRequestModel2 {
    Babbage002 = "babbage-002",
    Davinci002 = "davinci-002",
    Gpt35TurboInstruct = "gpt-3.5-turbo-instruct",
    TextDavinci003 = "text-davinci-003",
    TextDavinci002 = "text-davinci-002",
    TextDavinci001 = "text-davinci-001",
    CodeDavinci002 = "code-davinci-002",
    TextCurie001 = "text-curie-001",
    TextBabbage001 = "text-babbage-001",
    TextAda001 = "text-ada-001",
}

export class CreateCompletionRequest extends SpeakeasyBase {
    /**
     * Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.
     *
     * @remarks
     *
     * When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.
     *
     * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "best_of" })
    bestOf?: number;

    /**
     * Echo back the prompt in addition to the completion
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "echo" })
    echo?: boolean;

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
     *
     * @remarks
     *
     * [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details)
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "frequency_penalty" })
    frequencyPenalty?: number;

    /**
     * Modify the likelihood of specified tokens appearing in the completion.
     *
     * @remarks
     *
     * Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
     *
     * As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logit_bias" })
    logitBias?: Record<string, number>;

    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
     *
     * @remarks
     *
     * The maximum value for `logprobs` is 5.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logprobs" })
    logprobs?: number;

    /**
     * The maximum number of [tokens](/tokenizer) to generate in the completion.
     *
     * @remarks
     *
     * The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_tokens" })
    maxTokens?: number;

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
     * How many completions to generate for each prompt.
     *
     * @remarks
     *
     * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "n" })
    n?: number;

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
     *
     * @remarks
     *
     * [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details)
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "presence_penalty" })
    presencePenalty?: number;

    /**
     * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
     *
     * @remarks
     *
     * Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt: any;

    /**
     * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stop" })
    stop?: any;

    /**
     * Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stream" })
    stream?: boolean;

    /**
     * The suffix that comes after a completion of inserted text.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "suffix" })
    suffix?: string;

    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     *
     * @remarks
     *
     * We generally recommend altering this or `top_p` but not both.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "temperature" })
    temperature?: number;

    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
     *
     * @remarks
     *
     * We generally recommend altering this or `temperature` but not both.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "top_p" })
    topP?: number;

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
