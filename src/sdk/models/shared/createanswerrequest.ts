import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateAnswerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "examples" })
  examples: string[][];

  @SpeakeasyMetadata()
  @Expose({ name: "examples_context" })
  examplesContext: string;

  @SpeakeasyMetadata()
  @Expose({ name: "expand" })
  expand?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logit_bias" })
  logitBias?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "logprobs" })
  logprobs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "max_rerank" })
  maxRerank?: number;

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
  @Expose({ name: "question" })
  question: string;

  @SpeakeasyMetadata()
  @Expose({ name: "return_metadata" })
  returnMetadata?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "return_prompt" })
  returnPrompt?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "search_model" })
  searchModel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "stop" })
  stop?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "temperature" })
  temperature?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: any;
}