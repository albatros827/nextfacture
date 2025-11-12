import { Cardinality, BusinessTermDataType, NomenclatureType } from "./common";

/**
 * Complete specification entry for a Business Term (BT) or Business Group (BG)
 *
 * This interface provides a comprehensive, type-safe definition for each field
 * in the French electronic invoice specification.
 */

export interface IBusinessTermDefinition {
  // ==========================================================================
  // IDENTIFICATION
  // ==========================================================================

  /** Unique identifier: BT-xxx (Business Term) or BG-xxx (Business Group) */
  id: string;

  /** Business term label in French (e.g., "Numéro de facture") */
  businessTermLabel: string;

  /** Complete business term definition from EN16931 specification */
  businessTermDefinition: string;

  /** Business Rule Note */
  businessRuleNote: string;

  /** Usage notes, context, and practical guidance */
  usageNote: string;

  // ==========================================================================
  // STRUCTURE
  // ==========================================================================

  /** Parent-child relationships */
  parentID?: string;

  // ==========================================================================
  // PROFILE SUPPORT
  // ==========================================================================

  /** Supported in BASIC WL profile*/
  supportedInBasicWLProfile: boolean;

  /** Supported in EN16931-FR profile (European standard) */
  supportedInEN16931Profile: boolean;

  /** Supported in EXTENDED-CTC-FR profile (French extensions) */
  supportedInExtendedProfile: boolean;

  // ==========================================================================
  // CARDINALITY
  // ==========================================================================

  /**
   * Cardinality in EN16931 semantic model
   * Format: '1..1' (mandatory once), '0..1' (optional), '1..n' (mandatory repeatable), '0..n' (optional repeatable)
   */
  cardinalityEN16931Semantic?: Cardinality;

  /** Cardinality in EN16931 CIUS FR profile */
  cardinalityCIUSFR?: Cardinality;

  /** Cardinality in EXTENDED-CTC-FR profile */
  cardinalityExtended?: Cardinality;

  // ==========================================================================
  // FRENCH REFORM REQUIREMENTS
  // ==========================================================================

  /** Included in Flux 1 or Flux 10 */
  includedInFlux1Or10: boolean;

  // ==========================================================================
  // TECHNICAL MAPPING
  // ==========================================================================

  /** UBL root element (e.g., '/Invoice', '/CreditNote') */
  ublRootElement?: string;

  /** UBL XPath expression to locate this element */
  ublXPath: string;

  /** UN/CEFACT CII XPath expression to locate this element */
  ciiXPath: string;

  // ==========================================================================
  // DATA TYPE & VALIDATION
  // ==========================================================================

  /**
   * Logical data type
   */
  dataType?: BusinessTermDataType;

  /**
   * Allowed values and nomenclatures
   * Examples: 'ISO 4217' (currency codes), 'UNTDID 1001' (document types)
   */
  allowedValues?: NomenclatureType;

  /**
   * Example value for documentation and testing
   */
  example?: string;

  // ==========================================================================
  // BUSINESS RULES
  // ==========================================================================

  /**
   * France specific rules for Flux 2, 8, and 9
   * Structured for better tracking and automation
   */
  rulesFlux_2_8_9: string[];

  /**
   * France specific rules that cannot be validated automatically
   */
  uncontrollableRules: string[];

  /**
   * France specific rules for B2G (Business to Government)
   */
  specificRulesB2G: string[];

  /**
   * EN16931 standard rules
   */
  rulesEN16931: string[];

  /**
   * Adjusted EN16931 rules for EXTENDED-CTC-FR Profile
   */
  rulesExtendedCtcFr: string[];

  // ==========================================================================
  // METADATA & COMMENTS
  // ==========================================================================

  /**
   * Comments about Flux 2, 8, 9 or correction indicators from initial version
   * Kept as string array for backward compatibility
   */
  commentFlux_2_8_9: string[];

  /**
   * Additional metadata
   */
  metadata?: {
    /** Last updated timestamp */
    lastUpdated?: string;

    /** Source document reference */
    sourceDocument?: string;

    /** Version when this term was introduced */
    introducedInVersion?: string;

    /** Any custom tags for categorization */
    tags?: string[];
  };
}
