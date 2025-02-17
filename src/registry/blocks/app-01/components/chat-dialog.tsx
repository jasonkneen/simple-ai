import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useTrackEvent } from "@/lib/events";
import { useGenerationStore } from "@/registry/blocks/app-01/hooks/generation-store";
import {
	ChatInput,
	ChatInputSubmit,
	ChatInputTextArea,
} from "@/registry/ui/chat-input";
import { useCompletion } from "ai/react";
import { useEffect } from "react";

export function ChatDialog() {
	const versions = useGenerationStore((state) => state.versions);
	const currentVersion = useGenerationStore((state) => state.currentVersion);
	const setView = useGenerationStore((state) => state.setView);
	const updateCurrentCode = useGenerationStore(
		(state) => state.updateCurrentCode,
	);
	const updateStatus = useGenerationStore((state) => state.updateStatus);
	const addVersion = useGenerationStore((state) => state.addVersion);
	const chatOpen = useGenerationStore((state) => state.chatOpen);
	const setChatOpen = useGenerationStore((state) => state.setChatOpen);
	const track = useTrackEvent();

	const {
		completion,
		isLoading,
		input,
		handleInputChange,
		handleSubmit,
		stop,
		setInput,
	} = useCompletion({
		api: "/api/ai/generate",
		onFinish: (prompt, completion) => {
			setView("preview");
			updateCurrentCode(completion);
			updateStatus("complete");
			setChatOpen(false);
			track({
				name: "block_used",
				properties: {
					used_block: "app-01",
					used_block_ai_prompt: prompt,
					used_block_ai_completion: completion,
				},
			});
		},
		body: {
			currentCode: versions[currentVersion]?.code ?? "",
		},
	});

	const handleGenerate = () => {
		addVersion("", input);
		handleSubmit();
		setInput("");
		setChatOpen(false);
	};

	useEffect(() => {
		if (completion) {
			updateCurrentCode(completion);
		}
	}, [completion, updateCurrentCode]);

	return (
		<Dialog open={chatOpen} onOpenChange={setChatOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>What UI do you want to build?</DialogTitle>
				</DialogHeader>

				<ChatInput
					value={input}
					onChange={handleInputChange}
					onSubmit={handleGenerate}
					loading={isLoading}
					onStop={stop}
				>
					<ChatInputTextArea placeholder="Type your code generation prompt..." />
					<ChatInputSubmit />
				</ChatInput>
			</DialogContent>
		</Dialog>
	);
}
