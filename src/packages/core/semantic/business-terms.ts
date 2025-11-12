/**
 * Complete Business Terms and Business Groups from EN16931 + EXTENDED-CTC-FR
 *
 * Generated from: XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx
 * Sheet: FE EN16931 + EXTENDED
 */
import type { IBusinessTermDefinition } from "../types/business-terms-definition";

export const BUSINESS_TERMS: Record<string, IBusinessTermDefinition> = {
  "BT-1": {
    id: "BT-1",
    businessTermLabel: "Numéro de facture",
    businessTermDefinition: "Identification unique de la Facture.",
    businessRuleNote: "",
    usageNote:
      "Numéro séquentiel requis à l'Article 226(2) de la Directive 2006/112/CE[2], pour identifier la Facture de façon unique. Il peut être basé sur une ou plusieurs séries, qui peuvent comporter des caractères alphanumériques.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "1..1",
    cardinalityCIUSFR: "1..1",
    cardinalityExtended: "1..1",

    includedInFlux1Or10: true,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:ID",
    ciiXPath: "/rsm:CrossIndustryInvoice/rsm:ExchangedDocument/ram:ID",

    dataType: "Identifier",

    rulesFlux_2_8_9: ["BR-FR-01", "BR-FR-02"],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-2"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],
    //metadata
    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-11T18:07:19.211Z",
    },
  },
  "BT-2": {
    id: "BT-2",
    businessTermLabel: "Date d'émission facture",
    businessTermDefinition: "Date à laquelle la Facture a été émise.",
    businessRuleNote: "",
    usageNote: "",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "1..1",
    cardinalityCIUSFR: "1..1",
    cardinalityExtended: "1..1",

    includedInFlux1Or10: true,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:IssueDate",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:ExchangedDocument/ram:IssueDateTime/udt:DateTimeString",

    dataType: "Date",

    rulesFlux_2_8_9: ["BR-FR-03"],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-3"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-11T18:07:19.211Z",
    },
  },
  "BT-3": {
    id: "BT-3",
    businessTermLabel: "Code de type de facture",
    businessTermDefinition:
      "Code spécifiant le type fonctionnel de la Facture.",
    businessRuleNote: "",
    usageNote:
      "Les factures commerciales et les notes de crédit sont définies selon les entrées issues de la liste UNTDID 1001 [6].\nLes autres entrées de la liste UNTDID 1001 [6] concernant des factures ou des notes de crédit spécifiques peuvent être utilisées, le cas échéant.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "1..1",
    cardinalityCIUSFR: "1..1",
    cardinalityExtended: "1..1",

    includedInFlux1Or10: true,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:InvoiceTypeCode\n/cbc:CreditNoteTypeCode",
    ciiXPath: "/rsm:CrossIndustryInvoice/rsm:ExchangedDocument/ram:TypeCode",

    dataType: "Code",
    allowedValues: { all: "UNTDID 1001" },

    rulesFlux_2_8_9: ["BR-FR-04", "BR-FR-CO-08"],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-4"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-5": {
    id: "BT-5",
    businessTermLabel: "Code de devise de la facture",
    businessTermDefinition:
      "Devise dans laquelle tous les montants de la Facture sont exprimés, à l'exception du montant total de la TVA dans la devise de comptabilisation.",
    businessRuleNote: "",
    usageNote:
      "Une seule devise doit être utilisée dans la Facture, sauf pour le montant total de la TVA dans la devise de comptabilisation.\nLa devise peut être spécifiée pour chaque montant ou au niveau du document, en fonction de la syntaxe utilisée.\nLes listes de devises valides sont enregistrées auprès de l'Agence de maintenance de la norme ISO 4217 « Codes pour la représentation des monnaies et types de fonds ». Il est recommandé d'utiliser la représentation alpha‑3.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "1..1",
    cardinalityCIUSFR: "1..1",
    cardinalityExtended: "1..1",

    includedInFlux1Or10: true,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:DocumentCurrencyCode",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeSettlement/ram:InvoiceCurrencyCode",

    dataType: "Code",
    allowedValues: { all: "ISO 4217" },

    rulesFlux_2_8_9: ["BR-FR-CO-12"],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-5"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-6": {
    id: "BT-6",
    businessTermLabel: "Code de devise de comptabilisation de la TVA",
    businessTermDefinition:
      "Devise utilisée pour la comptabilisation et la déclaration de la TVA, acceptée ou exigée dans le pays du Vendeur.",
    businessRuleNote: "",
    usageNote:
      "Doit être utilisée pour le montant total de la TVA dans la devise de comptabilisation, lorsque le code de devise de comptabilisation de la TVA diffère du Code de devise de facturation.\nLes listes de devises valides sont enregistrées auprès de l'Agence de maintenance de la norme ISO 4217 « Codes pour la représentation des monnaies et types de fonds ». Il est recommandé d'utiliser la représentation alpha-3.\nPour plus d'informations, voir l'Article 230 de la Directive 2006/112/CE du Conseil [2].",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:TaxCurrencyCode",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeSettlement/ram:TaxCurrencyCode",

    dataType: "Code",
    allowedValues: { all: "ISO 4217" },

    rulesFlux_2_8_9: ["BR-FR-CO-12"],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-53"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-7": {
    id: "BT-7",
    businessTermLabel: "Date d'exigibilité de la taxe sur la valeur ajoutée",
    businessTermDefinition:
      "Date à laquelle la TVA devient imputable pour le Vendeur et pour l'Acheteur dans la mesure où cette date peut être déterminée et diffère de la date d'émission de la facture, conformément à la directive TVA.",
    businessRuleNote:
      "Cette donnée n'est pas utilisée en France. C'est BT-8 qui indique le régime qui est normalement utilisée.",
    usageNote:
      "La date d'exigibilité correspond généralement à la date à laquelle les biens ont été livrés ou les services achevés (fait générateur). Il existe quelques variations. Pour plus d'informations, voir l'Article 226 (7) de la Directive 2006/112/CE du Conseil [2].\nCet élément est requis si la Date d'exigibilité de la taxe sur la valeur ajoutée diffère de la Date d'émission de la facture.",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:TaxPointDate",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeSettlement/ram:ApplicableTradeTax/ram:TaxPointDate/udt:DateString",

    dataType: "Date",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-CO-3"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-8": {
    id: "BT-8",
    businessTermLabel:
      "Code de date d'exigibilité de la taxe sur la valeur ajoutée",
    businessTermDefinition:
      "Code spécifiant la date à laquelle la TVA devient imputable pour le Vendeur et pour l'Acheteur",
    businessRuleNote:
      "Champ permettant de spécifier l'option pour le paiement de la taxe d'après les débits\n\nPour rappel, en CII, BT-8 est renseignée dans le bloc BG-23. Donc en cas de répétition du groupe BG-23, la valeur de BT-8 doit être identique si renseignée.",
    usageNote:
      "Le code doit être choisi parmi les valeurs suivantes issues de l'UNTDID 2005 ou 2475 [6]:\n- Date de la facture\n- Date de livraison\n- Date de paiement\nLa date d'exigibilité de la taxe sur la valeur ajoutée en code est utilisé lorsque la date d'exigibilité de la taxe sur la valeur ajoutée n'est pas connue au moment de l'envoi de la facture. L'utilisation du BT-8 est donc exclusive de celle du BT-7 et inversement.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: true,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:InvoicePeriod/cbc:DescriptionCode",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeSettlement/ram:ApplicableTradeTax/ram:DueDateTypeCode",

    dataType: "Code",
    allowedValues: { ubl: "UNTDID 2005", cii: "UNTDID 2475" },

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-CO-3"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-9": {
    id: "BT-9",
    businessTermLabel: "Date d'échéance / Date de versement en cas d'acompte",
    businessTermDefinition: "Date à laquelle le paiement est dû.",
    businessRuleNote: "",
    usageNote:
      "La date d'échéance correspond à la date à laquelle le paiement net est dû. Pour les paiements partiels, il s'agit de la première date d'échéance nette. La description correspondant à des conditions de paiement plus complexes est indiquée dans le BT-20.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: true,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:DueDate\n/cac:PaymentMeans/cbc:PaymentDueDate",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeSettlement/ram:SpecifiedTradePaymentTerms/ram:DueDateDateTime/udt:DateTimeString",

    dataType: "Date",

    rulesFlux_2_8_9: ["BR-FR-03", "BR-FR-CO-07", "BR-FR-CO-09"],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-CO-25"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-10": {
    id: "BT-10",
    businessTermLabel: "Référence de l'acheteur",
    businessTermDefinition:
      "Identifiant attribué par l'Acheteur et destiné au routage de la facture en interne.",
    businessRuleNote: "",
    usageNote:
      "L'identifiant est défini par l'Acheteur (par exemple, ID de contact, service, ID de bureau, code de projet) mais est indiqué par le Vendeur dans la Facture.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:BuyerReference",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:BuyerReference",

    dataType: "Text",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-11": {
    id: "BT-11",
    businessTermLabel: "Référence de projet",
    businessTermDefinition:
      "Identification du projet auquel la facture fait référence",
    businessRuleNote: "",
    usageNote: "",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:ProjectReference/cbc:ID\n/cac:AdditionalDocumentReference/cbc:ID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:SpecifiedProcuringProject/ram:ID",

    dataType: "Identifier",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-12": {
    id: "BT-12",
    businessTermLabel: "Référence du contrat",
    businessTermDefinition: "Identifiant d'un contrat.",
    businessRuleNote: "",
    usageNote:
      "L'identifiant du contrat devrait être unique pour une relation commerciale spécifique et pour une période de temps définie.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:ContractDocumentReference/cbc:ID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:ContractReferencedDocument/ram:IssuerAssignedID",

    dataType: "Identifier",

    rulesFlux_2_8_9: ["BR-FR-CO-03"],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "EXT-FR-FE-01": {
    id: "EXT-FR-FE-01",
    businessTermLabel: "Type de contrat",
    businessTermDefinition: "",
    businessRuleNote: "",
    usageNote: "",

    parentID: "BT-12",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: false,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..0",
    cardinalityCIUSFR: "0..0",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:ContractDocumentReference/cbc:DocumentType",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:ContractReferencedDocument/ram:ReferenceTypeCode",

    dataType: "Text",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-13": {
    id: "BT-13",
    businessTermLabel: "Référence du bon de commande",
    businessTermDefinition:
      "Identifiant d'un bon de commande référencé, généré par l'Acheteur.",
    businessRuleNote: "",
    usageNote: "",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:OrderReference/cbc:ID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:BuyerOrderReferencedDocument/ram:IssuerAssignedID",

    dataType: "Identifier",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-14": {
    id: "BT-14",
    businessTermLabel: "Numéro d'ordre de vente",
    businessTermDefinition:
      "Identifiant d'un bon de commande référencé, généré par le Vendeur.",
    businessRuleNote: "",
    usageNote: "",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:OrderReference/cbc:SalesOrderID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:SellerOrderReferencedDocument/ram:IssuerAssignedID",

    dataType: "Identifier",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-15": {
    id: "BT-15",
    businessTermLabel: "Référence d'avis de réception",
    businessTermDefinition: "Identifiant d'un avis de réception référencé.",
    businessRuleNote: "",
    usageNote: "",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:ReceiptDocumentReference/cbc:ID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeDelivery/ram:ReceivingAdviceReferencedDocument/ram:IssuerAssignedID",

    dataType: "Identifier",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-16": {
    id: "BT-16",
    businessTermLabel: "Référence d'avis d'expédition",
    businessTermDefinition: "Identifiant d'un avis d'expédition référencé.",
    businessRuleNote: "",
    usageNote: "",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:DespatchDocumentReference/cbc:ID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeDelivery/ram:DespatchAdviceReferencedDocument/ram:IssuerAssignedID",

    dataType: "Identifier",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-17": {
    id: "BT-17",
    businessTermLabel: "Référence de l'appel d'offres ou du lot",
    businessTermDefinition: "Identifiant d'un appel d'offres ou d'un lot",
    businessRuleNote: "",
    usageNote:
      "Dans certains pays, une référence à l'appel d'offres qui a abouti au contrat doit être fournie.",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:OriginatorDocumentReference/cbc:ID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:AdditionalReferencedDocument/ram:IssuerAssignedID",

    dataType: "Identifier",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-18": {
    id: "BT-18",
    businessTermLabel: "Identifiant d'objet facturé",
    businessTermDefinition:
      "Identifiant d'un objet sur lequel sont basés l'article ou les données facturés et qui est indiqué par le Vendeur.",
    businessRuleNote: "",
    usageNote:
      "Il peut s'agir d'un numéro d'abonnement, d'un numéro de téléphone, d'un compteur, etc., selon le cas.",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:AdditionalDocumentReference/cbc:ID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:AdditionalReferencedDocument/ram:IssuerAssignedID",

    dataType: "Identifier",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-18-1": {
    id: "BT-18-1",
    businessTermLabel: "Identifiant du schéma",
    businessTermDefinition:
      "Identifiant d'un objet sur lequel sont basés l'article ou les données facturés et qui est indiqué par le Vendeur.",
    businessRuleNote: "",
    usageNote:
      "Il peut s'agir d'un numéro d'abonnement, d'un numéro de téléphone, d'un compteur, etc., selon le cas.",

    parentID: "BT-18",

    supportedInBasicWLProfile: false,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..0",
    cardinalityCIUSFR: "0..0",
    cardinalityExtended: "1..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:AdditionalDocumentReference/cbc:ID/@schemeID",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeAgreement/ram:AdditionalReferencedDocument/ram:ReferenceTypeCode",

    dataType: "Identifier",
    allowedValues: { all: "UNTDID 1153" },

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-19": {
    id: "BT-19",
    businessTermLabel: "Référence comptable de l'acheteur",
    businessTermDefinition:
      "Valeur textuelle spécifiant où imputer les données pertinentes dans les comptes comptables de l'Acheteur.",
    businessRuleNote: "",
    usageNote: "",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cbc:AccountingCost",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeSettlement/ram:ReceivableSpecifiedTradeAccountingAccount/ram:ID",

    dataType: "Text",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: [],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
  "BT-20": {
    id: "BT-20",
    businessTermLabel: "Conditions de paiement",
    businessTermDefinition:
      "Description textuelle des conditions de paiement applicables au montant à payer (y compris la description des pénalités éventuelles).",
    businessRuleNote:
      "Ce champs permet aussi d'exprimer une règle de délai de paiement en mode texte (30 JOURS NET, …)",
    usageNote: "Cet élément peut contenir plusieurs lignes et plusieurs termes.",

    supportedInBasicWLProfile: true,
    supportedInEN16931Profile: true,
    supportedInExtendedProfile: true,

    cardinalityEN16931Semantic: "0..1",
    cardinalityCIUSFR: "0..1",
    cardinalityExtended: "0..1",

    includedInFlux1Or10: false,

    ublRootElement: "/Invoice\n/CreditNote",
    ublXPath: "/cac:PaymentTerms/cbc:Note",
    ciiXPath:
      "/rsm:CrossIndustryInvoice/rsm:SupplyChainTradeTransaction/ram:ApplicableHeaderTradeSettlement/ram:SpecifiedTradePaymentTerms/ram:Description",

    dataType: "Text",

    rulesFlux_2_8_9: [],
    uncontrollableRules: [],
    specificRulesB2G: [],
    rulesEN16931: ["BR-CO-25"],
    rulesExtendedCtcFr: [],
    commentFlux_2_8_9: [],

    metadata: {
      sourceDocument: "XP_Z12-012_Annexe_A_V1.1_2025_07_31.xlsx",
      lastUpdated: "2025-11-12T10:30:00.000Z",
    },
  },
};
