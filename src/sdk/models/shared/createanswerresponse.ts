import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateAnswerResponseSelectedDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}

export class CreateAnswerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=completion" })
  completion?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=search_model" })
  searchModel?: string;

  @SpeakeasyMetadata({ data: "json, name=selected_documents", elemType: CreateAnswerResponseSelectedDocuments })
  selectedDocuments?: CreateAnswerResponseSelectedDocuments[];
}