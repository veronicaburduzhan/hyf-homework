/*

What is Trakt?
Trakt is a platform that primarily keeps track of TV shows and movies user watch. 

It also helps to find where to watch movies and TV shows on streaming sources such as Netflix, Amazon, Hulu, and iTunes.

Platform is free to use but has a paid subscribtion with extra features.



At Trakt API is collected interesting info about TV shows and movies that can be used for free. Mostly it's short info about movies. shows, seasons, episodes, persons and users but it has some interesting features. 
1. All methods return objects where inner object "ids" that hepls to create links using Trakt, IMDB, TMDB, or TVDB IDs. 
Fx: 
{
    "title": "Batman Begins",
    "year": 2005,
    "ids": {
        "trakt": 1,
        "slug": "batman-begins-2005",
        "imdb": "tt0372784",
        "tmdb": 272
    }
}

Depends on filters it also possible to render data fx by genres, years, ratings.

*/