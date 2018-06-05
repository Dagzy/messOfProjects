const graphql = require('graphql');
const _= require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;


//dummy data
var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id:'1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=> ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book:{
            type: BookType,
            //We're defining which arguments should come along for the ride inside this query when they're looking for a book
            //We're saying that one of the arguments should be an id property, and the type of this id property should be a GQLstring
            //The id arg is passed into the query and it's of the type string, that's how we find the book
            args:{id:{type: GraphQLString}},
            resolve(parent, args){
                //Code to get data from db/other source
                //The parent will start to come into play when we start to look at relational data
                return _.find(books, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});