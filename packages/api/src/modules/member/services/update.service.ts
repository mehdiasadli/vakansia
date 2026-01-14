import type {
	UpdateMemberInputType,
	UpdateMemberOutputType,
} from "@vakansia/schemas";

export async function updateMember(
	input: UpdateMemberInputType,
): Promise<UpdateMemberOutputType> {
	console.log(`${updateMember.name} service`);
	console.log("Input:", input);

	return (await Promise.resolve({})) as unknown as UpdateMemberOutputType;
}
