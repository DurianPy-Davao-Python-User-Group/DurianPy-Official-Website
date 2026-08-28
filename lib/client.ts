type GraphQLVariables = Record<string, unknown>;

interface GraphQLRequestOptions {
	query: string;
	variables?: GraphQLVariables;
}

interface GraphQLError {
	message: string;
}

interface GraphQLResponse<TData> {
	data?: TData;
	errors?: GraphQLError[];
}

function getPayloadGraphQLEndpoint() {
	const endpoint = process.env.PAYLOAD_GRAPHQL_ENDPOINT;

	if (!endpoint) {
		return null;
	}

	return endpoint;
}

export async function queryPayloadGraphQL<TData>({
	query,
	variables,
}: GraphQLRequestOptions): Promise<TData | null> {
	const endpoint = getPayloadGraphQLEndpoint();

	if (!endpoint) {
		return null;
	}

	const headers: HeadersInit = {
		'Content-Type': 'application/json',
	};

	if (process.env.PAYLOAD_API_KEY) {
		headers.Authorization = `service-accounts API-Key ${process.env.PAYLOAD_API_KEY}`;
	}

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query,
				variables,
			}),
			cache: 'force-cache',
		});

		if (!response.ok) {
			throw new Error(`Payload GraphQL request failed with status ${response.status}`);
		}

		const payload = (await response.json()) as GraphQLResponse<TData>;

		if (payload.errors && payload.errors.length > 0) {
			throw new Error(payload.errors.map((error) => error.message).join('; '));
		}

		return payload.data ?? null;
	} catch (error) {
		console.error('Payload GraphQL request failed:', error);
		return null;
	}
}
