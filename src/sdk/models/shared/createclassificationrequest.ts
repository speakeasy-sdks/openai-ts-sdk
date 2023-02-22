import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateClassificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=examples" })
  examples?: string[][];

  @SpeakeasyMetadata({ data: "json, name=expand" })
  expand?: any;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=logit_bias" })
  logitBias?: any;

  @SpeakeasyMetadata({ data: "json, name=logprobs" })
  logprobs?: any;

  @SpeakeasyMetadata({ data: "json, name=max_examples" })
  maxExamples?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: any;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=return_metadata" })
  returnMetadata?: any;

  @SpeakeasyMetadata({ data: "json, name=return_prompt" })
  returnPrompt?: any;

  @SpeakeasyMetadata({ data: "json, name=search_model" })
  searchModel?: any;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: any;
}