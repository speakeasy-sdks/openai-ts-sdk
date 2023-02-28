import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateClassificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "examples" })
  examples?: string[][];

  @SpeakeasyMetadata()
  @Expose({ name: "expand" })
  expand?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "logit_bias" })
  logitBias?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "logprobs" })
  logprobs?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "max_examples" })
  maxExamples?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: any;

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query: string;

  @SpeakeasyMetadata()
  @Expose({ name: "return_metadata" })
  returnMetadata?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "return_prompt" })
  returnPrompt?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "search_model" })
  searchModel?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "temperature" })
  temperature?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: any;
}