import type {
	DeleteMemberInputType,
	DeleteMemberOutputType,
} from "@vakansia/schemas";

export async function deleteMember(
	input: DeleteMemberInputType
): Promise<DeleteMemberOutputType> {
	console.log(`${deleteMember.name} service`);
	console.log("Input:", input);

	return (await Promise.resolve({})) as unknown as DeleteMemberOutputType;
}
