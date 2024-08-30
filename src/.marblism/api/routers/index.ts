/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createPostDataRouter from "./PostData.router";
import createCommentRouter from "./Comment.router";
import createPostCategoryRouter from "./PostCategory.router";
import createCategoryRouter from "./Category.router";
import createProjectRouter from "./Project.router";
import createUserSkillRouter from "./UserSkill.router";
import createSkillRouter from "./Skill.router";
import createMessageRouter from "./Message.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as PostDataClientType } from "./PostData.router";
import { ClientType as CommentClientType } from "./Comment.router";
import { ClientType as PostCategoryClientType } from "./PostCategory.router";
import { ClientType as CategoryClientType } from "./Category.router";
import { ClientType as ProjectClientType } from "./Project.router";
import { ClientType as UserSkillClientType } from "./UserSkill.router";
import { ClientType as SkillClientType } from "./Skill.router";
import { ClientType as MessageClientType } from "./Message.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        postData: createPostDataRouter(router, procedure),
        comment: createCommentRouter(router, procedure),
        postCategory: createPostCategoryRouter(router, procedure),
        category: createCategoryRouter(router, procedure),
        project: createProjectRouter(router, procedure),
        userSkill: createUserSkillRouter(router, procedure),
        skill: createSkillRouter(router, procedure),
        message: createMessageRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    postData: PostDataClientType<AppRouter>;
    comment: CommentClientType<AppRouter>;
    postCategory: PostCategoryClientType<AppRouter>;
    category: CategoryClientType<AppRouter>;
    project: ProjectClientType<AppRouter>;
    userSkill: UserSkillClientType<AppRouter>;
    skill: SkillClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
}
