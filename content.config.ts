import { defineCollection, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

const commonContentSchema = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
	date: z.string().nonempty(),
});

const commonArticleSchema = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
	date: z.string().nonempty(),
	image: z.string().url(),
	readingTime: z.string().nonempty(),
	tags: z.array(z.string().nonempty()),
});

const commonProjectSchema = z.object({
	name: z.string().nonempty(),
	image: z.string().url(),
	link: z.string().url(),
	release: z.string().nonempty(),
	date: z.string().nonempty(),
	featured: z.boolean().optional(),
});

const commonFaqSchema = z.object({
	title: z.string().nonempty(),
	subtitle: z.string().nonempty(),
	faqQuestions: z.array(
		z.object({
			title: z.string().nonempty(),
			questions: z.array(
				z.object({
					label: z.string().nonempty(),
					content: z.string().nonempty(),
				}),
			),
		}),
	),
});

export const collections = {
	content_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/**/*.md",
				exclude: ["en/articles/*.md"],
				prefix: "/en",
			},
			schema: commonContentSchema,
		}),
	),
	content_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/**/*.md",
				exclude: ["fr/articles/*.md"],
				prefix: "/fr",
			},
			schema: commonContentSchema,
		}),
	),
	articles_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/articles/*.md",
				prefix: "/en/articles",
			},
			schema: commonArticleSchema,
		}),
	),
	articles_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/articles/*.md",
				prefix: "/fr/articles",
			},
			schema: commonArticleSchema,
		}),
	),
	technology_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/technology/*.md",
				prefix: "/en/technology",
			},
			schema: commonArticleSchema,
		}),
	),
	technology_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/technology/*.md",
				prefix: "/fr/technology",
			},
			schema: commonArticleSchema,
		}),
	),
	investment_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/investment/*.md",
				prefix: "/en/investment",
			},
			schema: commonArticleSchema,
		}),
	),
	investment_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/investment/*.md",
				prefix: "/fr/investment",
			},
			schema: commonArticleSchema,
		}),
	),
	health_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/health/*.md",
				prefix: "/en/health",
			},
			schema: commonArticleSchema,
		}),
	),
	health_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/health/*.md",
				prefix: "/fr/health",
			},
			schema: commonArticleSchema,
		}),
	),
	fashion_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/fashion/*.md",
				prefix: "/en/fashion",
			},
			schema: commonArticleSchema,
		}),
	),
	fashion_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/fashion/*.md",
				prefix: "/fr/fashion",
			},
			schema: commonArticleSchema,
		}),
	),
	lifestyle_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/lifestyle/*.md",
				prefix: "/en/lifestyle",
			},
			schema: commonArticleSchema,
		}),
	),
	lifestyle_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/lifestyle/*.md",
				prefix: "/fr/lifestyle",
			},
			schema: commonArticleSchema,
		}),
	),
	travel_en: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "en/travel/*.md",
				prefix: "/en/travel",
			},
			schema: commonArticleSchema,
		}),
	),
	travel_fr: defineCollection(
		asSeoCollection({
			type: "page",
			source: {
				include: "fr/travel/*.md",
				prefix: "/fr/travel",
			},
			schema: commonArticleSchema,
		}),
	),
	stack: defineCollection({
		type: "data",
		source: "stack.json",
		schema: z.object({
			ite9ms: z.array(
				z.object({
					name: z.string().nonempty(),
					link: z.string().url(),
					icon: z.string().nonempty(),
				}),
			),
		}),
	}),
	faq_en: defineCollection({
		type: "data",
		source: "en/faq.json",
		schema: commonFaqSchema,
	}),
	faq_fr: defineCollection({
		type: "data",
		source: "fr/faq.json",
		schema: commonFaqSchema,
	}),
};
