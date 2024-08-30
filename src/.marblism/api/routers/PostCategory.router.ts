/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PostCategoryInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postCategory.createMany(input as any))),

        create: procedure.input($Schema.PostCategoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postCategory.create(input as any))),

        deleteMany: procedure.input($Schema.PostCategoryInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postCategory.deleteMany(input as any))),

        delete: procedure.input($Schema.PostCategoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postCategory.delete(input as any))),

        findFirst: procedure.input($Schema.PostCategoryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).postCategory.findFirst(input as any))),

        findMany: procedure.input($Schema.PostCategoryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).postCategory.findMany(input as any))),

        findUnique: procedure.input($Schema.PostCategoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).postCategory.findUnique(input as any))),

        updateMany: procedure.input($Schema.PostCategoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postCategory.updateMany(input as any))),

        update: procedure.input($Schema.PostCategoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).postCategory.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PostCategoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostCategoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostCategoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostCategoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PostCategoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostCategoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PostCategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PostCategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostCategoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostCategoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PostCategoryGetPayload<T>, Context>) => Promise<Prisma.PostCategoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PostCategoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostCategoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostCategoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostCategoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PostCategoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostCategoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PostCategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PostCategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostCategoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostCategoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PostCategoryGetPayload<T>, Context>) => Promise<Prisma.PostCategoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PostCategoryFindFirstArgs, TData = Prisma.PostCategoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PostCategoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PostCategoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PostCategoryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PostCategoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PostCategoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PostCategoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PostCategoryFindManyArgs, TData = Array<Prisma.PostCategoryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PostCategoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PostCategoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PostCategoryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PostCategoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PostCategoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PostCategoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PostCategoryFindUniqueArgs, TData = Prisma.PostCategoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PostCategoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PostCategoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PostCategoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PostCategoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PostCategoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PostCategoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PostCategoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostCategoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostCategoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostCategoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PostCategoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PostCategoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PostCategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PostCategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PostCategoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PostCategoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PostCategoryGetPayload<T>, Context>) => Promise<Prisma.PostCategoryGetPayload<T>>
            };

    };
}
