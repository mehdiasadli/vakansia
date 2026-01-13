import { AppHeader } from "@vakansia/next-ui/app-header/app-header";
import {
	BellIcon,
	BookOpenIcon,
	BriefcaseIcon,
	BuildingIcon,
	FileTextIcon,
	GraduationCapIcon,
	HeartIcon,
	SearchIcon,
	ShieldCheckIcon,
	TrendingUpIcon,
	TrophyIcon,
	UsersIcon,
} from "lucide-react";

export const mainNavItems = [
	// Simple link - Jobs
	{
		label: "Jobs",
		href: "/jobs",
	},

	// Simple link - Companies
	{
		label: "Companies",
		href: "/companies",
	},

	// Group - For Job Seekers
	{
		label: "For Job Seekers",
		href: "/job-seekers",
		icon: <UsersIcon className="size-4" />,
		items: [
			{
				label: "Browse Jobs",
				href: "/jobs",
				icon: <SearchIcon className="size-4" />,
				description: "Find your dream job from thousands of listings",
			},
			{
				label: "Saved Jobs",
				href: "/jobs/saved",
				icon: <HeartIcon className="size-4" />,
				description: "View jobs you've bookmarked",
			},
			{
				label: "Job Alerts",
				href: "/jobs/alerts",
				icon: <BellIcon className="size-4" />,
				description: "Get notified about new opportunities",
			},
			{
				label: "Salary Guide",
				href: "/salary-guide",
				icon: <TrendingUpIcon className="size-4" />,
				description: "Explore average salaries in Azerbaijan",
			},
		],
		secondaryItems: [
			{
				label: "Career Advice",
				href: "/career-advice",
				icon: <BookOpenIcon className="size-4" />,
			},
			{
				label: "Resume Tips",
				href: "/resume-tips",
				icon: <FileTextIcon className="size-4" />,
			},
			{
				label: "Interview Prep",
				href: "/interview-prep",
				icon: <GraduationCapIcon className="size-4" />,
			},
		],
	},

	// Group - For Employers
	{
		label: "For Employers",
		href: "/employers",
		icon: <BuildingIcon className="size-4" />,
		items: [
			{
				label: "Post a Job",
				href: "/employers/post-job",
				icon: <BriefcaseIcon className="size-4" />,
				description: "Reach thousands of qualified candidates",
			},
			{
				label: "Browse Candidates",
				href: "/employers/candidates",
				icon: <UsersIcon className="size-4" />,
				description: "Find the perfect hire for your team",
			},
			{
				label: "Company Profile",
				href: "/employers/profile",
				icon: <BuildingIcon className="size-4" />,
				description: "Showcase your company culture",
			},
			{
				label: "Pricing",
				href: "/employers/pricing",
				icon: <TrophyIcon className="size-4" />,
				description: "View our recruitment packages",
			},
		],
		secondaryItems: [
			{
				label: "Hiring Guide",
				href: "/employers/hiring-guide",
				icon: <BookOpenIcon className="size-4" />,
			},
			{
				label: "Success Stories",
				href: "/employers/success-stories",
				icon: <TrophyIcon className="size-4" />,
			},
		],
	},

	// Group - Resources
	{
		label: "Resources",
		href: "/resources",
		items: [
			{
				label: "Salary Trends",
				href: "/salary-trends",
				icon: <TrendingUpIcon className="size-4" />,
				description: "Market insights and salary data",
			},
			{
				label: "Career Advice",
				href: "/career-advice",
				icon: <BookOpenIcon className="size-4" />,
				description: "Tips for advancing your career",
			},
			{
				label: "Company Reviews",
				href: "/company-reviews",
				icon: <ShieldCheckIcon className="size-4" />,
				description: "Read reviews from employees",
			},
			{
				label: "Job Market Report",
				href: "/job-market-report",
				icon: <FileTextIcon className="size-4" />,
				description: "Latest trends in Azerbaijan job market",
			},
		],
	},
];

export default function SiteLayout({ children }: LayoutProps<"/[locale]">) {
	return (
		<div>
			<AppHeader items={mainNavItems} />
			<main className="container mx-auto px-4 py-2">{children}</main>
		</div>
	);
}
