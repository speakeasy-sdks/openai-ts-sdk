import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DeleteModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object: string;
}