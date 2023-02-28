import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateFineTuneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "batch_size" })
  batchSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "classification_betas" })
  classificationBetas?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "classification_n_classes" })
  classificationNClasses?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "classification_positive_class" })
  classificationPositiveClass?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "compute_classification_metrics" })
  computeClassificationMetrics?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "learning_rate_multiplier" })
  learningRateMultiplier?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "n_epochs" })
  nEpochs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt_loss_weight" })
  promptLossWeight?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "suffix" })
  suffix?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "training_file" })
  trainingFile: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_file" })
  validationFile?: string;
}