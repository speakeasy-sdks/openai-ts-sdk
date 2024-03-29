/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateEmbeddingResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "embedding" })
  embedding: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index: number;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object: string;
}

export class CreateEmbeddingResponseUsage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "prompt_tokens" })
  promptTokens: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_tokens" })
  totalTokens: number;
}

/**
 * OK
 */
export class CreateEmbeddingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateEmbeddingResponseData })
  @Expose({ name: "data" })
  @Type(() => CreateEmbeddingResponseData)
  data: CreateEmbeddingResponseData[];

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object: string;

  @SpeakeasyMetadata()
  @Expose({ name: "usage" })
  @Type(() => CreateEmbeddingResponseUsage)
  usage: CreateEmbeddingResponseUsage;
}
