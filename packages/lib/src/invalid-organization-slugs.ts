////
// List of invalid organization slugs
////

export const INVALID_ORGANIZATION_SLUGS = [
	// Core infrastructure
	/^api(?:s|-reference)?$/i,
	/^auth(?:entication|orization)?$/i,
	/^(?:dash)?board$/i,
	/^admin(?:istrator)?$/i,
	/^(?:mod|op)?erator$/i,
	/^root$/i,
	/^system$/i,

	// Documentation & Support
	/^doc(?:umentation|s)?$/i,
	/^help(?:-center)?$/i,
	/^support(?:-center)?$/i,
	/^contact(?:-us)?$/i,
	/^about(?:-us)?$/i,
	/^faqs?$/i,
	/^legal(?:-notice)?$/i,

	// Developer resources
	/^dev(?:elopers?|s|elopment)?$/i,
	/^sandbox$/i,
	/^test(?:ing)?$/i,
	/^demo(?:-site)?$/i,
	/^example(?:-site)?$/i,
	/^sample(?:-site)?$/i,

	// Content & Community
	/^blog(?:s)?$/i,
	/^news(?:letter)?$/i,
	/^community$/i,
	/^forum(?:s)?$/i,
	/^events?$/i,

	// Business pages
	/^careers?$/i,
	/^vacanc(?:y|ies)?$/i,
	/^jobs?$/i,
	/^hiring$/i,
	/^work$/i,
	/^positions?$/i,

	// Technical endpoints
	/^webhooks?$/i,
	/^cdn$/i,
	/^static$/i,
	/^assets?$/i,
	/^media$/i,
	/^uploads?$/i,
	/^files?$/i,

	// Analytics & Monitoring
	/^analytics?$/i,
	/^reports?$/i,
	/^stats?(?:istics)?$/i,
	/^status$/i,
	/^health$/i,
	/^metrics?$/i,
	/^insights?$/i,

	// Brand protection
	/^vakansia(?:-az)?$/i,

	// Versioning
	/^v\d+$/i,

	// Auth & Security
	/^connect$/i,
	/^secure$/i,
	/^login$/i,
	/^logout$/i,
	/^signup$/i,
	/^register$/i,
	/^signin$/i,
	/^signout$/i,
	/^password$/i,
	/^reset$/i,
	/^verify$/i,
	/^oauth$/i,
	/^sso$/i,

	// Integrations
	/^integrations?$/i,
	/^partners?$/i,
	/^marketplace$/i,
	/^apps?$/i,
	/^plugins?$/i,
	/^extensions?$/i,

	// Content delivery
	/^feed$/i,
	/^rss$/i,
	/^sitemap$/i,
	/^robots$/i,

	// Payments & Billing
	/^billing$/i,
	/^payments?$/i,
	/^invoice(?:s)?$/i,
	/^checkout$/i,
	/^pricing$/i,
	/^plans?$/i,
	/^subscribe$/i,

	// User management
	/^users?$/i,
	/^accounts?$/i,
	/^profile(?:s)?$/i,
	/^settings?$/i,
	/^preferences?$/i,

	// Generic reserved words
	/^home$/i,
	/^index$/i,
	/^main$/i,
	/^public$/i,
	/^private$/i,
	/^internal$/i,
	/^external$/i,
	/^app(?:lication)?$/i,
	/^web(?:site)?$/i,
	/^www$/i,
	/^mail$/i,
	/^email$/i,
	/^smtp$/i,
	/^ftp$/i,

	// Common subdomains that might conflict
	/^staging$/i,
	/^prod(?:uction)?$/i,
	/^preview$/i,

	// Offensive/inappropriate (basic list)
	/^admin.*$/i, // Catches admin123, administrator, etc.
	/^test.*$/i, // Catches test123, testing, etc.
];
