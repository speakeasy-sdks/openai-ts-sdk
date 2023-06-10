/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateEditResponseChoicesLogprobsTopLogprobs extends SpeakeasyBase {}

export class CreateEditResponseChoicesLogprobs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "text_offset" })
    textOffset?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "token_logprobs" })
    tokenLogprobs?: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "tokens" })
    tokens?: string[];

    @SpeakeasyMetadata({ elemType: CreateEditResponseChoicesLogprobsTopLogprobs })
    @Expose({ name: "top_logprobs" })
    @Type(() => CreateEditResponseChoicesLogprobsTopLogprobs)
    topLogprobs?: CreateEditResponseChoicesLogprobsTopLogprobs[];
}

export class CreateEditResponseChoices extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "finish_reason" })
    finishReason?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "logprobs" })
    @Type(() => CreateEditResponseChoicesLogprobs)
    logprobs?: CreateEditResponseChoicesLogprobs;

    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text?: string;
}

export class CreateEditResponseUsage extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "completion_tokens" })
    completionTokens: number;

    @SpeakeasyMetadata()
    @Expose({ name: "prompt_tokens" })
    promptTokens: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total_tokens" })
    totalTokens: number;
}

/**
 * OK
 */
export class CreateEditResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CreateEditResponseChoices })
    @Expose({ name: "choices" })
    @Type(() => CreateEditResponseChoices)
    choices: CreateEditResponseChoices[];

    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created: number;

    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: string;

    @SpeakeasyMetadata()
    @Expose({ name: "usage" })
    @Type(() => CreateEditResponseUsage)
    usage: CreateEditResponseUsage;
}
