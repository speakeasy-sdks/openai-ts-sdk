/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChatCompletionFunctions } from "./chatcompletionfunctions";
import { ChatCompletionRequestMessage } from "./chatcompletionrequestmessage";
import { Expose, Type } from "class-transformer";

/**
 * Controls how the model responds to function calls. "none" means the model does not call a function, and responds to the end-user. "auto" means the model can pick between an end-user or calling a function.  Specifying a particular function via `{"name":\ "my_function"}` forces the model to call that function. "none" is the default when no functions are present. "auto" is the default if functions are present.
 */
export class CreateChatCompletionRequestFunctionCall2 extends SpeakeasyBase {
    /**
     * The name of the function to call.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Controls how the model responds to function calls. "none" means the model does not call a function, and responds to the end-user. "auto" means the model can pick between an end-user or calling a function.  Specifying a particular function via `{"name":\ "my_function"}` forces the model to call that function. "none" is the default when no functions are present. "auto" is the default if functions are present.
 */
export enum CreateChatCompletionRequestFunctionCall1 {
    None = "none",
    Auto = "auto",
}

/**
 * Modify the likelihood of specified tokens appearing in the completion.
 *
 * @remarks
 *
 * Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
 *
 */
export class CreateChatCompletionRequestLogitBias extends SpeakeasyBase {}

export class CreateChatCompletionRequest extends SpeakeasyBase {
    /**
     * completions_frequency_penalty_description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "frequency_penalty" })
    frequencyPenalty?: number;

    /**
     * Controls how the model responds to function calls. "none" means the model does not call a function, and responds to the end-user. "auto" means the model can pick between an end-user or calling a function.  Specifying a particular function via `{"name":\ "my_function"}` forces the model to call that function. "none" is the default when no functions are present. "auto" is the default if functions are present.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "function_call" })
    functionCall?: any;

    /**
     * A list of functions the model may generate JSON inputs for.
     */
    @SpeakeasyMetadata({ elemType: ChatCompletionFunctions })
    @Expose({ name: "functions" })
    @Type(() => ChatCompletionFunctions)
    functions?: ChatCompletionFunctions[];

    /**
     * Modify the likelihood of specified tokens appearing in the completion.
     *
     * @remarks
     *
     * Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logit_bias" })
    @Type(() => CreateChatCompletionRequestLogitBias)
    logitBias?: CreateChatCompletionRequestLogitBias;

    /**
     * The maximum number of [tokens](/tokenizer) to generate in the chat completion.
     *
     * @remarks
     *
     * The total length of input tokens and generated tokens is limited by the model's context length. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb) for counting tokens.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_tokens" })
    maxTokens?: number;

    /**
     * A list of messages comprising the conversation so far. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_format_inputs_to_ChatGPT_models.ipynb).
     */
    @SpeakeasyMetadata({ elemType: ChatCompletionRequestMessage })
    @Expose({ name: "messages" })
    @Type(() => ChatCompletionRequestMessage)
    messages: ChatCompletionRequestMessage[];

    /**
     * ID of the model to use. See the [model endpoint compatibility](/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: string;

    /**
     * How many chat completion choices to generate for each input message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "n" })
    n?: number;

    /**
     * completions_presence_penalty_description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "presence_penalty" })
    presencePenalty?: number;

    /**
     * Up to 4 sequences where the API will stop generating further tokens.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stop" })
    stop?: any;

    /**
     * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stream" })
    stream?: boolean;

    /**
     * completions_temperature_description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "temperature" })
    temperature?: number;

    /**
     * completions_top_p_description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "top_p" })
    topP?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: any;
}
