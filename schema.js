const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

//HardCoded data
const customers = [{ id: '1', name: 'Foo', email: 'foo@bar.com', age: 35 }];
const customers = [{ id: '1', name: 'Teste', email: 'foo@teste.com', age: 35 }];
const customers = [
  { id: '1', name: 'Lipsum', email: 'lorem@ipsum.com', age: 35 }
];

//Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

//RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  customer: {
    type: CustomerType
  }
});

module.exports = new GraphQLSchema({});
