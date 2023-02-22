import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateAnswerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: string[];

  @SpeakeasyMetadata({ data: "json, name=examples" })
  examples: string[][];

  @SpeakeasyMetadata({ data: "json, name=examples_context" })
  examplesContext: string;

  @SpeakeasyMetadata({ data: "json, name=expand" })
  expand?: any[];

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=logit_bias" })
  logitBias?: any;

  @SpeakeasyMetadata({ data: "json, name=logprobs" })
  logprobs?: number;

  @SpeakeasyMetadata({ data: "json, name=max_rerank" })
  maxRerank?: number;

  @SpeakeasyMetadata({ data: "json, name=max_tokens" })
  maxTokens?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question: string;

  @SpeakeasyMetadata({ data: "json, name=return_metadata" })
  returnMetadata?: any;

  @SpeakeasyMetadata({ data: "json, name=return_prompt" })
  returnPrompt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_model" })
  searchModel?: string;

  @SpeakeasyMetadata({ data: "json, name=stop" })
  stop?: any;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: any;
}