import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateModerationResponseResultsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hate" })
  hate: boolean;

  @SpeakeasyMetadata({ data: "json, name=hate/threatening" })
  hateThreatening: boolean;

  @SpeakeasyMetadata({ data: "json, name=self-harm" })
  selfHarm: boolean;

  @SpeakeasyMetadata({ data: "json, name=sexual" })
  sexual: boolean;

  @SpeakeasyMetadata({ data: "json, name=sexual/minors" })
  sexualMinors: boolean;

  @SpeakeasyMetadata({ data: "json, name=violence" })
  violence: boolean;

  @SpeakeasyMetadata({ data: "json, name=violence/graphic" })
  violenceGraphic: boolean;
}

export class CreateModerationResponseResultsCategoryScores extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hate" })
  hate: number;

  @SpeakeasyMetadata({ data: "json, name=hate/threatening" })
  hateThreatening: number;

  @SpeakeasyMetadata({ data: "json, name=self-harm" })
  selfHarm: number;

  @SpeakeasyMetadata({ data: "json, name=sexual" })
  sexual: number;

  @SpeakeasyMetadata({ data: "json, name=sexual/minors" })
  sexualMinors: number;

  @SpeakeasyMetadata({ data: "json, name=violence" })
  violence: number;

  @SpeakeasyMetadata({ data: "json, name=violence/graphic" })
  violenceGraphic: number;
}

export class CreateModerationResponseResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: CreateModerationResponseResultsCategories;

  @SpeakeasyMetadata({ data: "json, name=category_scores" })
  categoryScores: CreateModerationResponseResultsCategoryScores;

  @SpeakeasyMetadata({ data: "json, name=flagged" })
  flagged: boolean;
}

export class CreateModerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CreateModerationResponseResults })
  results: CreateModerationResponseResults[];
}