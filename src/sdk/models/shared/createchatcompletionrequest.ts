import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChatCompletionRequestMessage } from "./chatcompletionrequestmessage";
import { Expose, Type } from "class-transformer";


export class CreateChatCompletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "frequency_penalty" })
  frequencyPenalty?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "logit_bias" })
  logitBias?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "max_tokens" })
  maxTokens?: number;

  @SpeakeasyMetadata({ elemType: ChatCompletionRequestMessage })
  @Expose({ name: "messages" })
  @Type(() => ChatCompletionRequestMessage)
  messages: ChatCompletionRequestMessage[];

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: string;

  @SpeakeasyMetadata()
  @Expose({ name: "n" })
  n?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "presence_penalty" })
  presencePenalty?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "stop" })
  stop?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "stream" })
  stream?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "temperature" })
  temperature?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "top_p" })
  topP?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: any;
}