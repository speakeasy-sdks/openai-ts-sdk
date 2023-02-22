import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateEmbeddingResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embedding" })
  embedding: number[];

  @SpeakeasyMetadata({ data: "json, name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}

export class CreateEmbeddingResponseUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prompt_tokens" })
  promptTokens: number;

  @SpeakeasyMetadata({ data: "json, name=total_tokens" })
  totalTokens: number;
}

export class CreateEmbeddingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CreateEmbeddingResponseData })
  data: CreateEmbeddingResponseData[];

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage: CreateEmbeddingResponseUsage;
}