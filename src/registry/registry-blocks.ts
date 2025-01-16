import type { Registry } from "@/registry/schema";

export const blocks: Registry = [
	{
		name: "chat-01",
		description: "A simple chat page.",
		type: "registry:block",
		dependencies: ["ai", "@ai-sdk/openai"],
		registryDependencies: [
			"card",
			"breadcrumb",
			"separator",
			"sidebar",
			"tooltip",
			"button",
			"avatar",
			"dropdown-menu",
			"https://simple-ai.alwurts.com/registry/chat-input.json",
			"https://simple-ai.alwurts.com/registry/chat-message-area.json",
			"https://simple-ai.alwurts.com/registry/chat-message.json",
		],
		files: [
			{
				path: "blocks/chat-01/page.tsx",
				target: "app/chat/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/chat-01/route.ts",
				target: "app/api/ai/chat/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/chat-01/components/chat.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/chat-01/components/sidebar-app.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/chat-01/components/nav-user.tsx",
				type: "registry:component",
			},
		],
		categories: ["chat"],
	},
	{
		name: "chat-02",
		description: "A chat in a sidebar.",
		type: "registry:block",
		dependencies: ["ai", "@ai-sdk/openai"],
		registryDependencies: [
			"sidebar",
			"breadcrumb",
			"https://simple-ai.alwurts.com/registry/chat-input.json",
			"https://simple-ai.alwurts.com/registry/chat-message-area.json",
			"https://simple-ai.alwurts.com/registry/chat-message.json",
		],
		files: [
			{
				path: "blocks/chat-02/page.tsx",
				target: "app/chat/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/chat-02/route.ts",
				target: "app/api/ai/chat/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/chat-02/components/app-sidebar.tsx",
				type: "registry:component",
			},
		],
	},
	{
		name: "chat-03",
		description: "A chat in a popover.",
		type: "registry:block",
		dependencies: ["ai", "@ai-sdk/openai"],
		registryDependencies: [
			"popover",
			"button",
			"https://simple-ai.alwurts.com/registry/chat-input.json",
			"https://simple-ai.alwurts.com/registry/chat-message-area.json",
			"https://simple-ai.alwurts.com/registry/chat-message.json",
		],
		files: [
			{
				path: "blocks/chat-03/page.tsx",
				target: "app/chat/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/chat-03/route.ts",
				target: "app/api/ai/chat/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/chat-03/components/chat.tsx",
				type: "registry:component",
			},
		],
	},
	{
		name: "generative-ui-01",
		description: "A chat with generative UI capabilities.",
		type: "registry:block",
		dependencies: [
			"ai",
			"@ai-sdk/openai",
			"@uiw/react-codemirror",
			"@codemirror/lang-javascript",
			"zustand",
		],
		registryDependencies: [
			"avatar",
			"input",
			"label",
			"tabs",
			"resizable",
			"breadcrumb",
			"button",
			"toggle-group",
			"switch",
			"separator",
			"card",
			"badge",
			"dialog",
			"https://simple-ai.alwurts.com/registry/chat-input.json",
			"https://simple-ai.alwurts.com/registry/chat-message-area.json",
			"https://simple-ai.alwurts.com/registry/chat-message.json",
			"https://simple-ai.alwurts.com/registry/jsx-renderer.json",
			"https://simple-ai.alwurts.com/registry/jsx-utils.json",
		],
		files: [
			{
				path: "blocks/generative-ui-01/page.tsx",
				target: "app/generative-ui/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/generative-ui-01/canvas/page.tsx",
				target: "app/canvas/page.tsx",
				type: "registry:page",
			},
			{
				path: "blocks/generative-ui-01/route.ts",
				target: "app/api/ai/generate/route.ts",
				type: "registry:page",
			},
			{
				path: "blocks/generative-ui-01/hooks/generation-store.ts",
				type: "registry:hook",
			},
			{
				path: "blocks/generative-ui-01/components/versions.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/generative-ui-01/components/editor-layout.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/generative-ui-01/components/code-editor.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/generative-ui-01/components/preview.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/generative-ui-01/components/chat-dialog.tsx",
				type: "registry:component",
			},
			{
				path: "blocks/generative-ui-01/components/copy-button.tsx",
				type: "registry:component",
			},
		],
		categories: ["chat"],
	},
];
