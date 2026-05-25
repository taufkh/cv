export type CaseStudy = {
  slug: string;
  title: string;
  disclosureMode: 'named' | 'anonymized';
  clientLabel: string;
  sector: string;
  platform: string;
  summary: string;
  challenge: string;
  scopeHighlights: string[];
  contributions: string[];
  consultingValue: string[];
  technicalProof: string[];
  ctaContext: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'iconnexion-odoo-17',
    title: 'iConnexion Odoo 17 Stabilization',
    disclosureMode: 'named',
    clientLabel: 'iConnexion',
    sector: 'Industrial distribution & customer operations',
    platform: 'Odoo 17',
    summary:
      'Stabilized a broad Odoo 17 custom landscape so the client could move forward with governance-heavy sales, procurement, warehouse, and finance processes.',
    challenge:
      'The program needed legacy custom modules to work reliably on Odoo 17 while preserving approval discipline, reporting visibility, and rollout readiness across multiple operational domains.',
    scopeHighlights: [
      '30 active custom addons ported and validated for Odoo 17 compatibility',
      'Coverage across CRM, Sales, Procurement, Warehouse, Finance, dashboards, and security',
      'Smoke-test, upgrade-validation, and UAT evidence prepared for handover readiness',
    ],
    contributions: [
      'Ported and hardened custom addons against Odoo 17 model, security, and XML view changes.',
      'Implemented approval-centric workflows for quotation tracking, purchase requests, PO controls, shipment release, and credit note validation.',
      'Resolved regression risks in CRM-to-quotation flows, dependency ordering, access rules, and runtime compatibility.',
      'Built reporting foundations for sales pipeline, pricing history, warehouse visibility, and customer engagement monitoring.',
    ],
    consultingValue: [
      'Improved rollout confidence by turning a fragile custom stack into a more validation-ready operating environment.',
      'Strengthened commercial and finance controls through approval gates, audit fields, and role-based visibility.',
      'Created clearer management visibility with dashboards and structured reporting layers.',
    ],
    technicalProof: [
      '30 active addons in the custom runtime were part of the Odoo 17 stabilization scope.',
      'Work included module upgrade validation, XML compatibility fixes, and regression checklists.',
      'Evidence set covered install logs, smoke tests, upgrade logs, and refactor test data.',
    ],
    ctaContext:
      'Relevant for businesses preparing to modernize a heavily customized Odoo environment without losing operational control.',
  },
  {
    slug: 'multi-process-odoo-16-rollout',
    title: 'Multi-Process Odoo 16 ERP Rollout',
    disclosureMode: 'anonymized',
    clientLabel: 'Confidential Retail & Operations Client',
    sector: 'Retail, warehouse, sourcing, and finance operations',
    platform: 'Odoo 16',
    summary:
      'Supported a wide Odoo 16 implementation spanning warehouse execution, sourcing, finance enhancement, portal workflows, migration, and go-live support.',
    challenge:
      'The environment required deep custom process support across operational and finance functions while still remaining manageable for testing, migration, and production rollout.',
    scopeHighlights: [
      '38 custom addons across sales, warehouse, sourcing, accounting, portal, quality, and reporting',
      'Docker-based deployment with migration scripts, validation flows, and smoke-test documentation',
      'Go-live support materials including UAT scenarios, release notes, and rollout checklists',
    ],
    contributions: [
      'Translated business requirements into custom workflows, validation rules, views, wizards, and reporting support.',
      'Delivered warehouse and after-sales enhancements including outbound picking, barcode workflows, returns, exchange handling, and operational controls.',
      'Implemented finance-related improvements such as reconciliation usability, contra processing, SOA distribution logic, and accounting guardrails.',
      'Prepared migration scope, helper scripts, test data, UAT artifacts, and release support for smoother cutover readiness.',
    ],
    consultingValue: [
      'Reduced implementation risk by connecting process customization with testing, migration, and handover preparation.',
      'Improved operational discipline across warehouse, sourcing, finance, and portal touchpoints.',
      'Provided a stronger structure for multi-stream ERP delivery instead of isolated feature work.',
    ],
    technicalProof: [
      'Repo evidence indicates 38 custom addons in scope for the Odoo 16 custom layer.',
      'The implementation included Python, XML/QWeb, JavaScript patches, PostgreSQL, and Docker.',
      'Supporting artifacts covered migration scripts, smoke tests, UAT checklists, and go-live documentation.',
    ],
    ctaContext:
      'Relevant for companies that need a custom Odoo rollout with strong process breadth, migration planning, and operational testing support.',
  },
  {
    slug: 'retail-pos-loyalty-modernization',
    title: 'Retail POS & Loyalty Modernization on Odoo 17',
    disclosureMode: 'anonymized',
    clientLabel: 'Confidential Retail POS Client',
    sector: 'Retail POS, loyalty, and customer operations',
    platform: 'Odoo 17 Enterprise',
    summary:
      'Customized Odoo 17 Enterprise for retail POS, loyalty, membership, and external integration scenarios while improving local environment reliability for continued development.',
    challenge:
      'The client needed POS behavior that matched real operational policies, along with more dependable integration analysis and a development setup stable enough for testing and enhancement work.',
    scopeHighlights: [
      'POS enhancement across loyalty, redemption, birthday discount, partial payment, approval, and receipt behavior',
      'Troubleshooting scope across cron jobs and external integrations including TikTok, SAP, and WhatsApp-related modules',
      'Docker-based local restore and dependency stabilization to improve development continuity',
    ],
    contributions: [
      'Customized Odoo 17 Enterprise modules for POS, CRM, Sales, Membership, and warehouse-adjacent flows.',
      'Delivered POS-specific business logic for promotions, membership validation, point redemption, and manager-controlled discount behavior.',
      'Investigated cron and integration failures, documented root causes, and structured remediation recommendations.',
      'Supported BRD and change-request definition for project registration, approval levels, ownership rules, and quotation governance.',
    ],
    consultingValue: [
      'Aligned front-line retail workflows with the client’s real control policies instead of default system behavior.',
      'Improved technical clarity around integrations and environment risks before broader regression or rollout activity.',
      'Bridged business clarification and technical remediation in the same engagement stream.',
    ],
    technicalProof: [
      'Custom scope covered POS, loyalty, membership, CRM, and external integration addons on Odoo 17 Enterprise.',
      'Work included cron analysis, dependency troubleshooting, and environment-restore stabilization on Docker.',
      'Supporting documentation included remediation planning, business requirements notes, and change-request artifacts.',
    ],
    ctaContext:
      'Relevant for retail operators who need Odoo POS behavior to match real commercial rules, not just default settings.',
  },
];
