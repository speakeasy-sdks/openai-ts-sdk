import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: string[];

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=max_rerank" })
  maxRerank?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=return_metadata" })
  returnMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: any;
}