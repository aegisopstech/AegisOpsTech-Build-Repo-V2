//#region node_modules/.nitro/vite/services/ssr/assets/site-B37hbEET.js
var frameworks = [
	"ISO 27001",
	"NIST",
	"COBIT",
	"GDPR",
	"PCI DSS"
];
var advisoryDomains = [
	{
		id: "grc",
		short: "GRC",
		code: "01",
		title: "Governance, risk & compliance",
		intent: "Governance has to be a system the business can run, not a binder that appears when the auditor does.",
		good: "Owners, risks, and controls connect. Evidence comes out of the work, not out of a scramble the week before the review.",
		points: [
			"IT governance framework design & implementation",
			"Risk management — identification, assessment, and treatment",
			"Compliance assessments: ISO 27001, NIST, COBIT, GDPR, PCI DSS",
			"Internal and external IT audit readiness",
			"Policy and control framework development",
			"GRC automation and maturity assessments",
			"Vendor risk and third-party security evaluation"
		]
	},
	{
		id: "isms",
		short: "ISMS",
		code: "02",
		title: "ISMS & cybersecurity",
		intent: "An information security management system that changes how access, incidents, and data are actually handled.",
		good: "Posture is measured. Identity is deliberate. People know what the first hour of an incident requires.",
		points: [
			"ISMS development and advisory",
			"Cybersecurity posture assessments",
			"Identity and access management evaluation",
			"Security architecture and control reviews",
			"Incident management readiness",
			"Data protection, privacy, and compliance reviews",
			"Security awareness and culture programs"
		]
	},
	{
		id: "infrastructure",
		short: "Infra",
		code: "03",
		title: "Infrastructure & operations",
		intent: "The estate — cloud, assets, change, and release — is known, owned, and safe to change.",
		good: "You can name the asset, the owner, the last change, and the patch that is still open.",
		points: [
			"IT infrastructure assessment and optimization",
			"Hybrid and multi-cloud security and compliance",
			"IT asset and configuration management",
			"Patch, change, and release control reviews",
			"CI/CD and DevOps readiness audits"
		]
	},
	{
		id: "applications",
		short: "Apps",
		code: "04",
		title: "Applications",
		intent: "Business systems, including ERP and the APIs around them, carry controls that match how they are really used.",
		good: "Change, access, and data integrity are visible from the transaction back to a person.",
		points: [
			"Application risk and security assessments",
			"ERP, database, and system control reviews",
			"Data classification, integrity, and governance",
			"Application lifecycle and change control evaluation",
			"API security and integration governance"
		]
	},
	{
		id: "data",
		short: "Data",
		code: "05",
		title: "Data governance & management",
		intent: "The firm knows what data it holds, who owns it, and how it is allowed to move.",
		good: "Catalog, glossary, and access rules agree with each other — and with the systems that store the data.",
		points: [
			"Identification of data assets, ownership, and access control",
			"Data catalog architecture",
			"Domain discovery, classification, taxonomy, and hierarchies",
			"Integration of data dictionaries, business glossaries, and catalogs"
		]
	},
	{
		id: "continuity",
		short: "Continuity",
		code: "06",
		title: "Business continuity & disaster recovery",
		intent: "Recovery is a tested capability with numbers, not a document with a date on the cover.",
		good: "RTO and RPO have been measured in a drill. The gaps have names next to them.",
		points: [
			"Business continuity and disaster recovery program design",
			"RTO and RPO evaluation and testing",
			"Crisis response planning and simulation",
			"Resilience gap and maturity assessment"
		]
	},
	{
		id: "kpi",
		short: "KPI / KRI",
		code: "07",
		title: "IT indicators & value",
		intent: "Leadership sees capability and risk in indicators that survive contact with operations.",
		good: "A KPI or KRI changes a decision. It is not a dashboard nobody opens.",
		points: [
			"IT maturity and capability assessments",
			"Benchmarking and KPI dashboards",
			"Strategic IT planning and optimization",
			"Post-implementation reviews",
			"Value realization and process efficiency audits"
		]
	}
];
var workCases = [
	{
		id: "finance",
		group: "operations",
		sector: "Financial & insurance",
		title: "The exception desk that never closes",
		pain: "Claims, bordereaux, and procure-to-pay exceptions pile into shared inboxes. Analysts re-key the same evidence into the core system. Months later, audit cannot reconstruct why a payment was released.",
		agent: "Reads the case packet, matches policy and ledger, drafts the resolution with the sources it used, and parks anything outside tolerance for a named approver.",
		gate: "No payment instruction leaves the sandbox without a human release above the agreed threshold. The trail of sources is the record.",
		signal: "Cycle time on standard exceptions, share prepared versus escalated, and hours to reconstruct a decision."
	},
	{
		id: "healthcare",
		group: "operations",
		sector: "Healthcare & medicine",
		title: "Prior authorization that stalls care",
		pain: "Prior auth and coding queries bounce between clinic, payer, and records. Clinicians retype facts that already exist. Denials arrive late, and copies of PHI end up in side spreadsheets.",
		agent: "Assembles the packet from approved systems, checks it against the payer rule, and drafts the submission. If a clinical fact is missing, it says so. It does not invent one.",
		gate: "Protected health information stays in the tenant. A clinician or coder releases anything that changes a record of care.",
		signal: "Touch time per authorization, denial rate for incomplete packets, and time to a clean escalation."
	},
	{
		id: "people",
		group: "operations",
		sector: "Human capital",
		title: "Onboarding that depends on who is on shift",
		pain: "Offer to day one is a chain across HR, IT, facilities, and the hiring manager. Cases stall in email. Policy answers change with the person who picks up the ticket.",
		agent: "Runs the case across HRIS and the service desk, chases missing inputs, and answers policy only from the approved corpus. A hire that does not match a rule becomes an exception, not a workaround.",
		gate: "Pay, access above baseline, and employment status wait for HR. The agent prepares the case. It does not decide it.",
		signal: "Day-one readiness, consistency of policy answers, and the count of aged cases."
	},
	{
		id: "supply",
		group: "operations",
		sector: "Supply chain",
		title: "The disruption seen after the line has stopped",
		pain: "A late vessel, a quality hold, or an expired vendor certificate is visible in one system and invisible in the plan. Planners often hear it first from the customer.",
		agent: "Watches shipment, quality, and vendor-risk signals, explains the impact on a specific order, and proposes a reallocation for a planner to accept or refuse.",
		gate: "No purchase and no customer commitment is sent without the planner. Vendor risk stays explainable — a score without a reason is not a control.",
		signal: "Hours from signal to decision, expedites avoided, and certificate gaps caught before receipt."
	},
	{
		id: "support",
		group: "operations",
		sector: "Customer support",
		title: "The queue that answers the same ticket twice",
		pain: "Tier one repeats diagnostics senior staff already wrote down. Customers hear a different story at each transfer. The knowledge base is behind the floor.",
		agent: "Classifies the contact, runs the approved diagnostic, and drafts the reply with the article version it used. Unknowns escalate as a structured brief, not an empty ticket.",
		gate: "Refunds, account changes, and regulated statements stay with a person. Every reply cites the source it was allowed to use.",
		signal: "First-contact resolution, handle time, reopen rate, and whether escalations arrive usable."
	},
	{
		id: "textile",
		group: "operations",
		sector: "Textile",
		title: "A mill that cannot prove the shipment",
		pain: "Buyer compliance, shade approval, and shipment documents live in chat threads and shared drives. A failed inspection is discovered at the port. Lot-to-buyer traceability is rebuilt under pressure.",
		agent: "Ties lot, inspection, and document status to the order, chases missing certificates, and prepares the buyer pack. A nonconformance becomes a case with an owner and a date.",
		gate: "Shipment release, and any concession to a buyer, stays with quality leadership.",
		signal: "Documents complete before ex-factory, age of open nonconformances, and claim rate."
	},
	{
		id: "power",
		group: "operations",
		sector: "Power generation",
		title: "Alarms, permits, and the outage window",
		pain: "Alarm floods hide the few that matter. Permit-to-work and isolation steps sit next to the real system, not in it. Maintenance windows collide with generation commitments.",
		agent: "Triages alarms against known patterns, assembles the permit pack, and sequences work against the outage plan. It will not close an isolation step.",
		gate: "Safety-critical steps require a named authorized person. The agent prepares. It does not sign.",
		signal: "Quality of alarm acknowledgement, permit preparation time, and outage tasks that start with complete isolation evidence."
	},
	{
		id: "safety",
		group: "operations",
		sector: "Health & safety",
		title: "Incidents that vanish into narrative",
		pain: "Incident reports are prose. Corrective actions slip their owners. Audit week becomes a hunt for proof that a control actually ran.",
		agent: "Structures the incident, maps it to the hazard register, drafts corrective actions with owners, and assembles the evidence pack from the systems of record.",
		gate: "Severity, and any regulatory notification, stay with the safety lead.",
		signal: "Corrective actions closed on time, minutes to retrieve evidence, and repeat incidents."
	},
	{
		id: "delivery",
		group: "engineering",
		sector: "IT development",
		title: "Specs that die between the ticket and the pull request",
		pain: "Requirements live in decks. Pull requests arrive without the tests or the traceability the deck implied. Review becomes taste.",
		agent: "Turns an accepted spec into tasks, checks the change against those criteria, and comments on the gap. It may open a draft. A person merges.",
		gate: "Protected branches stay human. The agent works in a sandbox repository with no production credentials.",
		signal: "Review cycles, criteria actually covered, and defects that escape."
	},
	{
		id: "patch",
		group: "engineering",
		sector: "IT operations",
		title: "The patch window that keeps slipping",
		pain: "Vulnerability lists are long, owners are unclear, and the change record is written after the fact. Production patches ride on whoever stays late.",
		agent: "Prioritizes by exposure and asset criticality, drafts the change with a backout, and chases owners before the window. It does not push the patch.",
		gate: "The named owner, or the change board, approves. Execution is logged. The agent does not approve its own change.",
		signal: "Time to patch critical assets, change records complete before the window, and failed changes."
	},
	{
		id: "vuln",
		group: "engineering",
		sector: "Vulnerability remediation",
		title: "Findings with no owner and no proof of close",
		pain: "Scanner output is a spreadsheet. The same finding returns next quarter because “fixed” was a comment on a ticket.",
		agent: "Assigns by service ownership, proposes a remediation path, and re-checks the evidence of close — not the ticket status.",
		gate: "Risk acceptance above the threshold needs a named authority and an expiry. Open-ended acceptance is not a treatment.",
		signal: "Findings closed with evidence, reopen rate, and aged criticals."
	},
	{
		id: "compliance",
		group: "engineering",
		sector: "Regulatory governance",
		title: "Evidence week",
		pain: "ISO, NIST, GDPR, and PCI ask for artifacts teams cannot find. Controls exist in policy and not in the pipeline that ships the system.",
		agent: "Maps each control to a system, pulls evidence on a schedule, and flags drift between the policy and what the pipeline actually does.",
		gate: "Attestation stays with the control owner. The agent never marks a control effective on its own.",
		signal: "Hours to produce an evidence pack, controls with fresh evidence, and policy-to-pipeline gaps."
	},
	{
		id: "risk",
		group: "engineering",
		sector: "Risk mitigation",
		title: "A register that is a document, not a system",
		pain: "Risks are scored once a year. Treatment plans have no link to the change that was supposed to reduce them. The committee pack is a surprise.",
		agent: "Watches the signals tied to each treatment — patch rate, access reviews, failed drills — and drafts the narrative for the risk owner to accept or correct.",
		gate: "Residual risk is accepted by the risk owner, not by the model.",
		signal: "Treatments with a live signal, overdue treatments, and surprises that still reach the committee."
	},
	{
		id: "recovery",
		group: "engineering",
		sector: "Disaster recovery",
		title: "A plan nobody has run",
		pain: "RTO and RPO are numbers on a slide. Runbooks are stale. The last exercise was a tabletop that skipped the hard step. Zero downtime is a hope.",
		agent: "Walks the runbook against the live architecture, prepares the drill, records the timings, and files the gaps against the stated RTO.",
		gate: "Failover is a human decision. Outside a declared drill sandbox, the agent does not touch production.",
		signal: "Drills actually completed, measured RTO against the claim, and runbook steps that failed."
	},
	{
		id: "culture",
		group: "engineering",
		sector: "Human capital & culture",
		title: "Awareness nobody remembers on a Thursday",
		pain: "Annual training is a click-through. Engineers route around a control because the secure path is slower, and nobody measures that bypass.",
		agent: "Delivers a role-specific prompt at the moment of the risky action — a public repository, a broad access grant — and records coaching rather than shame.",
		gate: "Discipline and access removal stay with people leadership. The agent does not punish.",
		signal: "Repeat risky actions, time from action to coaching, and how often the control is bypassed."
	}
];
var industries = [
	{
		id: "finance",
		label: "Financial & insurance",
		line: "Exceptions, claims, and payments that must be reconstructable."
	},
	{
		id: "healthcare",
		label: "Healthcare & medicine",
		line: "Prior authorization and coding, without spreading patient data."
	},
	{
		id: "people",
		label: "Human capital",
		line: "Onboarding and policy answers that do not depend on who is on shift."
	},
	{
		id: "supply",
		label: "Supply chain",
		line: "Disruptions seen in time to change the plan, not the apology."
	},
	{
		id: "support",
		label: "Customer support",
		line: "Diagnostics and replies that stay consistent across the queue."
	},
	{
		id: "textile",
		label: "Textile",
		line: "Lot, inspection, and buyer documents in one case — not in a chat."
	},
	{
		id: "power",
		label: "Power generation",
		line: "Alarms, permits, and outage work with a human on the safety step."
	},
	{
		id: "safety",
		label: "Health & safety",
		line: "Incidents and corrective actions with evidence, not prose."
	}
];
var capabilities = [
	{
		code: "01",
		title: "Application development & architecture",
		stance: "Logic, service boundaries, and the integrations that move money and records.",
		points: [
			"Application logic and architecture",
			"Microservices and service-oriented architecture",
			"Web and mobile: React, Angular, Flutter, React Native",
			"REST and GraphQL services",
			"Third-party integrations — applications, databases, payment gateways",
			"Machine learning and AI integration, where it earns a place in the design"
		]
	},
	{
		code: "02",
		title: "User experience & interface",
		stance: "Interfaces a person can finish a task in. Consistent, responsive, and accessible.",
		points: [
			"Interface design and responsive layouts",
			"Design systems and accessibility",
			"Frontend usability and consistency audits"
		]
	},
	{
		code: "03",
		title: "Data management & security",
		stance: "Data that is classed, protected, and explainable to an auditor.",
		points: [
			"Database and data-store design and optimization",
			"Encryption, masking, and protection",
			"Authentication and authorization controls",
			"Audit logging and compliance mechanisms",
			"Privacy and regulatory alignment"
		]
	},
	{
		code: "04",
		title: "Infrastructure & cloud engineering",
		stance: "Cloud, containers, and pipelines treated as production systems, not as diagrams.",
		points: [
			"Public, private, and hybrid cloud",
			"Containers and orchestration — Docker, Kubernetes",
			"Infrastructure as code — Terraform, Ansible, CloudFormation",
			"Configuration management and automation",
			"CI/CD pipeline development and optimization",
			"Version control — Git, GitHub, GitLab, Bitbucket"
		]
	},
	{
		code: "05",
		title: "Monitoring, observability & operations",
		stance: "If it cannot be seen, it cannot be governed.",
		points: [
			"Application performance monitoring",
			"Log management and SIEM integration",
			"Incident, bug tracking, and issue management",
			"Support and helpdesk systems"
		]
	},
	{
		code: "06",
		title: "Process documentation & knowledge",
		stance: "A system nobody can explain will fail the first time its author is away.",
		points: [
			"Operational runbooks tied to the real system",
			"Control narratives an auditor and an engineer can both read",
			"Knowledge bases that serve people — and the agents working beside them"
		]
	}
];
var loopSteps = [
	{
		name: "Trigger",
		text: "Scanner and asset inventory agree: a critical vulnerability sits on a customer-facing payments service, it is exploitable, and it has an owner."
	},
	{
		name: "Plan",
		text: "The agent ranks it against this week’s window, drafts the change with a backout, and names who must approve before anything moves."
	},
	{
		name: "Act",
		text: "It opens the change, gathers package evidence, and prepares the runbook. It does not deploy."
	},
	{
		name: "Verify",
		text: "After the owner runs the window, the agent checks the scanner and the service — not the status of the ticket."
	},
	{
		name: "Human review",
		text: "The service owner accepts what remains or signs the close. The plan, the tool calls, and the release are the record."
	}
];
var trustPoints = [
	{
		title: "Human in the loop",
		text: "Judgment that spends money, changes access, or affects safety is a person’s decision."
	},
	{
		title: "Sandboxed",
		text: "Agents run where they cannot wander the network and collect credentials as they go."
	},
	{
		title: "Private intelligence",
		text: "Models sit in your tenant. Prompts and records are not a shared bin."
	},
	{
		title: "Audit trail",
		text: "Every plan, tool call, and release can be reconstructed. Autonomy you can audit."
	}
];
var method = [
	{
		code: "01",
		title: "Assess",
		text: "Evidence before opinion. The control, the architecture, and the actual workflow — not the slide that describes them."
	},
	{
		code: "02",
		title: "Architect",
		text: "The control, the loop, or the system. Scope what may run on its own. Name the human gate before a line is written."
	},
	{
		code: "03",
		title: "Prove",
		text: "One painful path, measured. Cycle time and evidence quality, not applause for a demo."
	},
	{
		code: "04",
		title: "Embed",
		text: "Owners, runbooks, and your people. We leave a capability, not a dependency on us."
	}
];
var intentions = [
	{
		title: "Tell the client when the honest answer is not yet.",
		text: "A broken control, automated, only fails faster. We will say so."
	},
	{
		title: "Prefer a smaller system that can be audited.",
		text: "Scope is a control. A larger design nobody can explain is not ambition. It is risk."
	},
	{
		title: "Put names on decisions.",
		text: "Models do not own residual risk. A person does, with an expiry when they accept it."
	},
	{
		title: "Write for the next operator.",
		text: "The next person — or the next agent — should be able to run the work without folklore."
	},
	{
		title: "Stay close to the operation.",
		text: "Advice that cannot survive a Tuesday incident is not advice. We assess as people who can also build."
	}
];
var shapes = [
	{
		title: "Advisory assessment",
		text: "A defined slice of governance, security, cloud, applications, data, continuity, or the indicators leadership actually uses."
	},
	{
		title: "Agentic pilot",
		text: "One queue. One loop. One human gate. A before-and-after on cycle time and evidence, then a decision to stop or extend."
	},
	{
		title: "Engineering build",
		text: "Architecture through implementation — or the rescue of a system that cannot be changed safely in its current form."
	},
	{
		title: "Combined",
		text: "Govern the workflow first. Automate only the parts that deserve it. The same team stays accountable for both."
	}
];
var practiceLabels = {
	advisory: "IT advisory",
	agentic: "Agentic engineering",
	engineering: "Software engineering",
	combined: "Combined — govern, then build"
};
var sectorOptions = [
	"Financial & insurance",
	"Healthcare & medicine",
	"Human capital",
	"Supply chain",
	"Customer support",
	"Textile",
	"Power generation",
	"Health & safety",
	"Internal IT & engineering",
	"Other"
];
function pageMeta(title, description) {
	return { meta: [{ title }, {
		name: "description",
		content: description
	}] };
}
//#endregion
export { intentions as a, pageMeta as c, shapes as d, trustPoints as f, industries as i, practiceLabels as l, capabilities as n, loopSteps as o, workCases as p, frameworks as r, method as s, advisoryDomains as t, sectorOptions as u };
