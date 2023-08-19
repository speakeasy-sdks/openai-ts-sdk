/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * A list of the categories, and whether they are flagged or not.
 */
export class CreateModerationResponseResultsCategories extends SpeakeasyBase {
    /**
     * Content that expresses, incites, or promotes harassing language towards any target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "harassment" })
    harassment: boolean;

    /**
     * Harassment content that also includes violence or serious harm towards any target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "harassment/threatening" })
    harassmentThreatening: boolean;

    /**
     * Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harrassment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hate" })
    hate: boolean;

    /**
     * Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hate/threatening" })
    hateThreatening: boolean;

    /**
     * Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self-harm" })
    selfHarm: boolean;

    /**
     * Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self-harm/instructions" })
    selfHarmInstructions: boolean;

    /**
     * Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self-harm/intent" })
    selfHarmIntent: boolean;

    /**
     * Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sexual" })
    sexual: boolean;

    /**
     * Sexual content that includes an individual who is under 18 years old.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sexual/minors" })
    sexualMinors: boolean;

    /**
     * Content that depicts death, violence, or physical injury.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "violence" })
    violence: boolean;

    /**
     * Content that depicts death, violence, or physical injury in graphic detail.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "violence/graphic" })
    violenceGraphic: boolean;
}

/**
 * A list of the categories along with their scores as predicted by model.
 */
export class CreateModerationResponseResultsCategoryScores extends SpeakeasyBase {
    /**
     * The score for the category 'harassment'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "harassment" })
    harassment: number;

    /**
     * The score for the category 'harassment/threatening'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "harassment/threatening" })
    harassmentThreatening: number;

    /**
     * The score for the category 'hate'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hate" })
    hate: number;

    /**
     * The score for the category 'hate/threatening'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hate/threatening" })
    hateThreatening: number;

    /**
     * The score for the category 'self-harm'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self-harm" })
    selfHarm: number;

    /**
     * The score for the category 'self-harm/instructions'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self-harm/instructions" })
    selfHarmInstructions: number;

    /**
     * The score for the category 'self-harm/intent'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self-harm/intent" })
    selfHarmIntent: number;

    /**
     * The score for the category 'sexual'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sexual" })
    sexual: number;

    /**
     * The score for the category 'sexual/minors'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sexual/minors" })
    sexualMinors: number;

    /**
     * The score for the category 'violence'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "violence" })
    violence: number;

    /**
     * The score for the category 'violence/graphic'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "violence/graphic" })
    violenceGraphic: number;
}

export class CreateModerationResponseResults extends SpeakeasyBase {
    /**
     * A list of the categories, and whether they are flagged or not.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "categories" })
    @Type(() => CreateModerationResponseResultsCategories)
    categories: CreateModerationResponseResultsCategories;

    /**
     * A list of the categories along with their scores as predicted by model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "category_scores" })
    @Type(() => CreateModerationResponseResultsCategoryScores)
    categoryScores: CreateModerationResponseResultsCategoryScores;

    /**
     * Whether the content violates [OpenAI's usage policies](/policies/usage-policies).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "flagged" })
    flagged: boolean;
}

/**
 * Represents policy compliance report by OpenAI's content moderation model against a given input.
 */
export class CreateModerationResponse extends SpeakeasyBase {
    /**
     * The unique identifier for the moderation request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The model used to generate the moderation results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: string;

    /**
     * A list of moderation objects.
     */
    @SpeakeasyMetadata({ elemType: CreateModerationResponseResults })
    @Expose({ name: "results" })
    @Type(() => CreateModerationResponseResults)
    results: CreateModerationResponseResults[];
}
