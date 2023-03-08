import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ChatCompletionResponseMessageRoleEnum {
    System = "system",
    User = "user",
    Assistant = "assistant"
}

export class ChatCompletionResponseMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content: string;

  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role: ChatCompletionResponseMessageRoleEnum;
}