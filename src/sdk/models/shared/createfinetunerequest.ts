import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateFineTuneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batch_size" })
  batchSize?: number;

  @SpeakeasyMetadata({ data: "json, name=classification_betas" })
  classificationBetas?: number[];

  @SpeakeasyMetadata({ data: "json, name=classification_n_classes" })
  classificationNClasses?: number;

  @SpeakeasyMetadata({ data: "json, name=classification_positive_class" })
  classificationPositiveClass?: string;

  @SpeakeasyMetadata({ data: "json, name=compute_classification_metrics" })
  computeClassificationMetrics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=learning_rate_multiplier" })
  learningRateMultiplier?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=n_epochs" })
  nEpochs?: number;

  @SpeakeasyMetadata({ data: "json, name=prompt_loss_weight" })
  promptLossWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=training_file" })
  trainingFile: string;

  @SpeakeasyMetadata({ data: "json, name=validation_file" })
  validationFile?: string;
}