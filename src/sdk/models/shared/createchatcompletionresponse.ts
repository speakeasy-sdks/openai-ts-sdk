import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChatCompletionResponseMessage } from "./chatcompletionresponsemessage";
import { Expose, Type } from "class-transformer";

export class CreateChatCompletionResponseChoices extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "finish_reason" })
  finishReason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  @Type(() => ChatCompletionResponseMessage)
  message?: ChatCompletionResponseMessage;
}

export class CreateChatCompletionResponseUsage extends SpeakeasyBase {
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

export class CreateChatCompletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateChatCompletionResponseChoices })
  @Expose({ name: "choices" })
  @Type(() => CreateChatCompletionResponseChoices)
  choices: CreateChatCompletionResponseChoices[];

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
  @Type(() => CreateChatCompletionResponseUsage)
  usage?: CreateChatCompletionResponseUsage;
}
