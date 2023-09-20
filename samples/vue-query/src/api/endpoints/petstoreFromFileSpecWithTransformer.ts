/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/vue-query';
import type {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  QueryKey,
  UseQueryReturnType,
  UseInfiniteQueryReturnType,
} from '@tanstack/vue-query';
import { unref, computed } from 'vue';
import type { MaybeRef } from 'vue';
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (
  params?: MaybeRef<ListPetsParams>,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pets>({
    url: `/v${encodeURIComponent(String(unref(version)))}/pets`,
    method: 'get',
    params: unref(params),
    signal,
  });
};

export const getListPetsQueryKey = (
  params?: MaybeRef<ListPetsParams>,
  version = 1,
) => ['v', version, 'pets', ...(params ? [params] : [])] as const;

export const getListPetsInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryOptions<
  Awaited<ReturnType<typeof listPets>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
    pageParam,
  }) => listPets({ limit: pageParam, ...params }, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(version)),
    ...queryOptions,
  };
};

export type ListPetsInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsInfiniteQueryError = Error;

/**
 * @summary List all pets
 */
export const useListPetsInfinite = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsInfiniteQueryOptions(
    params,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryReturnType<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(version)),
    ...queryOptions,
  };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

/**
 * @summary List all pets
 */
export const useListPets = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof listPets>>,
      TError,
      TData
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

/**
 * @summary Create a pet
 */
export const createPets = (
  createPetsBody: MaybeRef<CreatePetsBody>,
  version = 1,
) => {
  return customInstance<Pet>({
    url: `/v${encodeURIComponent(String(unref(version)))}/pets`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

export const getCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}) => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: MaybeRef<string | undefined | null>,
  version = 1,
  signal?: AbortSignal,
) => {
  return customInstance<Pet>({
    url: `/v${encodeURIComponent(
      String(unref(version)),
    )}/pets/${encodeURIComponent(String(unref(petId)))}`,
    method: 'get',
    signal,
  });
};

export const getShowPetByIdQueryKey = (
  petId: MaybeRef<string | undefined | null>,
  version = 1,
) => ['v', version, 'pets', petId] as const;

export const getShowPetByIdInfiniteQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryOptions<
  Awaited<ReturnType<typeof showPetById>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(version && petId)),
    ...queryOptions,
  };
};

export type ShowPetByIdInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdInfiniteQueryError = Error;

/**
 * @summary Info for a specific pet
 */
export const useShowPetByIdInfinite = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getShowPetByIdInfiniteQueryOptions(
    petId,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryReturnType<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(version && petId)),
    ...queryOptions,
  };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */
export const useShowPetById = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof showPetById>>,
      TError,
      TData
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};
