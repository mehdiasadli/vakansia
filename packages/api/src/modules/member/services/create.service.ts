import type {
	CreateMemberInputType,
	CreateMemberOutputType,
} from "@vakansia/schemas";

export async function createMember(
	input: CreateMemberInputType,
): Promise<CreateMemberOutputType> {
	console.log(`${createMember.name} service`);
	console.log("Input:", input);

	return (await Promise.resolve({})) as unknown as CreateMemberOutputType;
}
