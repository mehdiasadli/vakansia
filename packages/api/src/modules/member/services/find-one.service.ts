import type {
	FindOneMemberInputType,
	FindOneMemberOutputType,
} from "@vakansia/schemas";

export async function findOneMember(
	input: FindOneMemberInputType
): Promise<FindOneMemberOutputType> {
	console.log(`${findOneMember.name} service`);
	console.log("Input:", input);

	return (await Promise.resolve({})) as unknown as FindOneMemberOutputType;
}
