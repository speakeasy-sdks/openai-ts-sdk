import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateCompletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "best_of" })
  bestOf?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "echo" })
  echo?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "frequency_penalty" })
  frequencyPenalty?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "logit_bias" })
  logitBias?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "logprobs" })
  logprobs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "max_tokens" })
  maxTokens?: number;

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
  @Expose({ name: "prompt" })
  prompt?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "stop" })
  stop?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "stream" })
  stream?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "suffix" })
  suffix?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "temperature" })
  temperature?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "top_p" })
  topP?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;
}