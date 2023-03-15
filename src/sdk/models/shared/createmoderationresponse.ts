import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateModerationResponseResultsCategories extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hate" })
  hate: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "hate/threatening" })
  hateThreatening: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "self-harm" })
  selfHarm: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "sexual" })
  sexual: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "sexual/minors" })
  sexualMinors: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "violence" })
  violence: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "violence/graphic" })
  violenceGraphic: boolean;
}

export class CreateModerationResponseResultsCategoryScores extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hate" })
  hate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "hate/threatening" })
  hateThreatening: number;

  @SpeakeasyMetadata()
  @Expose({ name: "self-harm" })
  selfHarm: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sexual" })
  sexual: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sexual/minors" })
  sexualMinors: number;

  @SpeakeasyMetadata()
  @Expose({ name: "violence" })
  violence: number;

  @SpeakeasyMetadata()
  @Expose({ name: "violence/graphic" })
  violenceGraphic: number;
}

export class CreateModerationResponseResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "categories" })
  @Type(() => CreateModerationResponseResultsCategories)
  categories: CreateModerationResponseResultsCategories;

  @SpeakeasyMetadata()
  @Expose({ name: "category_scores" })
  @Type(() => CreateModerationResponseResultsCategoryScores)
  categoryScores: CreateModerationResponseResultsCategoryScores;

  @SpeakeasyMetadata()
  @Expose({ name: "flagged" })
  flagged: boolean;
}

export class CreateModerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: string;

  @SpeakeasyMetadata({ elemType: CreateModerationResponseResults })
  @Expose({ name: "results" })
  @Type(() => CreateModerationResponseResults)
  results: CreateModerationResponseResults[];
}
