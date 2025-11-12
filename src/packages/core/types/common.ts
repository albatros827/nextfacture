/**
 * Cardinality notation (ISO 11179)
 * - 0..0: Not included
 * - 1..1: Mandatory, exactly one occurrence
 * - 0..1: Optional, at most one occurrence
 * - 1..n: Mandatory, one or more occurrences (repeatable)
 * - 0..n: Optional, zero or more occurrences (repeatable)
 */

export type Cardinality = "0..0" | "1..1" | "0..1" | "1..n" | "0..n";

/**
 * Logical data types for business terms
 * Aligned with EN16931 semantic model
 */
export type BusinessTermDataType =
  | "Identifier"
  | "Date"
  | "Text"
  | "Code"
  | "Amount"
  | "UnitPrice"
  | "Quantity"
  | "Percentage"
  | "Binary"
  | "Boolean";

/**
 * Standard nomenclature and code list identifiers
 * Sources: UN/CEFACT, ISO, and other international standards
 */
//TODO: Complete this list
export type NomenclatureValues =
  // UN/CEFACT Code Lists (UNTDID)
  | "UNTDID 1001" // Document type codes
  | "UNTDID 2005" // Date/time/period qualifier
  | "UNTDID 2475" // Date/time/period format qualifier
  | "UNTDID 4451" // Note subject codes
  | "UNTDID 4461" // Payment means codes
  | "UNTDID 5305" // Tax category codes
  | "UNTDID 7143" // Item type identification codes
  | "UNTDID 5189"
  | "ISO 3166"
  | "ISO 4217"
  | "UNTDID 1153"
  | "ISO 6523"; //Subset for Allowance identification code

export interface NomenclatureType {
  cii?: NomenclatureValues;
  ubl?: NomenclatureValues;
  all?: NomenclatureValues;
}

//"UNTDID 1001"
//"ISO 4217"
//
