import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateCompletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=best_of" })
  bestOf?: number;

  @SpeakeasyMetadata({ data: "json, name=echo" })
  echo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frequency_penalty" })
  frequencyPenalty?: number;

  @SpeakeasyMetadata({ data: "json, name=logit_bias" })
  logitBias?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=logprobs" })
  logprobs?: number;

  @SpeakeasyMetadata({ data: "json, name=max_tokens" })
  maxTokens?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=presence_penalty" })
  presencePenalty?: number;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt?: any;

  @SpeakeasyMetadata({ data: "json, name=stop" })
  stop?: any;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=top_p" })
  topP?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}