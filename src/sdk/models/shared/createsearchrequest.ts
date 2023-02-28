import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max_rerank" })
  maxRerank?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query: string;

  @SpeakeasyMetadata()
  @Expose({ name: "return_metadata" })
  returnMetadata?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: any;
}