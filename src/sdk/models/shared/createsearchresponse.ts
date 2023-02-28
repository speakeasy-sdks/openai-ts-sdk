import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CreateSearchResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  document?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "score" })
  score?: number;
}

export class CreateSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateSearchResponseData })
  @Expose({ name: "data" })
  @Type(() => CreateSearchResponseData)
  data?: CreateSearchResponseData[];

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object?: string;
}