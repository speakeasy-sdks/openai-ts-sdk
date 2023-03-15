import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateClassificationResponseSelectedExamples extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  document?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;
}

export class CreateClassificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "completion" })
  completion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "search_model" })
  searchModel?: string;

  @SpeakeasyMetadata({ elemType: CreateClassificationResponseSelectedExamples })
  @Expose({ name: "selected_examples" })
  @Type(() => CreateClassificationResponseSelectedExamples)
  selectedExamples?: CreateClassificationResponseSelectedExamples[];
}
