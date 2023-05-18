// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { TutorialsId } from './Tutorials';

/** Identifier type for content.tutorials_localized */
export type TutorialsLocalizedLanguage = string;

/** Represents the table content.tutorials_localized */
export default interface TutorialsLocalized {
  tutorial_id: TutorialsId;

  language: TutorialsLocalizedLanguage;

  name: string;

  goal: string;

  raw_description: string;

  raw_content: string;
}

/** Represents the initializer for the table content.tutorials_localized */
export interface TutorialsLocalizedInitializer {
  tutorial_id: TutorialsId;

  language: TutorialsLocalizedLanguage;

  name: string;

  goal: string;

  raw_description: string;

  raw_content: string;
}

/** Represents the mutator for the table content.tutorials_localized */
export interface TutorialsLocalizedMutator {
  tutorial_id?: TutorialsId;

  language?: TutorialsLocalizedLanguage;

  name?: string;

  goal?: string;

  raw_description?: string;

  raw_content?: string;
}
