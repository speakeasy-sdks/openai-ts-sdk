import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CreateCompletionResponseChoicesLogprobs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "text_offset" })
  textOffset?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "token_logprobs" })
  tokenLogprobs?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "tokens" })
  tokens?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "top_logprobs" })
  topLogprobs?: Record<string, any>[];
}

export class CreateCompletionResponseChoices extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "finish_reason" })
  finishReason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "logprobs" })
  @Type(() => CreateCompletionResponseChoicesLogprobs)
  logprobs?: CreateCompletionResponseChoicesLogprobs;

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;
}

export class CreateCompletionResponseUsage extends SpeakeasyBase {
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

export class CreateCompletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateCompletionResponseChoices })
  @Expose({ name: "choices" })
  @Type(() => CreateCompletionResponseChoices)
  choices: CreateCompletionResponseChoices[];

  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  created: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object: string;

  @SpeakeasyMetadata()
  @Expose({ name: "usage" })
  @Type(() => CreateCompletionResponseUsage)
  usage?: CreateCompletionResponseUsage;
}