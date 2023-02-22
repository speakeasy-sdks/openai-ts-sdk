import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateSearchResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: number;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}

export class CreateSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CreateSearchResponseData })
  data?: CreateSearchResponseData[];

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}