import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateEditResponseChoicesLogprobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text_offset" })
  textOffset?: number[];

  @SpeakeasyMetadata({ data: "json, name=token_logprobs" })
  tokenLogprobs?: number[];

  @SpeakeasyMetadata({ data: "json, name=tokens" })
  tokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=top_logprobs" })
  topLogprobs?: Record<string, any>[];
}

export class CreateEditResponseChoices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finish_reason" })
  finishReason?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=logprobs" })
  logprobs?: CreateEditResponseChoicesLogprobs;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}

export class CreateEditResponseUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion_tokens" })
  completionTokens: number;

  @SpeakeasyMetadata({ data: "json, name=prompt_tokens" })
  promptTokens: number;

  @SpeakeasyMetadata({ data: "json, name=total_tokens" })
  totalTokens: number;
}

export class CreateEditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choices", elemType: CreateEditResponseChoices })
  choices: CreateEditResponseChoices[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage: CreateEditResponseUsage;
}