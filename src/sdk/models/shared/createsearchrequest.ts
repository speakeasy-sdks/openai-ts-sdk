/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateSearchRequest extends SpeakeasyBase {
    /**
     * Up to 200 documents to search over, provided as a list of strings.
     *
     * @remarks
     *
     * The maximum document length (in tokens) is 2034 minus the number of tokens in the query.
     *
     * You should specify either `documents` or a `file`, but not both.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "documents" })
    documents?: string[];

    /**
     * The ID of an uploaded file that contains documents to search over.
     *
     * @remarks
     *
     * You should specify either `documents` or a `file`, but not both.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file" })
    file?: string;

    /**
     * The maximum number of documents to be re-ranked and returned by search.
     *
     * @remarks
     *
     * This flag only takes effect when `file` is set.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_rerank" })
    maxRerank?: number;

    /**
     * Query to search against the documents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query: string;

    /**
     * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "metadata" field.
     *
     * @remarks
     *
     * This flag only takes effect when `file` is set.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "return_metadata" })
    returnMetadata?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: any;
}
