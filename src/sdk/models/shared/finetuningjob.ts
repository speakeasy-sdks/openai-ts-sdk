/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OpenAIFile } from "./openaifile";
import { Expose, Type } from "class-transformer";

/**
 * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
 *
 * @remarks
 * "Auto" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs.
 */
export enum FineTuningJobHyperparametersNEpochs1 {
    Auto = "auto",
}

/**
 * The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
 */
export class FineTuningJobHyperparameters extends SpeakeasyBase {
    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
     *
     * @remarks
     * "Auto" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "n_epochs" })
    nEpochs?: any;
}

/**
 * The `fine_tuning.job` object represents a fine-tuning job that has been created through the API.
 *
 * @remarks
 *
 */
export class FineTuningJob extends SpeakeasyBase {
    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: number;

    /**
     * The name of the fine-tuned model that is being created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fine_tuned_model" })
    fineTunedModel: string;

    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was finished.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "finished_at" })
    finishedAt?: number;

    /**
     * The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hyperparameters" })
    @Type(() => FineTuningJobHyperparameters)
    hyperparameters: FineTuningJobHyperparameters;

    /**
     * The object identifier, which can be referenced in the API endpoints.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The base model that is being fine-tuned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: string;

    /**
     * The object type, which is always "fine_tuning.job".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: string;

    /**
     * The organization that owns the fine-tuning job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "organization_id" })
    organizationId: string;

    /**
     * The compiled results files for the fine-tuning job.
     */
    @SpeakeasyMetadata({ elemType: OpenAIFile })
    @Expose({ name: "result_files" })
    @Type(() => OpenAIFile)
    resultFiles: OpenAIFile[];

    /**
     * The current status of the fine-tuning job, which can be either `created`, `pending`, `running`, `succeeded`, `failed`, or `cancelled`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: string;

    /**
     * The total number of billable tokens processed by this fine tuning job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trained_tokens" })
    trainedTokens: number;

    /**
     * The file ID used for training.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "training_file" })
    trainingFile: string;

    /**
     * The file ID used for validation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validation_file" })
    validationFile: string;
}
