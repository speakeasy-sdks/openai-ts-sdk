import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateAnswerResponseSelectedDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  document?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;
}

export class CreateAnswerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "answers" })
  answers?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "completion" })
  completion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "search_model" })
  searchModel?: string;

  @SpeakeasyMetadata({ elemType: CreateAnswerResponseSelectedDocuments })
  @Expose({ name: "selected_documents" })
  @Type(() => CreateAnswerResponseSelectedDocuments)
  selectedDocuments?: CreateAnswerResponseSelectedDocuments[];
}
