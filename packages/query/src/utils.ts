import {
  createLogger,
  isObject,
  isString,
  Mutator,
  NormalizedMutator,
  NormalizedQueryOptions,
  QueryOptions,
  OutputClient,
  OutputClientFunc,
  upath,
} from '@orval/core';
import chalk from 'chalk';

export const normalizeQueryOptions = (
  queryOptions: QueryOptions = {},
  outputWorkspace: string,
): NormalizedQueryOptions => {
  return {
    ...(queryOptions.useQuery ? { useQuery: true } : {}),
    ...(queryOptions.useInfinite ? { useInfinite: true } : {}),
    ...(queryOptions.useInfiniteQueryParam
      ? { useInfiniteQueryParam: queryOptions.useInfiniteQueryParam }
      : {}),
    ...(queryOptions.options ? { options: queryOptions.options } : {}),
    ...(queryOptions?.queryKey
      ? {
          queryKey: normalizeMutator(outputWorkspace, queryOptions?.queryKey),
        }
      : {}),
    ...(queryOptions?.queryOptions
      ? {
          queryOptions: normalizeMutator(
            outputWorkspace,
            queryOptions?.queryOptions,
          ),
        }
      : {}),
    ...(queryOptions?.mutationOptions
      ? {
          mutationOptions: normalizeMutator(
            outputWorkspace,
            queryOptions?.mutationOptions,
          ),
        }
      : {}),
    ...(queryOptions.signal ? { signal: true } : {}),
  };
};

// Temporary duplicate code before next major release
const normalizeMutator = <T>(
  workspace: string,
  mutator?: Mutator,
): NormalizedMutator | undefined => {
  if (isObject(mutator)) {
    if (!mutator.path) {
      createLogger().error(chalk.red(`Mutator need a path`));
      process.exit(1);
    }

    return {
      ...mutator,
      path: upath.resolve(workspace, mutator.path),
      default: (mutator.default || !mutator.name) ?? false,
    };
  }

  if (isString(mutator)) {
    return {
      path: upath.resolve(workspace, mutator),
      default: true,
    };
  }

  return mutator;
};

/**
 * Wrap any type declaration with MaybeRef\<type\>
 */
export function vueWrapTypeWithMaybeRef(input: string): string {
  if (!input.includes(',')) return input;

  const output = input
    .split(',')
    .map((param) => {
      const [paramName, paramType] = param.split(':');
      if (paramType) {
        return `${paramName}: MaybeRef<${paramType.trim()} | undefined | null>,`;
      } else {
        return `${param},`;
      }
    })
    .join('')
    .replace(',,', ',');

  return output;
}

const wrapRouteParameters = (
  route: string,
  prepend: string,
  append: string,
): string =>
  (route ?? '').replaceAll(/\${(.+?)}/g, `\${${prepend}$1${append}}`);

// Vue persist reactivity
export const vueMakeRouteReactive = (route: string): string =>
  wrapRouteParameters(route, 'unref(', ')');

export const makeRouteSafe = (route: string): string =>
  wrapRouteParameters(route, 'encodeURIComponent(String(', '))');

export const isVue = (client: OutputClient | OutputClientFunc) =>
  OutputClient.VUE_QUERY === client;
