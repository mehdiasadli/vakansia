import type {
	FindManyMemberInputType,
	FindManyMemberOutputType,
} from "@vakansia/schemas";

export async function findManyMember(
	input: FindManyMemberInputType
): Promise<FindManyMemberOutputType> {
	console.log(`${findManyMember.name} service`);
	console.log("Input:", input);

	return (await Promise.resolve({})) as unknown as FindManyMemberOutputType;
}
