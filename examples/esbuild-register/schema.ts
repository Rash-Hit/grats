/**
 * Executable schema generated by Grats (https://grats.capt.dev)
 * Do not manually edit. Regenerate by running `npx grats`.
 */
import { allUsers as queryAllUsersResolver } from "./models/User";
import { me as queryMeResolver } from "./Query";
import { person as queryPersonResolver } from "./Query";
import { GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString, GraphQLInterfaceType } from "graphql";
function getSchema(): GraphQLSchema {
    const GroupType: GraphQLObjectType = new GraphQLObjectType({
        name: "Group",
        fields() {
            return {
                description: {
                    name: "description",
                    type: new GraphQLNonNull(GraphQLString)
                },
                members: {
                    name: "members",
                    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType)))
                },
                name: {
                    name: "name",
                    type: new GraphQLNonNull(GraphQLString)
                }
            };
        }
    });
    const IPersonType: GraphQLInterfaceType = new GraphQLInterfaceType({
        name: "IPerson",
        fields() {
            return {
                name: {
                    name: "name",
                    type: new GraphQLNonNull(GraphQLString)
                }
            };
        }
    });
    const UserType: GraphQLObjectType = new GraphQLObjectType({
        name: "User",
        fields() {
            return {
                groups: {
                    name: "groups",
                    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GroupType)))
                },
                name: {
                    name: "name",
                    type: new GraphQLNonNull(GraphQLString)
                }
            };
        },
        interfaces() {
            return [IPersonType];
        }
    });
    const QueryType: GraphQLObjectType = new GraphQLObjectType({
        name: "Query",
        fields() {
            return {
                allUsers: {
                    name: "allUsers",
                    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
                    resolve(source) {
                        return queryAllUsersResolver(source);
                    }
                },
                me: {
                    name: "me",
                    type: new GraphQLNonNull(UserType),
                    resolve(source) {
                        return queryMeResolver(source);
                    }
                },
                person: {
                    name: "person",
                    type: new GraphQLNonNull(IPersonType),
                    resolve(source) {
                        return queryPersonResolver(source);
                    }
                }
            };
        }
    });
    return new GraphQLSchema({
        query: QueryType,
        types: [GroupType, IPersonType, QueryType, UserType]
    });
}
export { getSchema };
